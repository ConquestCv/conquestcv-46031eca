import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import MobilePersonaFAB from "@/components/MobilePersonaFAB";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <MobilePersonaFAB />
    </div>
  );
};

export default Layout;
