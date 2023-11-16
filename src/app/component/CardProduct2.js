import Image from "next/image";
import FasihonItem from "../../assets/img/sama-hosseini-WUru1jV4ix8-unsplash.jpg";

const CardProduct2 = () => {
  return (
    <div className="flex justify-center items-center mt-5 shadow-lg">
      <div className="w-[1100px] relative">
        <div className="absolute inset-[31.5%] text-9xl text-slate-50">
          THING
        </div>
        <Image
          src={FasihonItem}
          width={400}
          height={400}
          alt="Picture of the author"
          className="w-full h-[400px]"
        />
        <div className="flex flex-col justify-center items-center p-2">
          <h2 className="card-title">Autumn!</h2>
          <p>
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit...?
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardProduct2;
