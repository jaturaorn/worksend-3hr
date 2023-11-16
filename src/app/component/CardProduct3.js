import Image from "next/image";
import FasihonItem2 from "../../assets/img/sama-hosseini-z5UuOcQjXCY-unsplash.jpg";

const CardProduct3 = () => {
  return (
    <div className="container mx-auto ">
      <div className="grid grid-cols-2 gap-4 p-3 relative place-items-center bg-white">
        <div className="absolute inset-[30%] text-7xl text-slate-50">
          COLLECTION 01
        </div>
        <div className="col-span-2">
          <Image
            src={FasihonItem2}
            width={400}
            height={400}
            alt="Picture of the author"
            className="w-[1000px] h-[400px]"
          />
        </div>
        <div className="col-span-1 bg-rose-300">02</div>
        <div className="col-span-1 bg-rose-300">03</div>
      </div>
    </div>
  );
};

export default CardProduct3;
