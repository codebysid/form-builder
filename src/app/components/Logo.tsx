import Image from "next/image";

const Logo = () => {
  return (
    <div className=" relative h-20 w-20">
      <Image
        src="/logo.webp"
        alt="Peerlist Logo"
        sizes="100vw"
        className="absolute rounded-full"
        fill
      />
    </div>
  );
};

export default Logo;
