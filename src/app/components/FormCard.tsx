"use client";
import { useRouter } from "next/navigation";
import Icons from "./Icons";
import Button from "./ui/Button";
import { toast } from "react-toastify";

interface IFormCard {
  formName: string;
  url: string;
}
const FormCard = ({ formName, url }: IFormCard) => {
  const router = useRouter();

  const handlePreview = () => router.push(url);

  const handleCopyUrl = () => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        toast.success("Copied to Clipbaord", { position: "top-right" });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to copy", { position: "top-right" });
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
        <Button
          variant="outline"
          icon={<Icons name="previewIcon" />}
          iconDirection="right"
          onClick={handlePreview}
        >
          Preview
        </Button>
      </div>
    </div>
  );
};

export default FormCard;
