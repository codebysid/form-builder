import Image from "next/image";

interface ICustomImage {
  src: string;
  className?: string;
  alt: string;
}

const CustomImage = ({ src, className, alt }: ICustomImage) => {
  return (
    <div className={`relative h-[50px] w-20 ${className}`}>
      <Image
        src={src}
        className={`absolute object-cover top-0`}
        alt={alt}
        sizes="100vw"
        fill
      />
    </div>
  );
};

export default CustomImage;
