import BorderBox from '@/components/common/border-box';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="mx-auto flex w-full max-w-[800px] select-none flex-col gap-7 bg-gray-50 px-8 py-7">
      <div className="flex flex-col gap-1">
        <p className="text-[28px] font-bold">김유나</p>
        <p className="">프론트엔드 개발자</p>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-xl font-semibold">Introduce</p>
        <BorderBox>
          <div className="flex flex-col gap-[2px] text-sm">
            <p>
              작은 불편도 놓치지 않고 개선하며,{' '}
              <span className="font-medium text-highlight-blue">
                더 나은 사용자 경험을 제공하기 위해 끊임없이 고민하는 개발자
              </span>
              입니다.
            </p>
            <p>동료 개발자들이 쉽게 이해하고 유지보수할 수 있는 코드가 좋은 코드라고 생각하며,</p>
            <p>
              컴포넌트 설계와 주석 작성, 리팩토링에 신경 쓰며 사용자와 개발자 모두가 만족할 결과물을 만들어가고자
              노력하고 있습니다.
            </p>
          </div>
        </BorderBox>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-xl font-semibold">Education</p>
        <BorderBox className="gap-2">
          <div className="flex w-full items-center justify-between">
            <p className="text-[17px] font-medium">서울과학기술대학교 </p>
            <p className="text-sm text-gray-500">
              <span className="text-highlight-blue">졸업</span> | 2019.03 - 2024.02
            </p>
          </div>
          <p className="text-sm text-gray-500">
            <span className="text-black">컴퓨터공학과</span> | 평점 평균 : 4.14, 전공 평점 평균 : 4.17{' '}
          </p>
        </BorderBox>
        <BorderBox className="gap-2">
          <div className="flex w-full items-center justify-between">
            <p className="text-[17px] font-medium">독일 콘스탄츠공과대학교(HTWG) 교환학생</p>
            <p className="text-sm text-gray-500">2022.09 ~ 2023.02</p>
          </div>
          <ul className="list-disc">
            <li className="ml-5 text-sm text-gray-500">제 27기 미래에셋 해외교환 장학생</li>
          </ul>
        </BorderBox>
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-xl font-semibold">Experiences</p>
        <BorderBox className="gap-2">
          <div className="flex w-full items-center justify-between">
            <p className="text-[17px] font-medium">소프트웨어 마에스트로</p>
            <p className="text-sm text-gray-500">
              <span className="text-highlight-blue">과학기술정보통신부</span> | 2024
            </p>
          </div>
          <ul className="list-disc space-y-1 text-sm font-light text-gray-600">
            <li className="ml-5">
              아이디어 선정, 세부 기획, 개발, 사업자 등록, 광고 등 창업의 전 과정을 주도적으로 수행
            </li>
            <li className="ml-5">기술적 구현을 넘어 사용자 경험(UX) 중심 기획으로 서비스 개발 역량 확장</li>
          </ul>
        </BorderBox>
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-xl font-semibold">Projects</p>
        <Link href="/about/project/card-capture">
          <BorderBox className="hover:drop-shadow-md">
            <div className="flex w-full items-center justify-between">
              <p className="text-[20px] font-medium">Card Capture</p>
              <p className="text-sm text-gray-500">
                <span className="text-highlight-blue">소프트웨어 마에스트로</span> | 2024.05 - 2024.11
              </p>
            </div>
            <p className="mt-1 text-sm font-light text-gray-600">LLM AI를 이용한 카드뉴스 제작 서비스</p>
            <p className="mt-3 text-[15px] text-gray-700">
              프론트엔드 1인 개발, 기획, 운영, 홍보 | 총 방문자 3K 달성 / 카드뉴스 제작시간 5분 이내로 단축
            </p>
            <div className="mt-3 flex flex-row items-center gap-2">
              <p className="bg-light-bg rounded-sm px-1.5 py-0.5 text-[14px]">Next.js 14</p>
              <p className="bg-light-bg rounded-sm px-1.5 py-0.5 text-[14px]">TypeScript</p>
              <p className="bg-light-bg rounded-sm px-1.5 py-0.5 text-[14px]">Zustand</p>
              <p className="bg-light-bg rounded-sm px-1.5 py-0.5 text-[14px]">Tailwind CSS</p>
            </div>
          </BorderBox>
        </Link>
        <Link href="/about/project/with-too-with-two">
          <BorderBox className="cursor-pointer hover:drop-shadow-md">
            <div className="flex w-full items-center justify-between">
              <p className="text-[20px] font-medium">With too With two</p>
              <p className="text-sm text-gray-500">
                <span className="text-highlight-blue">캡스톤 디자인</span> | 2023.05 - 2023.10
              </p>
            </div>
            <p className="mt-1 text-sm font-light text-gray-600">신뢰성 있는 해외여행 동행 구인 서비스</p>
            <p className="mt-3 text-[15px] text-gray-700">
              프론트엔드 1인 개발, 기획 | 2023 캡스톤디자인 졸업작품 전시회 우수작품
            </p>
            <div className="mt-3 flex flex-row items-center gap-2">
              <p className="bg-light-bg rounded-sm px-1.5 py-0.5 text-[14px]">React Native</p>
              <p className="bg-light-bg rounded-sm px-1.5 py-0.5 text-[14px]">TypeScript</p>
              <p className="bg-light-bg rounded-sm px-1.5 py-0.5 text-[14px]">Redux</p>
            </div>
          </BorderBox>
        </Link>
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-xl font-semibold">Qualifications</p>
        <BorderBox className="gap-2">
          <div className="flex w-full items-center justify-between">
            <p className="text-[15px] font-medium">정보처리기사</p>
            <p className="text-sm text-gray-500">2022</p>
          </div>
          <div className="flex w-full items-center justify-between">
            <p className="text-[15px] font-medium">TOEIC Speaking </p>
            <p className="text-sm text-gray-500">
              <span className="text-highlight-blue">IH(150)</span> | 2024.10.20
            </p>
          </div>
        </BorderBox>
      </div>
    </div>
  );
};

export default AboutPage;
