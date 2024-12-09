import Image from "next/image";
import Logo from "./Logo";
import Signin from "./Signin";
import CustomImage from "./ui/CustomImage";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 pt-14">
      <Logo />
      <div className=" flex flex-col gap-2 justify-center items-center">
        <h1 className=" text-4xl font-bold">Welcome to Peerlist Forms</h1>
        <p className=" text-lg font-medium">
          Create customizable forms with variety of question types easily
        </p>
      </div>
      <Signin />
      <div className="relative h-[80vh] w-[80vw]  rounded-xl">
        <Image
          src="/heroImage.png"
          alt="hero image"
          sizes="100vw"
          className="absolute object-cover"
          fill
        />
      </div>
    </div>
  );
};

export default Hero;
