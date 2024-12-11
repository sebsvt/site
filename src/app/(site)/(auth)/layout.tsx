import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="container mx-auto flex justify-center items-center min-h-screen">
      {children}
    </main>
  );
};

export default AuthLayout;
