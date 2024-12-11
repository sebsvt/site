import Navigation from "@/components/(site)/navigation";
import Footer from "@/components/footer";
import React from "react";

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navigation />
      <main className="container mx-auto p-4 min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default SiteLayout;
