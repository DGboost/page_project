require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MongoDB 연결
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB 연결 에러:'));
db.once('open', () => {
  console.log('MongoDB에 성공적으로 연결되었습니다');
});

// User 모델 정의
const UserSchema = new mongoose.Schema({
  userId: String,
  nickname: String,
  password: String
});

const User = mongoose.model('User', UserSchema);

// 아이디 중복 확인 라우트
app.get('/check-userId/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const userExists = await User.findOne({ userId: userId });
    if (userExists) {
      res.json({ isDuplicate: true });
    } else {
      res.json({ isDuplicate: false });
    }
  } catch (error) {
    res.status(500).send('서버 오류 발생: ' + error.message);
  }
});

// 회원가입 라우트
app.post('/register', async (req, res) => {
  try {
    const { userId, password } = req.body;
    const userExists = await User.findOne({ userId: userId });
    if (userExists) {
      res.status(400).send('이미 존재하는 아이디입니다.');
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ 
      userId, 
      nickname: userId, // 닉네임을 userId로 초기화
      password: hashedPassword 
    });
    await newUser.save();
    res.status(201).send('사용자 등록 성공');
  } catch (error) {
    res.status(500).send('서버 오류 발생: ' + error.message);
  }
});

app.get('/', (req, res) => {
  res.send('Welcome to the server!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`서버가 ${PORT}번 포트에서 실행중입니다.`);
});

// login 코드
app.post('/login', async (req, res) => {
  try {
    const { userId, password } = req.body;
    const user = await User.findOne({ userId: userId });

    if (user && bcrypt.compareSync(password, user.password)) {
      // JWT 토큰 생성 (user._id 사용)
      const token = jwt.sign({ userId: user._id.toString() }, process.env.JWT_SECRET, { expiresIn: '1h' });

      // 사용자에게 JWT 토큰과 성공 메시지 전달
      res.json({ success: true, token });
    } else {
      // 로그인 실패 처리
      res.json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).send('서버 오류: ' + error.message);
  }
});

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

// PostSchema
const PostSchema = new mongoose.Schema({
  text: String,
  imageUrl: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  nickname: String, // 닉네임 필드 추가
  createdAt: { type: Date, default: Date.now }
});

const Post = mongoose.model('Post', PostSchema);


app.get('/verify-token', authenticateToken, (req, res) => {
  res.json({ success: true, message: "Token is valid" });
});

// 게시글 저장 라우트
app.post('/api/posts', upload.single('image'), authenticateToken, async (req, res) => {
  try {
    const { text } = req.body;
    const imageUrl = req.file ? req.file.path : '';

    const userId = req.user.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).send('User not found');
    }

    const newPost = new Post({ 
      text, 
      imageUrl, 
      userId: user._id, 
      nickname: user.nickname // 유저의 닉네임 포함
    });
    await newPost.save();
    res.status(201).send('Post created successfully');
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).send('Error creating post');
  }
});

// 게시글 목록 가져오기 라우트
app.get('/api/posts', authenticateToken, async (req, res) => {
  try {
    const posts = await Post.find({})
      .sort({ createdAt: -1 })
      .limit(3)
      .populate('userId', 'nickname');

    res.json(posts.map(post => ({
      _id: post._id,
      text: post.text,
      imageUrl: post.imageUrl,
      userId: post.userId._id,
      nickname: post.nickname, // 닉네임 필드 직접 포함
      createdAt: post.createdAt
    })));
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).send('Error fetching posts');
  }
});

// 닉네임 업데이트 라우트
app.put('/update-nickname', authenticateToken, async (req, res) => {
    try {
        const userId = req.user.userId;
        const { newNickname } = req.body;

        // 동일한 닉네임이 있는지 확인
        const existingUser = await User.findOne({ nickname: newNickname });
        if (existingUser) {
            return res.status(400).send('이미 사용 중인 닉네임입니다.');
        }

        // 닉네임 업데이트
        await User.findByIdAndUpdate(userId, { nickname: newNickname });
        res.send('닉네임이 업데이트 되었습니다.');
    } catch (error) {
        console.error('Error updating nickname:', error);
        res.status(500).send('서버 오류');
    }
});

// 사용자 정보 가져오기 라우트
app.get('/api/user-info', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).send('User not found');
    }

    res.json({ nickname: user.nickname });
  } catch (error) {
    console.error('Error fetching user info:', error);
    res.status(500).send('Error fetching user info');
  }
});