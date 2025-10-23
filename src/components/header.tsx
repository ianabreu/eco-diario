import { Logo } from "./logo";
import { Siderbar } from "./sidebar";

export function Header() {
  return (
    <header className="h-16 bg-white flex items-center justify-center border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="flex flex-row items-center justify-between container max-w-5xl px-4 md:px-6">
        <Logo />
        <Siderbar />
      </div>
    </header>
  );
}
