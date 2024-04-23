import Button from "@/app/components/Button";
import tryImage from "@/public/try.png";
import Image from "next/image";

const page = () => {
  return (
    <main className="mt-10">
      <div>mission page</div>

      <Image placeholder="blur" src={tryImage} alt="thumb image" />
      <Button />
    </main>
  );
};

export default page;
