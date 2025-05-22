import dinukaImage from "@/images/dinuka.jpg";
import Image from "next/image";

const DinukaImage = () => {
  return (
    <div className="!relative bg-purple-300 h-[120] w-[120] p-0.5 flex justify-center items-center rounded-full">
      <Image
        src={dinukaImage}
        alt="Dinuka Dilshan"
        width={115}
        className="rounded-full aspect-square object-cover !absolute p-0.5 bg-white "
      />
    </div>
  );
};

export default DinukaImage;
