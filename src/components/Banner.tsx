import { FunctionComponent } from "react";

const Banner: FunctionComponent = () => {
  return (
    <div className="absolute w-full top-[165px] right-[0%] left-[0%] h-[495px] text-center text-mini text-white font-manrope">
      <img
        className="absolute w-full top-[0px] right-[0%] left-[0%] max-w-full overflow-hidden h-[495px] object-cover"
        alt=""
        src="/background6@2x.png"
      />
      <div className="absolute w-[42.99%] top-[117px] right-[27.85%] left-[29.17%] flex flex-col items-center justify-start gap-[32px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
          <div className="self-stretch relative tracking-[0.1em] leading-[154.5%] uppercase font-semibold">
            The Perfect Service
          </div>
          <b className="self-stretch relative text-36xl tracking-[-0.01em] leading-[120%] font-playfair-display">
            <p className="m-0">Service to Elevate the</p>
            <p className="m-0">Better lifestyle</p>
          </b>
        </div>
        <div className="bg-slategray flex flex-row items-center justify-center pt-[23px] px-9 pb-6 text-sm">
          <div className="relative tracking-[0.12em] leading-[125%] uppercase font-extrabold">
            Make a reservation
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
