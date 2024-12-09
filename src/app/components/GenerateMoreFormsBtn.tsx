"use client";
import { useRouter } from "next/navigation";
import Button from "./ui/Button";

const GenerateMoreFormsBtn = () => {
  const router = useRouter();
  return (
    <Button variant="outline" onClick={() => router.push("/")}>
      Generate More Forms
    </Button>
  );
};

export default GenerateMoreFormsBtn;
