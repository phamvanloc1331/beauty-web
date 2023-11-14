import { FunctionComponent } from "react";

const ServiceAboutContainer1: FunctionComponent = () => {
  return (
    <div className="absolute w-full top-[662px] right-[0.21%] left-[-0.21%] h-[861px] flex flex-row items-center justify-start text-left text-mini text-lightslategray font-manrope">
      <div className="flex-1 bg-aliceblue-200 flex flex-col items-start justify-start pt-[107px] px-[129px] pb-[109px]">
        <div className="self-stretch flex flex-col items-end justify-center">
          <div className="self-stretch flex flex-col items-start justify-start gap-[33px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                <div className="relative tracking-[0.1em] leading-[154.5%] uppercase font-semibold">
                  What Includes?
                </div>
                <b className="relative text-26xl tracking-[-0.01em] leading-[130%] inline-block font-playfair-display text-gray-200 w-[435px]">
                  About the service
                </b>
              </div>
              <div className="self-stretch relative text-lg leading-[175%] text-dimgray inline-block h-[123px] shrink-0">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal these content here', making it look like readable
                English.
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-3xl text-gray-200 font-playfair-display">
              <b className="relative tracking-[-0.01em] leading-[130%] inline-block w-[435px]">
                Our Methodology :
              </b>
              <div className="self-stretch flex flex-col items-start justify-start gap-[25px] text-lgi font-manrope">
                <div className="self-stretch flex flex-row items-start justify-start gap-[29px]">
                  <img
                    className="relative w-[35.3px] h-[35.3px]"
                    alt=""
                    src="/vector4.svg"
                  />
                  <div className="w-[448px] flex flex-col items-start justify-start gap-[1px]">
                    <b className="relative leading-[200%]">
                      The Assessment Stage
                    </b>
                    <div className="relative text-lg leading-[175%] text-dimgray inline-block w-[448px] h-[58px] shrink-0">
                      The point of using Lorem Ipsum is that it has a
                      more-or-less normal letters.
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[29px]">
                  <img
                    className="relative w-[35.3px] h-[35.3px]"
                    alt=""
                    src="/vector4.svg"
                  />
                  <div className="w-[448px] flex flex-col items-start justify-start gap-[1px]">
                    <b className="relative leading-[200%]">
                      The Initialisation Stage
                    </b>
                    <div className="relative text-lg leading-[175%] text-dimgray inline-block w-[448px] h-[58px] shrink-0">
                      The point of using Lorem Ipsum is that it has a
                      more-or-less normal letters.
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[29px]">
                  <img
                    className="relative w-[35.3px] h-[35.3px]"
                    alt=""
                    src="/vector4.svg"
                  />
                  <div className="w-[448px] flex flex-col items-start justify-start gap-[1px]">
                    <b className="relative leading-[200%]">
                      The Treatment Stage
                    </b>
                    <div className="relative text-lg leading-[175%] text-dimgray inline-block w-[448px] h-[58px] shrink-0">
                      The point of using Lorem Ipsum is that it has a
                      more-or-less normal letters.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="flex-1 relative max-w-full overflow-hidden h-[860px] object-cover"
        alt=""
        src="/image18@2x.png"
      />
    </div>
  );
};

export default ServiceAboutContainer1;
