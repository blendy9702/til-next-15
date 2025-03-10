import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <div className="border-2 border-pink-500">{children}</div>;
}
