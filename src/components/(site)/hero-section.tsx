import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function HeroSection() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 ">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="scroll-m-20  text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none py-2 md:py-4 text-neutral-800 dark:text-neutral-200 ">
                  Software infrastructure for your fucking business
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 leading-7 [&:not(:first-child)]:mt-6">
                  Empower your business with scalable, secure, and customizable
                  software solutions. Whether yo{"'"}re a startup or an
                  enterprise, our infrastructure adapts to you—seamlessly.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row py-4">
                <Button
                  className="bg-blue-500 text-white hover:bg-blue-600"
                  variant={"default"}
                  asChild
                >
                  <Link href="/sign-up">Get Started</Link>
                </Button>
                <Button variant={"ghost"} asChild>
                  <Link href="#" className="bg-muted">
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>
            <img
              alt="Hero"
              className="hidden md:block mx-auto aspect-video overflow-hidden object-contain object-center sm:w-full lg:order-last"
              height="550"
              src="https://www.rossul.com/wp-content/uploads/2016/12/POS-Dashboard.png"
              width="550"
            />
          </div>
        </div>
      </section>
    </>
  );
}
