import { ReactNode } from "react";
import { Header } from "../Header";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const MenuItems = [
    { name: "Home", href: "/" },
    { name: "Sobre", href: "/about" },
  ];
  return (
    <div>
      <Header navItems={MenuItems} />
      {children}
    </div>
  );
}
