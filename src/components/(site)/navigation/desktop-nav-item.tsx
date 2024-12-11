import Link from "next/link";
import React from "react";

const DesktopNavItem = () => {
  return (
    <div className="flex items-center">
      <a href="/" className="mr-4 flex items-center space-x-2 lg:mr-6">
        <span className="hidden font-bold md:inline-block">Aiselena</span>
      </a>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        <Link
          href={"/#products"}
          className="transition-colors hover:text-foreground/80 text-foreground/60"
        >
          Products
        </Link>
        <Link
          href={"/#pricing"}
          className="transition-colors hover:text-foreground/80 text-foreground/60"
        >
          Pricing
        </Link>
        <Link
          href={"/contact"}
          className="transition-colors hover:text-foreground/80 text-foreground/60"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default DesktopNavItem;
