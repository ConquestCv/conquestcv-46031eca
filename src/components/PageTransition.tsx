import { ReactNode } from "react";
import { usePersona } from "@/hooks/use-persona";

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const { isTransitioning } = usePersona();

  return (
    <div
      className={`transition-all duration-500 ease-out ${
        isTransitioning
          ? "opacity-0 scale-[0.98] blur-sm translate-y-2"
          : "opacity-100 scale-100 blur-0 translate-y-0"
      }`}
    >
      {children}
    </div>
  );
};

export default PageTransition;
