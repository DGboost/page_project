import React from 'react';

const PopularPosts = () => {
    return (
        // 인기 게시글 관련 마크업 및 로직
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
    );
};

export default PopularPosts;
