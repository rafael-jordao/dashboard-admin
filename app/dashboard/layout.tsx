import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout ({ children }: LayoutProps) {
  return (
    <div>
      <Sidebar>
        <Header />
        { children }
      </Sidebar>
    </div>
  );
}