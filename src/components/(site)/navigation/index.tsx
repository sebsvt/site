import ModeToggle from "@/components/mode-toggle";
import React from "react";
import MobileNavItem from "./mobile-nav-item";
import DesktopNavItem from "./desktop-nav-item";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-8 flex h-14 max-w-full items-center">
        <div className="mr-4">
          <div className="hidden md:block">
            <DesktopNavItem />
          </div>
          <div className="md:hidden">
            <MobileNavItem />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none"></div>
          <nav className="flex items-center gap-1">
            <ModeToggle />
            <Button variant={"ghost"} asChild>
              <Link
                href={"/sign-in"}
                className="text-sm transition-colors hover:text-foreground/80 text-foreground/60"
              >
                Sign in
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
