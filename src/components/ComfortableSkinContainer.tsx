import { FunctionComponent } from "react";
import Component4 from "./Component4";

const ComfortableSkinContainer: FunctionComponent = () => {
  return (
    <div className="absolute w-[99.79%] top-[1889.9px] right-[0.21%] left-[0%] bg-aliceblue-200 shadow-[0px_37px_60px_rgba(0,_0,_0,_0.02)] flex flex-row flex-wrap items-center justify-center py-0 px-[100px] box-border gap-[100px] text-left text-mini text-slategray font-manrope">
      <div className="flex-1 h-[559px] flex flex-col items-start justify-start gap-[37px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[9px]">
            <div className="relative tracking-[0.1em] leading-[154.5%] uppercase font-semibold">
              About Us
            </div>
            <b className="self-stretch relative text-26xl tracking-[-0.01em] leading-[130%] font-playfair-display text-gray-200">
              <p className="m-0">{`The Beauty is about `}</p>
              <p className="m-0">being Comfortable</p>
              <p className="m-0">in your own skin!</p>
            </b>
          </div>
          <div className="self-stretch relative text-lg leading-[165%] text-dimgray">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, buying to
            injected humour, or randomised words which don't look even many
            desktop publishing packages.
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[10px] text-center text-3xl text-gray-200 font-playfair-display">
          <div className="flex-1 bg-white flex flex-col items-center justify-start py-[21px] px-[11px] border-[1px] border-solid border-darkslategray-200">
            <div className="w-[143px] flex flex-col items-center justify-start gap-[14px]">
              <img
                className="relative w-[48.5px] h-[72px]"
                alt=""
                src="/icon1.svg"
              />
              <b className="relative leading-[120%] inline-block w-[143px]">
                Beauty Experts
              </b>
            </div>
          </div>
          <Component4 icon="/icon2.svg" />
          <Component4
            icon="/vector2.svg"
            propPadding="17px 33px 19px"
            propHeight="unset"
            propWidth="65.3px"
            propHeight1="78px"
          />
        </div>
      </div>
      <img
        className="flex-1 relative max-w-full overflow-hidden h-[794.2px] object-cover"
        alt=""
        src="/image1@2x.png"
      />
    </div>
  );
};

export default ComfortableSkinContainer;
