import { ReactNode } from "react";
import SearchBar from "@/components/searchbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <h2>/src/app/(with-search)/layout.tsx</h2>
      <SearchBar />
      <div>{children}</div>
    </>
  );
}
