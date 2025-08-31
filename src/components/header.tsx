import { Logo } from "./logo";
import { Siderbar } from "./sidebar";

export function Header() {
  return (
    <header className="h-16 bg-white flex items-center justify-center border-b">
      <div className="flex flex-row items-center justify-between container px-4 ">
        <Logo />
        <Siderbar />
      </div>
    </header>
  );
}
