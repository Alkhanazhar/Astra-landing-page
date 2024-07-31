import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="lg:py-32 md:py-20 py-10 flex items-center justify-center ">
      <SignUp />
    </div>
  );
}
