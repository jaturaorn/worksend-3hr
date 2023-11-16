import Image from "next/image";
import Logo from "../../assets/img/logo.png";

const Hero = () => {
  return (
    <div className="relative hero min-h-screen">
      <div className="absolute inset-x-5 top-5">
        <Image src={Logo} alt="Logo" />
      </div>
      {/* <CldVideoPlayer width="1920" height="1080" src="/public/video.mp4" /> */}
      <video
        autoPlay
        loop
        muted
        className="w-auto min-w-full min-h-full max-w-none"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
      {/* <div className="absolute top-5 text-8xl">TEST TITLE</div> */}
    </div>
  );
};

export default Hero;
