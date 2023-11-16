import Image from "next/image";
import Fasihon from "../../assets/img/morteza-solgi-Rgo9OlpqONo-unsplash.jpg";

const CardProduct = () => {
  return (
    <div className="flex justify-center items-center mt-5">
      <div className="card card-compact relative w-[400px] bg-base-100 shadow-xl">
        <div className="absolute inset-[30%] text-8xl text-slate-50">NEW</div>
        <figure>
          <Image
            src={Fasihon}
            width={200}
            height={200}
            alt="Picture of the author"
            className="w-full"
          />
        </figure>
        <div className="card-body items-center text-center">
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

export default CardProduct;
