// 쿼리 처리하기
// 아래 페이지는 쿼리를 서버에서 읽어 처리
// http://localhost:3000/search?keyword=%ED%9E%A3
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ keyword: string }>;
}) {
  const { keyword } = await searchParams;
  console.log(keyword);
  return <div>{keyword} : 검색페이지</div>;
}
