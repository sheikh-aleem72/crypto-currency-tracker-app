import "./Banner.css";
function Banner() {
  return (
    <div className="h-[25vw] w-full relative bg-image flex justify-start items-center rounded-xl text-[#fff] mt-2 ">
      {/* <img className="h-full w-full" src={banner} /> */}

      <div className="w-full">
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
