import Image from "next/image";
import CreateForm from "./components/CreateForm";

export default function Home() {
  return (
    <div className="light flex justify-center items-start w-screen min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <CreateForm />
      </main>
    </div>
  );
}
