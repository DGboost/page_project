require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');

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
    const newUser = new User({ userId, password: hashedPassword });
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
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  } catch (error) {
    res.status(500).send('서버 오류');
  }
});