import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 한 번만 import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './home.css';


const Home = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        // 로그아웃 처리 로직
        // 예를 들어, 로컬 스토리지에서 사용자 정보 제거, 상태 업데이트 등

        // 로그인 페이지로 리디렉션
        navigate('/login');

     // 프로필 수정 페이지로 이동 처리
    // const handleProfileEdit = () => {
    //     navigate('/profile-edit'); // 프로필 수정 페이지 경로로 변경해야 함
    // };    

    };
    return (
        <div className="flex flex-col items-center pt-[80px] pb-0 px-0 relative bg-white">
            <div className="flex w-full h-[80px] items-center justify-center gap-[20px] p-[20px] absolute top-0 left-0 bg-white shadow-[0px_0px_6px_#0000001f]">
                <div className="relative min-w-[40px] ml-[20px] h-[40px] bg-[#0000001a] rounded-[100px]" />
                <div className="flex-1 min-w-[200px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[28px] leading-[36px] relative tracking-[0]">
                    게시판
                </div>
                <div className="inline-flex items-center justify-center gap-[40px] relative flex-[0_0_auto] bg-white">
                    <div className="relative w-fit [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
                        홈
                    </div>
                    <div className="relative w-fit [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
                        내 게시글
                    </div>
                    <input
                        type="text"
                        placeholder="Search in site"
                        className="relative flex-1 mt-[-1.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-[#00000080] text-[14px] tracking-[0] leading-[20px] border border-gray-300 rounded-md p-2 hidden md:flex"
                    />
                    <FontAwesomeIcon icon={faSearch} className="text-3xl" style={{ cursor: 'pointer' }} />
                </div>
            </div>
            <div className="gap-[60px] px-[170px] py-[60px] overflow-hidden flex items-center justify-center relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col gap-[24px] flex-1 grow items-center relative">
                    <div className="relative w-[520px] mt-[-1.00px] [font-family:'Roboto-Bold',Helvetica] font-bold text-black text-[40px] text-center tracking-[0] leading-[48px]">
                        게시판
                    </div>
                    <div className="inline-flex items-start gap-[12px] relative flex-[0_0_auto]">
                        <button className="flex flex-col w-[160px] items-center justify-center p-[12px] relative rounded-[8px] border border-solid border-black">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
                                임시 저장
                            </div>
                        </button>
                        <button className="flex flex-col w-[160px] items-center justify-center p-[12px] relative bg-black rounded-[8px]">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto-Medium',Helvetica] font-medium text-white text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
                                게시
                            </div>
                        </button>
                    </div>

                </div>
                <img className="absolute w-[1419px] h-px top-[348px] left-0 object-cover" alt="Vector" src="image.svg" />
            </div>
            <div className="gap-[60px] px-[170px] py-[60px] overflow-hidden flex items-center justify-center relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col gap-[24px] flex-1 grow items-center relative">
                    <div className="relative w-[520px] mt-[-1.00px] [font-family:'Roboto-Bold',Helvetica] font-bold text-black text-[40px] text-center tracking-[0] leading-[48px]">
                        게시글 목록
                    </div>
                    <div className="items-start px-0 py-[20px] flex justify-center gap-[40px] relative self-stretch w-full flex-[0_0_auto]">
                        <div className="flex flex-col items-center justify-center gap-[20px] px-0 py-[12px] relative flex-1 grow">
                            <div className="relative w-[100px] h-[100px] bg-[#0000000d] rounded-[50px]">
                                <div className="absolute w-[100px] h-[100px] -top-px left-0 [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[62.5px] text-center tracking-[0] leading-[100px] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical]">
                                    📄
                                </div>
                            </div>
                            <div className="flex flex-col items-start gap-[8px] relative self-stretch w-full flex-[0_0_auto]">
                                <div className="relative self-stretch mt-[-1.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[20px] text-center tracking-[0] leading-[28px]">
                                    게시글 제목1
                                </div>
                                <div className="[font-family:'Roboto-Regular',Helvetica] font-normal text-[#00000080] text-[16px] text-center leading-[24px] relative self-stretch tracking-[0]">
                                    작성자1
                                </div>
                            </div>
                            <div className="[font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[28px] text-center leading-[36px] relative self-stretch tracking-[0]">
                                2022-01-01
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-[20px] px-0 py-[12px] relative flex-1 grow">
                            <div className="relative w-[100px] h-[100px] bg-[#0000000d] rounded-[50px]">
                                <div className="absolute w-[100px] h-[100px] -top-px left-0 [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[62.5px] text-center tracking-[0] leading-[100px] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical]">
                                    📄
                                </div>
                            </div>
                            <div className="flex flex-col items-start gap-[8px] relative self-stretch w-full flex-[0_0_auto]">
                                <div className="relative self-stretch mt-[-1.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[20px] text-center tracking-[0] leading-[28px]">
                                    게시글 제목2
                                </div>
                                <div className="[font-family:'Roboto-Regular',Helvetica] font-normal text-[#00000080] text-[16px] text-center leading-[24px] relative self-stretch tracking-[0]">
                                    작성자2
                                </div>
                            </div>
                            <div className="[font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[28px] text-center leading-[36px] relative self-stretch tracking-[0]">
                                2022-01-02
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-[20px] px-0 py-[12px] relative flex-1 grow">
                            <div className="relative w-[100px] h-[100px] bg-[#0000000d] rounded-[50px]">
                                <div className="absolute w-[100px] h-[100px] -top-px left-0 [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[62.5px] text-center tracking-[0] leading-[100px] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical]">
                                    📄
                                </div>
                            </div>
                            <div className="flex flex-col items-start gap-[8px] relative self-stretch w-full flex-[0_0_auto]">
                                <div className="relative self-stretch mt-[-1.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[20px] text-center tracking-[0] leading-[28px]">
                                    게시글 제목3
                                </div>
                                <div className="[font-family:'Roboto-Regular',Helvetica] font-normal text-[#00000080] text-[16px] text-center leading-[24px] relative self-stretch tracking-[0]">
                                    작성자3
                                </div>
                            </div>
                            <div className="[font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[28px] text-center leading-[36px] relative self-stretch tracking-[0]">
                                2022-01-03
                            </div>
                        </div>
                    </div>
                </div>
                <img className="top-[492px] absolute w-[1419px] h-px left-0 object-cover" alt="Vector" src="vector-200-2.svg" />
            </div>
            <div className="gap-[40px] px-[170px] py-[60px] overflow-hidden flex items-center justify-center relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-[100px] h-[100px] bg-[#d8d8d880] rounded-[50px]" />
                <div className="flex flex-col gap-[12px] flex-1 grow items-center relative">
                    <div className="relative self-stretch mt-[-1.00px] [font-family:'Roboto-Bold',Helvetica] font-bold text-black text-[24px] tracking-[0] leading-[32px]">
                        사용자 이름
                    </div>
                    <div className="flex items-center gap-[6px] relative self-stretch w-full flex-[0_0_auto]">
                        <div className="inline-flex items-center justify-center gap-[2px] px-[4px] py-[2px] relative flex-[0_0_auto] bg-[#d8d8d880] rounded-[2px] overflow-hidden border-[0.5px] border-solid border-[#0000001a]">
                            <div className="relative w-fit mt-[-0.50px] [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[16px] whitespace-nowrap">
                                Gold Member
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch relative [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[24px]">
                        사용자 정보
                    </div>
                </div>
                <div className="flex-col inline-flex items-start gap-[12px] relative flex-[0_0_auto]">
                    <button
                        className="flex-[0_0_auto] flex flex-col w-[160px] items-center justify-center p-[12px] relative rounded-[8px] border border-solid border-black"
                        onClick={handleLogout} 
                        style={{ cursor: 'pointer' }}// 로그아웃 처리 함수
                    >
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
                            로그아웃
                        </div>
                    </button>
                    <button
                        className="flex-[0_0_auto] flex flex-col w-[160px] items-center justify-center p-[12px] relative bg-black rounded-[8px]"
                        // onClick={handleProfileEdit} // 프로필 수정
                        style={{ cursor: 'pointer' }}// 프로필 수정 처리 함수
                    >
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto-Medium',Helvetica] font-medium text-white text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
                            프로필 수정
                        </div>
                    </button>
                </div>

                <img className="top-[228px] absolute w-[1419px] h-px left-0 object-cover" alt="Vector" src="vector-200-3.svg" />
            </div>
            <div className="gap-[60px] px-[170px] py-[60px] overflow-hidden flex items-center justify-center relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col gap-[24px] flex-1 grow items-center relative">
                    <div className="relative w-[520px] mt-[-1.00px] [font-family:'Roboto-Bold',Helvetica] font-bold text-black text-[40px] text-center tracking-[0] leading-[48px]">
                        인기 게시글
                    </div>
                    <div className="w-[520px] text-center relative [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[24px]">
                        친구들의 게시글을 확인해보세요
                    </div>
                    <div className="flex-col items-center flex justify-center gap-[40px] relative self-stretch w-full flex-[0_0_auto]">
                        <div className="flex flex-col w-[600px] items-center relative flex-[0_0_auto] rounded-[6px] overflow-hidden border border-solid border-[#0000001a]">
                            <div className="flex items-center gap-[8px] p-[12px] relative self-stretch w-full flex-[0_0_auto]">
                                <div className="flex items-center gap-[8px] relative flex-1 grow">
                                    <div className="relative w-[32px] h-[32px] bg-[#0000001a] rounded-[32px]" />
                                    <div className="flex flex-col items-start relative flex-1 grow">
                                        <div className="relative self-stretch h-[20px] mt-[-1.00px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[14px] tracking-[0] leading-[20px] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical]">
                                            친구1
                                        </div>
                                        <div className="h-[16px] [font-family:'Roboto-Regular',Helvetica] font-normal text-[#00000080] text-[12px] leading-[16px] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] relative self-stretch tracking-[0]">
                                            2022-01-04, 위치1
                                        </div>
                                    </div>
                                </div>
                                <div className="inline-flex items-center gap-[8px] relative flex-[0_0_auto]">
                                    <div className="relative w-[24px] h-[24px] mt-[-1.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[16px] text-center tracking-[0] leading-[24px] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical]">
                                        •••
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-start gap-[8px] p-[12px] relative self-stretch w-full flex-[0_0_auto]">
                                <div className="relative self-stretch mt-[-1.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[24px]">
                                    게시글 내용1
                                </div>
                                <div className="flex items-center gap-[6px] relative self-stretch w-full flex-[0_0_auto]">
                                    <div className="flex w-[40px] h-[20px] items-center justify-center gap-[2px] px-[4px] py-[2px] relative bg-[#d8d8d880] rounded-[2px] overflow-hidden border-[0.5px] border-solid border-[#0000001a]">
                                        <div className="relative w-fit mt-[-0.50px] [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[16px] whitespace-nowrap">
                                            인기
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-[600px] items-center relative flex-[0_0_auto] rounded-[6px] overflow-hidden border border-solid border-[#0000001a]">
                            <div className="flex items-center gap-[8px] p-[12px] relative self-stretch w-full flex-[0_0_auto]">
                                <div className="flex items-center gap-[8px] relative flex-1 grow">
                                    <div className="relative w-[32px] h-[32px] bg-[#0000001a] rounded-[32px]" />
                                    <div className="flex flex-col items-start relative flex-1 grow">
                                        <div className="relative self-stretch h-[20px] mt-[-1.00px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[14px] tracking-[0] leading-[20px] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical]">
                                            친구2
                                        </div>
                                        <div className="h-[16px] [font-family:'Roboto-Regular',Helvetica] font-normal text-[#00000080] text-[12px] leading-[16px] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] relative self-stretch tracking-[0]">
                                            2022-01-05, 위치2
                                        </div>
                                    </div>
                                </div>
                                <div className="inline-flex items-center gap-[8px] relative flex-[0_0_auto]">
                                    <div className="relative w-[24px] h-[24px] mt-[-1.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[16px] text-center tracking-[0] leading-[24px] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical]">
                                        •••
                                    </div>
                                </div>
                            </div>
                            <div className="flex h-[300px] items-start w-full relative self-stretch">
                                <div className="flex-1 grow bg-[#d8d8d880] relative self-stretch">
                                    <div className="absolute w-[568px] h-[16px] top-[141px] left-[16px] [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[12px] text-center tracking-[0] leading-[16px] whitespace-nowrap">
                                        게시글 이미지2
                                    </div>
                                    <div className="top-[288px] inline-flex items-center justify-center gap-[4px] absolute left-[278px]">
                                        <div className="w-[20px] h-[4px] bg-white relative rounded-[100px]" />
                                        <div className="w-[4px] h-[4px] bg-[#0000004c] relative rounded-[100px]" />
                                        <div className="w-[4px] h-[4px] bg-[#0000004c] relative rounded-[100px]" />
                                        <div className="w-[4px] h-[4px] bg-[#0000004c] relative rounded-[100px]" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-start gap-[8px] p-[12px] relative self-stretch w-full flex-[0_0_auto]">
                                <div className="relative self-stretch mt-[-1.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[24px]">
                                    게시글 내용2
                                </div>
                                <div className="flex items-center gap-[6px] relative self-stretch w-full flex-[0_0_auto]">
                                    <div className="flex w-[40px] h-[20px] items-center justify-center gap-[2px] px-[4px] py-[2px] relative bg-[#d8d8d880] rounded-[2px] overflow-hidden border-[0.5px] border-solid border-[#0000001a]">
                                        <div className="relative w-fit mt-[-0.50px] [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[16px] whitespace-nowrap">
                                            추천
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-[600px] items-center relative flex-[0_0_auto] rounded-[6px] overflow-hidden border border-solid border-[#0000001a]">
                            <div className="flex items-center gap-[8px] p-[12px] relative self-stretch w-full flex-[0_0_auto]">
                                <div className="flex items-center gap-[8px] relative flex-1 grow">
                                    <div className="relative w-[32px] h-[32px] bg-[#0000001a] rounded-[32px]" />
                                    <div className="flex flex-col items-start relative flex-1 grow">
                                        <div className="relative self-stretch h-[20px] mt-[-1.00px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[14px] tracking-[0] leading-[20px] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical]">
                                            친구3
                                        </div>
                                        <div className="h-[16px] [font-family:'Roboto-Regular',Helvetica] font-normal text-[#00000080] text-[12px] leading-[16px] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] relative self-stretch tracking-[0]">
                                            2022-01-06, 위치3
                                        </div>
                                    </div>
                                </div>
                                <div className="inline-flex items-center gap-[8px] relative flex-[0_0_auto]">
                                    <div className="relative w-[24px] h-[24px] mt-[-1.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[16px] text-center tracking-[0] leading-[24px] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical]">
                                        •••
                                    </div>
                                </div>
                            </div>
                            <div className="flex h-[300px] items-start w-full relative self-stretch">
                                <div className="flex-1 grow bg-[#d8d8d880] relative self-stretch">
                                    <div className="absolute w-[568px] h-[16px] top-[141px] left-[16px] [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[12px] text-center tracking-[0] leading-[16px] whitespace-nowrap">
                                        게시글 이미지3
                                    </div>
                                    <div className="top-[288px] inline-flex items-center justify-center gap-[4px] absolute left-[278px]">
                                        <div className="w-[20px] h-[4px] bg-white relative rounded-[100px]" />
                                        <div className="w-[4px] h-[4px] bg-[#0000004c] relative rounded-[100px]" />
                                        <div className="w-[4px] h-[4px] bg-[#0000004c] relative rounded-[100px]" />
                                        <div className="w-[4px] h-[4px] bg-[#0000004c] relative rounded-[100px]" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-start gap-[8px] p-[12px] relative self-stretch w-full flex-[0_0_auto]">
                                <div className="relative self-stretch mt-[-1.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[24px]">
                                    게시글 내용3
                                </div>
                                <div className="flex items-center gap-[6px] relative self-stretch w-full flex-[0_0_auto]">
                                    <div className="flex w-[40px] h-[20px] items-center justify-center gap-[2px] px-[4px] py-[2px] relative bg-[#d8d8d880] rounded-[2px] overflow-hidden border-[0.5px] border-solid border-[#0000001a]">
                                        <div className="relative w-fit mt-[-0.50px] [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[16px] whitespace-nowrap">
                                            인기
                                        </div>
                                    </div>
                                    <div className="flex w-[40px] h-[20px] items-center justify-center gap-[2px] px-[4px] py-[2px] relative bg-[#d8d8d880] rounded-[2px] overflow-hidden border-[0.5px] border-solid border-[#0000001a]">
                                        <div className="relative w-fit mt-[-0.50px] [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[16px] whitespace-nowrap">
                                            추천
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="top-[1328px] absolute w-[1419px] h-px left-0 object-cover" alt="Vector" src="vector-200.svg" />
            </div>
            <div className="gap-[60px] p-[60px] flex items-center justify-center relative self-stretch w-full flex-[0_0_auto]">
                <div className="inline-flex h-[100px] justify-center gap-[60px] flex-[0_0_auto] items-center relative">
                    <p className="relative self-stretch w-[231px] mt-[-1.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[20px] text-center tracking-[0] leading-[28px]">
                        © 2022 All rights reserved
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
