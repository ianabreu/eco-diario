import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { Logo } from "./logo";

export function Header() {
  return (
    <header className="h-16 bg-white flex items-center justify-center border-b">
      <div className="flex flex-row items-center justify-between container px-4 ">
        <Logo />
        <Button variant={"ghost"} size={"icon"}>
          <MenuIcon />
        </Button>
      </div>
    </header>
  );
}
