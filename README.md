# Next 15 - App Router

- til-next-14에서 확인
  - Client-side Rendering (CSR)
    - 장점: 초기 로딩 후 빠른 페이지 전환, 서버 부하 감소
    - 단점: 초기 로딩 속도 느림, SEO에 불리
  - Server-side Rendering (SSR)
    - 장점: SEO에 유리, 초기 로딩 시 완성된 HTML 제공
    - 단점: 서버 부하 증가, 페이지 전환 속도 느림
  - Static Site Generation (SSG)
    - 장점: 매우 빠른 로딩 속도, SEO에 유리, 서버 부하 최소화
    - 단점: 빌드 시 모든 페이지 생성 필요, 실시간 데이터 반영 어려움
  - Incremental Static Regeneration (ISR)
    - 장점: SSG의 장점 유지하면서 실시간 데이터 반영 가능
    - 단점: 최초 요청 시 캐시가 없는 경우 지연 발생 가능

## 프로젝트 생성

- 현제 폴더에 프로젝트 생성

```bash
npx create-next-app@latest .
```

- ![Image](https://github.com/user-attachments/assets/cb075cbd-769f-4066-9a98-af537ef843b4)

- 테스트 해보기
  - `npm run dev` : 개발모드
  - `npm run build` : 빌드
  - `npm run start` : 배포(production)

## App Router

### til-next-14 에서 **Pages Router** 를 리뷰 확인

- /src/pages/라우터명.tsx
- /src/pages/board/[id].tsx 등등
- /src/pages/board/[id]/index.tsx 등등

### App Router 살펴보기

- /src/`app` 폴더 기준

#### 1. 일반 URI 경로 처리

- http://localhost:3000/
  - /src/`app`/page.tsx

```tsx
export default function Home() {
  return <div>안녕하세요</div>;
}
```

#### 2. URI 쿼리 처리

- http://localhost:3000/search
- /src/app/`search/page.tsx`

```tsx
export default function Page() {
  return <div>검색페이지</div>;
}
```

- http://localhost:3000/search?keyword=test
- 쿼리 사용

```tsx
// 쿼리 처리하기
// 아래 페이지는 쿼리를 서버에서 읽어 처리
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ keyword: string }>;
}) {
  const { keyword } = await searchParams;
  console.log(keyword);
  return <div>{keyword} : 검색페이지</div>;
}
```

- 기본적으로 Next 에서는 `서버컴포넌트`가 됨
- console.log 실행시 터미널(서버)에서 출력됨
- ![Image](https://github.com/user-attachments/assets/b4e649f1-6e3c-47c5-9843-72440937e93e)
- 개발 중일 때만 F12 콘솔에 출력됨. (Server 키워드 출력)
- ![Image](https://github.com/user-attachments/assets/3b020369-edce-405a-9ab5-1ebbdb74120d)

- http://localhost:3000/good
  - /src/`app/good/page.tsx`

```tsx
export default function Page() {
  return <div>제품페이지</div>;
}
```

#### 3. URI Params 처리

- http://localhost:3000/good/1
  - /src/`app/good/1/page.tsx`
- http://localhost:3000/good/2
  - /src/`app/good/2/page.tsx`
- 위의 경우는 라우터가 동적으로 변경됨
  - /src/`app/good/[id]/page.tsx`
    ![Image](https://github.com/user-attachments/assets/0e92eb11-8efe-4c81-b1c6-8e920f192380)
    ![Image](https://github.com/user-attachments/assets/2b1ea0db-6c3b-47ed-a13f-fc747df5b8b3)
- http://localhost:3000/good/2/5/800 (중첩된 경우)
  - /src/`app/good/[...id]/page.tsx`
    ![Image](https://github.com/user-attachments/assets/cc1788c0-c940-4c47-be1f-ced5938fb228)
    ![Image](https://github.com/user-attachments/assets/3d7243b0-d87f-4798-b6cb-f76dc84d37ce)

#### 4. 404 처리

- http://localhost:3000/gogo (없는 경로일 때)
  - /src/`app/404.tsx`

```tsx
export default function NotFound() {
  return <div>페이지를 찾을 수 없습니다.</div>;
}
```

- 추후에 테스트 해보자.
- http://localhost:3000/search/gogo (없는 경로일 때)
  - /src/`app/search/not-found.tsx`
