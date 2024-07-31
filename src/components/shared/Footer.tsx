import { Brand } from "@/lib/Constant";
import { Heart } from "lucide-react";
import Link from "next/link";
import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <div className="border-t border-border ">
      <footer className="flex flex-col items-center justify-center p-12 pb-8 px-6 lg:px-6 w-full max-w-6xl mx-auto lg:pt-16 ">
        <Container>
          <div className="grid grid-cols-1 xl:grid-cols-3 xl:gap-8 w-full">
            <div className="flex flex-col items-start justify-start md:max-w-[200px]">
              <div className="flex items-start w-7 h-7">{Brand}</div>
              <p className="text-muted-foreground mt-4 text-sm text-start ">
                Build Beautiful ,Functionality Websites ,without writing code
              </p>
              <span className="mt-4 text-neutral-200 text-sm flex items-start">
                Made in india with
                <Heart className="w-4 h-4 fill-primary text-primary" />
              </span>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2  xl:gap-8 w-full">
              <div className="md:grid md:grid-cols-2 md:gap-8 ">
                <div>
                  <h3 className="text-base font-medium text-white">Product</h3>
                  <ul className="text-muted-foreground mt-4">
                    <li className="mt-2">
                      <Link
                        href={"#"}
                        className="hover:text-foreground duration-300"
                      >
                        Testimonials
                      </Link>
                    </li>{" "}
                    <li className="mt-2">
                      <Link
                        href={"#"}
                        className="hover:text-foreground duration-300"
                      >
                        Integration
                      </Link>
                    </li>{" "}
                    <li className="mt-2">
                      <Link
                        href={"#"}
                        className="hover:text-foreground duration-300"
                      >
                        Pricing
                      </Link>
                    </li>{" "}
                  </ul>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2  xl:gap-8 w-full">
              <div className="md:grid md:grid-cols-2 md:gap-8 ">
                <div>
                  <h3 className="text-base font-medium text-white whitespace-nowrap">
                    Connect to
                  </h3>
                  <ul className="text-muted-foreground mt-4">
                    <li className="mt-2">
                      <Link
                        href={"#"}
                        className="hover:text-foreground duration-300"
                      >
                        Facebook
                      </Link>
                    </li>{" "}
                    <li className="mt-2">
                      <Link
                        href={"#"}
                        className="hover:text-foreground duration-300"
                      >
                        Twitter
                      </Link>
                    </li>{" "}
                    <li className="mt-2">
                      <Link
                        href={"#"}
                        className="hover:text-foreground duration-300 whitespace-nowrap"
                      >
                        Term and conditions
                      </Link>
                    </li>{" "}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-6xl hover:text-foreground text-slate-600 duration-150 my-6 text-center">
            {new Date().getUTCFullYear() + " " + Brand + " INC"}
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
