import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="border-2 border-green-500">
      검색 레이아웃
      <div>{children}</div>
    </div>
  );
}
