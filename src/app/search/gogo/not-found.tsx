import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <div className="text-center space-y-6">
        <h1 className="text-9xl font-bold text-[#FF0000]">404</h1>
        <p className="text-2xl">페이지를 찾을 수 없습니다</p>
        <p className="text-gray-400">
          요청하신 페이지가 존재하지 않거나 이동되었습니다.
        </p>
        <Link
          href="/"
          className="inline-block mt-8 px-6 py-3 bg-[#FF0000] text-white rounded-lg hover:bg-red-600 transition-colors"
        >
          홈으로 돌아가기
        </Link>
      </div>
      <div className="absolute bottom-8 text-gray-500">
        <p>© 2025 Lee. All rights reserved.</p>
      </div>
    </div>
  );
}
