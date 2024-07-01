import Link from "next/link";
import React from "react";

const RootPage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen p-6">
      <div className="flex flex-col gap-2 items-center my-auto *:font-medium">
        <span className="text-9xl">🥕</span>
        <h1 className="text-4xl">당근</h1>
        <h2 className="text-2xl">당근 마켓에 어서오세요!</h2>
      </div>
      <div className="flex flex-col gap-3 w-full items-center">
        <Link className="primary-btn text-lg py-2.5" href={"/create-account"}>
          시작하기
        </Link>
        <div>
          <span>이미 계정이 있나요?</span>
          <Link
            href={"/login"}
            className="pl-2 hover:underline underline-offset-2"
          >
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RootPage;
