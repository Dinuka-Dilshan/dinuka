import dinukaImage from "@/images/dinuka.jpg";
import ExportedImage from "next-image-export-optimizer";

const DinukaImage = () => {
  return (
    <div className="relative shrink-0 w-fit">
      <div className="absolute inset-0 translate-x-2.5 translate-y-2.5 bg-sage-light rounded-2xl" />
      <div className="relative h-52 w-44 rounded-2xl overflow-hidden bg-sage-mid z-10">
        <ExportedImage
          src={dinukaImage}
          alt="Dinuka Dilshan"
          width={176}
          height={208}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default DinukaImage;
