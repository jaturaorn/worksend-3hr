import Image from "next/image";
import FasihonItem2 from "../../assets/img/sama-hosseini-z5UuOcQjXCY-unsplash.jpg";
import FasihonItem3 from "../../assets/img/sama-hosseini-L4rQueW3oEQ-unsplash.jpg";
import FasihonItem4 from "../../assets/img/krzysztof-hepner-jjCrsSXlSIs-unsplash.jpg";

const CardProduct3 = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4 gap-4 p-2 relative place-items-center bg-white">
        <div className="absolute inset-[30.5%] text-7xl text-slate-50 w-full">
          COLLECTION 01
        </div>
        <div className="col-span-4">
          <Image
            src={FasihonItem2}
            width={400}
            height={400}
            alt="Picture of the author"
            className="w-[750px] h-[400px]"
          />
        </div>
        <div className="relative col-start-2">
          <div className="absolute inset-14 text-4xl text-slate-50 w-full">
            COLLECTION 02
          </div>
          <Image
            src={FasihonItem3}
            width={300}
            height={300}
            alt="FasihonItem3"
            className="w-[500px] h-[350px]"
          />
        </div>
        <div className="relative col-start-3">
          <div className="absolute inset-14 text-4xl text-slate-50 w-full">
            COLLECTION 03
          </div>
          <Image
            src={FasihonItem4}
            width={200}
            height={200}
            alt="FasihonItem3"
            className="w-[450px] h-[350px]"
          />
        </div>
      </div>
    </div>
  );
};

export default CardProduct3;
