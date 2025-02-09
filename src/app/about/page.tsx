import BorderBox from '@/components/common/border-box';

const AboutPage = () => {
  return (
    <div className="mx-auto flex w-full max-w-[800px] flex-col gap-4 bg-gray-50 px-8 py-7">
      <div className="flex flex-col gap-1">
        <p className="text-[28px] font-bold">김유나</p>
        <p className="">프론트엔드 개발자</p>
      </div>
      <div className="flex flex-col">
        <p className="text-xl font-semibold">Introduce</p>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-xl font-semibold">Experiences</p>
        <BorderBox className="gap-2">
          <div className="flex w-full items-center justify-between">
            <p className="text-[17px] font-medium">소프트웨어 마에스트로</p>
            <p className="text-sm text-gray-500">
              <span className="text-highlight-blue">과학기술정보통신부</span> | 2024.04 - 2024.11
            </p>
          </div>
          <p className="text-sm"></p>
        </BorderBox>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-xl font-semibold">Education</p>
        <BorderBox className="gap-2">
          <div className="flex w-full items-center justify-between">
            <p className="text-[17px] font-medium">서울과학기술대학교</p>
            <p className="text-sm text-gray-500">
              <span className="text-highlight-blue">졸업</span> | 2019.03 - 2024.02
            </p>
          </div>
          <p className="text-sm text-gray-500">
            <span className="text-black">컴퓨터공학과</span> | 평점 평균 : 4.14, 전공 평점 평균 : 4.17{' '}
          </p>
        </BorderBox>
      </div>
      <div className="flex flex-col">
        <p className="text-xl font-semibold">Projects</p>
      </div>
    </div>
  );
};

export default AboutPage;
