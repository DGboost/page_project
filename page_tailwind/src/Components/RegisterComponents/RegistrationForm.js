import React from "react";

const RegistrationForm = ({ userId, setUserId, password, setPassword, confirmPassword, setConfirmPassword, handleRegister, checkUserId, isUserIdDuplicate }) => {
    return (
        <div className="px-[170px] py-[60px] overflow-hidden flex items-center justify-center gap-[60px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col gap-[24px] flex-1 grow items-center relative">
                <div className="w-[520px] mt-[-1.00px] [font-family:'Roboto-Bold',Helvetica] font-bold text-black text-[40px] text-center leading-[48px] relative tracking-[0]">
                    회원 정보 입력
                </div>
                <p className="relative w-[520px] [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[16px] text-center tracking-[0] leading-[24px]">
                    아래 필드에 아이디, 비밀번호 및 비밀번호 확인을 입력해주세요.
                </p>
                <div className="flex flex-col w-3/4 items-start justify-center gap-[4px] relative flex-[0_0_auto]">
                    <div className="self-stretch mt-[-1.00px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[14px] leading-[20px] relative tracking-[0]">
                        아이디
                    </div>
                    <input
                        type="text"
                        placeholder="아이디를 입력해주세요."
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        onBlur={checkUserId}
                        className="px-[12px] py-[8px] w-full bg-white rounded-[6px] border border-solid border-[#0000001a] text-[14px] leading-[20px]"
                    />
                    {isUserIdDuplicate && <p>이미 사용 중인 아이디입니다.</p>}
                </div>
                <div className="flex flex-col w-3/4 items-start justify-center gap-[4px] relative flex-[0_0_auto]">
                    <div className="self-stretch mt-[-1.00px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[14px] leading-[20px] relative tracking-[0]">
                        비밀번호
                    </div>
                    <input
                        type="password" // 타입을 password로 변경
                        placeholder="비밀번호를 입력해주세요."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="px-[12px] py-[8px] w-full bg-white rounded-[6px] border border-solid border-[#0000001a] text-[14px] leading-[20px]"
                    />
                </div>
                <div className="flex flex-col w-3/4 items-start justify-center gap-[4px] relative flex-[0_0_auto]">
                    <div className="self-stretch mt-[-1.00px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[14px] leading-[20px] relative tracking-[0]">
                        비밀번호 확인
                    </div>
                    <input
                        type="password" // 여기도 타입을 password로 변경
                        placeholder="비밀번호를 다시 입력해주세요."
                        value={confirmPassword} // value 속성 추가
                        onChange={(e) => setConfirmPassword(e.target.value)} // onChange 핸들러 추가
                        className="px-[12px] py-[8px] w-full bg-white rounded-[6px] border border-solid border-[#0000001a] text-[14px] leading-[20px]"
                    />
                </div>
                <button
                    className="inline-flex flex-col items-start gap-[12px] relative flex-[0_0_auto] all-[unset] box-border"
                    onClick={handleRegister} style={{ cursor: 'pointer' }}>
                    <div className="flex flex-col w-[160px] items-center justify-center p-[12px] relative flex-[0_0_auto] bg-stone-400 hover:bg-stone-600 rounded-[8px]">
                        <div className="w-fit mt-[-1.00px] [font-family:'Roboto-Medium',Helvetica] font-medium text-white text-[16px] leading-[24px] whitespace-nowrap relative tracking-[0]">
                            가입하기
                        </div>
                    </div>
                </button>
            </div>
            <img className="absolute w-[1440px] h-px top-[540px] left-0 object-cover" alt="Vector" src="vector-200.svg" />
        </div>

    );
};

export default RegistrationForm;
