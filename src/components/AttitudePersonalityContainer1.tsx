import { FunctionComponent } from "react";

const AttitudePersonalityContainer1: FunctionComponent = () => {
  return (
    <div className="absolute w-[99.6%] top-[1536px] right-[0.32%] left-[0.08%] bg-aliceblue-200 shadow-[0px_37px_60px_rgba(0,_0,_0,_0.02)] flex flex-col items-center justify-center text-left text-mini text-white font-manrope">
      <div className="self-stretch flex flex-row items-center justify-start py-0 px-[125px]">
        <img
          className="flex-1 relative max-w-full overflow-hidden h-[610px] object-cover"
          alt=""
          src="/image22@2x.png"
        />
        <div className="flex-1 bg-darkslategray-200 flex flex-col items-start justify-start py-[74px] px-[72px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[14px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[9px]">
              <div className="relative tracking-[0.1em] leading-[154.5%] uppercase font-semibold">
                About Us
              </div>
              <b className="self-stretch relative text-26xl tracking-[-0.01em] leading-[130%] font-playfair-display">{`Style is a Reflection of your Attitude & your Personality`}</b>
            </div>
            <div className="self-stretch relative text-lg leading-[175%] inline-block h-[131px] shrink-0">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, buying to
              injected humour, or randomised words which don't look even many
              desktop publishing packages.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttitudePersonalityContainer1;
