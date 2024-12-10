"use client";
import Icons from "./Icons";
import Button from "./ui/Button";
import { toast } from "sonner";
import Link from "next/link";

interface IFormCard {
  formName: string;
  url: string;
}
const FormCard = ({ formName, url }: IFormCard) => {
  const handleCopyUrl = () => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        toast.info("Copied to Clipbaord");
      })
      .catch((err: any) => {
        console.log(err);
        toast.error("Failed to copy");
      });
  };

  return (
    <div className=" flex flex-row items-center justify-around w-full">
      <p className=" whitespace-nowrap text-sm w-1/2 overflow-hidden text-ellipsis">
        {formName || "Untitled Form"}
      </p>
      <div className=" flex flex-row gap-2 items-center">
        <Button variant="outline" onClick={handleCopyUrl}>
          Copy URL
        </Button>
        <Link href={url} target="_blank">
          <Button
            variant="outline"
            icon={<Icons name="previewIcon" />}
            iconDirection="right"
          >
            Preview
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FormCard;
