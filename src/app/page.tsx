import { Button } from "@/components/ui/moving-border";
import { Button as ShadBtn } from "@/components/ui/button";
import Wrapper from "@/components/shared/Wrapper";
import React from "react";
import { ArrowRight, ChevronRight, Stars, Zap } from "lucide-react";
import Link from "next/link";
import Container from "@/components/shared/Container";
import TailwindConnect from "@/components/ui/TailwindConnect";
import { Brand, features, perks, pricingCards, reviews } from "@/lib/Constant";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { LampContainer } from "@/components/ui/lamp";

const page = () => {
  const firstItems = reviews.slice(0, reviews.length / 2);
  const secondItems = reviews.slice(reviews.length / 2);
  return (
    <div className="max-w-7xl flex flex-col  justify-center items-center px-4 md:px-0 py-8 mx-auto w-full">
      {/* hero */}
      <Wrapper className="flex justify-center flex-col items-center py-36 w-full">
        <Container>
          <div className="flex items-center justify-center">
            <Button
              borderRadius="1.75rem"
              className="bg-slate-900 drop-shadow-xl border-none text-slate-100 border-neutral-200 font-medium dark:border-slate-800 flex items-center gap-4 "
            >
              <Stars /> Introducing {Brand} AI <ChevronRight />
            </Button>
          </div>
          <div className="flex flex-col items-center mt-8 max-w-3xl mx-auto w-11/12 md:w-full">
            <h1 className="text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-t from-slate-50 to-gray-400 font-semibold text-center md:!leading-snug">
              Lets build your Next idea and your Dream site
            </h1>
            <p className="md:text-lg text-base text-foreground/80 mt-6 text-center">
              Zero code, maximum speed. Make professional sites easy,fast and
              fun while driving best in class SEO
            </p>
            <div className="hidden md:flex justify-center relative items-center mt-8 md:mt-12">
              <Link
                href={"/"}
                className="flex items-center justify-center w-max rounded-full border-t bg-white/5 backdrop-blur-lg px-2 py-1 md:py-1 md:gap-8 shadow-xl shadow-foreground/20  select-none cursor-pointer "
              >
                <p className="text-foreground text-sm text-center md:text-base font-medium px-4 lg:marker:p-0">
                  Start your dream site
                </p>
                <ShadBtn
                  size="sm"
                  className="hidden md:flex rounded-full lg:flex border border-foreground/20 bg-slate-900 "
                >
                  GET STARTED <ChevronRight className="w-4 h-4 ml-1" />
                </ShadBtn>
              </Link>
            </div>
          </div>
        </Container>
      </Wrapper>
      {/* step */}
      <Wrapper className="flex justify-center items-center py-10 relative">
        <Container>
          <div className="max-w-md mx-auto text-start md:text-center  ">
            <TailwindConnect>The Process</TailwindConnect>
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-3xl md:text-4xl font-semibold mt-6 bg-clip-text text-transparent bg-gradient-to-t from bg-slate-50 to-bg-slate-300">
                Three steps to Build your website
              </h2>
              <p className="text-muted-foreground mt-6">
                Turn your vision into reality in just 3 simple steps
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center  py-10 md:py-16  justify-center ">
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full divide-x-0 md:divide-y-0
             divide-gray-900 lg:border-none first:border-gray-100"
            >
              {perks.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col items-start px-4 py-4 md:px-6 lg:px-8 lg:py-6 border border-gray-900"
                  >
                    <div className="flex items-center justify center ">
                      <item.icon className="w-8 h-8 " />
                    </div>
                    <h3 className="text-lg font-medium mt-4 ">{item.title}</h3>
                    <p className="text-muted-foreground mt-2 text-start">
                      {item.info}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Wrapper>
      {/* features */}
      <Wrapper className="flex flex-col items-center py-10 relative">
        <Container>
          <div className="max-w-md mx-auto text-start md:text-center">
            <TailwindConnect>Features</TailwindConnect>
            <h2 className="text-3xl md:text-4xl font-semibold mt-6 bg-clip-text text-transparent bg-gradient-to-t from bg-slate-50 to-bg-slate-300">
              Discover your Powerfull features
            </h2>
            <p className="text-muted-foreground mt-6">
              {Brand} Offers a range of features to help you to build a stunning
              websites in no time.
            </p>
          </div>
        </Container>
        <Container>
          <div className="flex items-center justify-center mx-auto  md:py-16 py-8 w-full ">
            {/* <Image src={""} */}
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full divide-x-0 md:divide-y-0
             divide-gray-900 lg:border-none first:border-gray-100"
          >
            {features.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-start px-4 py-4 md:px-6 lg:px-8 lg:py-6 border border-gray-900"
                >
                  <div className="flex items-center justify center ">
                    <item.icon className="w-8 h-8 " />
                  </div>
                  <h3 className="text-lg font-medium mt-4 ">{item.title}</h3>
                  <p className="text-muted-foreground mt-2 text-start">
                    {item.info}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </Wrapper>
      {/* pricing */}
      <Wrapper className="flex flex-col items-center py-10 relative">
        <Container>
          <div className="max-w-md mx-auto text-start md:text-center">
            <TailwindConnect>Pricing</TailwindConnect>
            <h2 className="text-3xl md:text-4xl font-semibold mt-6 bg-clip-text text-transparent bg-gradient-to-t from bg-slate-50 to-bg-slate-300">
              Unlock the right plan for your business
            </h2>
            <p className="text-muted-foreground mt-6">
              Choose the best plan for your business and start building your
              dream website today with no time
            </p>
          </div>
        </Container>
        <Container>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full py-10 md:py-20
             gap-8 "
          >
            {pricingCards.map((item, index) => {
              {
                item.title === "Unlimited Saas" && console.log(item.title);
              }
              return (
                <Card
                  key={item.title}
                  className={cn(
                    "flex flex-col justify-center items-center w-full rounded-xl  p-4",
                    item.title === "Unlimited Saas" && "border-2 border-primary"
                  )}
                >
                  <CardHeader className="border-2 border-border rounded-xl w-full">
                    <span>{item.title}</span>
                    <CardTitle
                      className={cn(
                        item.title !== "Unlimited Saas" &&
                          "to-muted-foreground "
                      )}
                    >
                      {item.price}
                    </CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-3">
                    {item.features.map((feature) => {
                      return (
                        <div key={feature} className="flex items-center gap-2 ">
                          <Zap className="w-4 h-4 fill-primary text-primary" />
                          <p>{feature}</p>
                        </div>
                      );
                    })}
                  </CardContent>
                  <Link
                    href={""}
                    className={cn(
                      "w-full text-center text-primary-foreground bg-primary p-2 rounded-xl text-sm  font-medium",
                      item.title !== "Unlimited Saas" &&
                        "!bg-foreground !text-background"
                    )}
                  >
                    {item.buttonText}
                  </Link>
                </Card>
              );
            })}
          </div>
        </Container>
      </Wrapper>
      {/* testimonials */}
      <Wrapper className="flex flex-col items-center py-10 relative">
        <Container className="max-w-md mx-auto text-start md:text-center">
          <TailwindConnect>Our Customers</TailwindConnect>
          <h2 className="text-3xl md:text-4xl font-semibold mt-6 bg-clip-text text-transparent bg-gradient-to-t from bg-slate-50 to-bg-slate-300">
            What people are saying about {Brand}.
          </h2>
          <p className="text-muted-foreground mt-6">
            See how {Brand} empowers business of all sizes.Here & Posts what
            real people are Saying on twitter
          </p>
        </Container>
        <Container>
          <div className="rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden mt-6">
            <InfiniteMovingCards
              items={firstItems}
              direction="right"
              speed="slow"
            />
          </div>
          <div className="rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden mt-6">
            <InfiniteMovingCards
              items={secondItems}
              direction="left"
              speed="slow"
            />
          </div>
        </Container>
      </Wrapper>
      <Wrapper className="flex flex-col items-center py-10 relative">
        <Container className="max-w-md mx-auto text-start md:text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mt-6 bg-clip-text text-transparent bg-gradient-to-t from bg-slate-50 to-bg-slate-300 tracking-wide text-center">
            From Idea to launch
            <br />
            Faster than ever
          </h2>
          <p className="text-muted-foreground mt-6">
            See , {Brand} Ai is AI website builder .just drag and drop and thats
            it for more information just follow this link
          </p>
          <ShadBtn
            variant={"default"}
            className="bg-white rounded-xl mt-6 text-base text-slate-900 font-bold hover:bg-slate-200"
            color="white"
          >
            <Link href={"/sign-in"}></Link> Get started for free{" "}
            <ChevronRight className="w-4 h-4 ml-2" />
          </ShadBtn>
        </Container>
        {/* <Container></Container> */}
      </Wrapper>
    </div>
  );
};

export default page;
