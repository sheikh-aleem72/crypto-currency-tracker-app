import banner from "../../assets/banner1.jpeg";

function Banner() {
  return (
    <div className="h-[25vw] w-full relative">
      <img className="h-full w-full" src={banner} />

      <div className="absolute right-0 left-0 top-10 mx-auto w-full">
        <div className="flex flex-col gap-2">
          <div className="text-[5vw] font-semibold text-center">
            Crypto Tracker
          </div>
          <div className="text-[1.5vw] font-semibold text-center">
            Get all info regarding cryptocurrencies
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
