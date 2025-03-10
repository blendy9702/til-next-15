"use client";
import { useEffect } from "react";

// Next App router 에서는 서버 컴포넌트가 기본
export default function Home() {
  console.log("시작페이지");
  useEffect(() => {
    console.log("컴포넌트 웹브라우저에 보이면 실행"); // 마운트
  }, []);
  return <div className="font-bold">Home!!</div>;
}
