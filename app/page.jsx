import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import ImageUpload from "@/components/UploadImage";
import FetchImages from "@/components/FetchImages";
export default function Home() {
  return (
    <div className="min-h-screen w-full px-10 py-4 flex flex-col items-center">
      <div className="w-full h-20 flex justify-between bg-zinc-800 items-center p-2 mb-10 px-4">
        <h1 className="text-4xl text-white font-bold">Photu</h1>
        <UserButton afterSignOutUrl="/" />
      </div>
      <ImageUpload />
      <div>
        <FetchImages />
      </div>
    </div>
  );
}
