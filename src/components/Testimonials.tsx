import { FunctionComponent, useMemo, type CSSProperties } from "react";

type TestimonialsType = {
  /** Style props */
  propTop?: CSSProperties["top"];
};

const Testimonials: FunctionComponent<TestimonialsType> = ({ propTop }) => {
  const testimonialsStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className="absolute w-[100.07%] top-[4523px] right-[-0.07%] left-[0%] bg-aliceblue-100 h-[776px] flex flex-row flex-wrap items-center justify-center text-center text-mini text-gray-200 font-manrope"
      style={testimonialsStyle}
    >
      <div className="flex-1 h-[695px] flex flex-col items-center justify-start gap-[9px]">
        <div className="relative tracking-[0.1em] leading-[154.5%] uppercase font-semibold text-slategray">
          Our Awesome Benefits
        </div>
        <b className="self-stretch relative text-26xl tracking-[-0.01em] leading-[130%] font-playfair-display">
          Actually what you’ll get from
        </b>
        <div className="self-stretch flex-1 flex flex-row items-start justify-start py-[75px] px-[150px] gap-[50px] text-left text-lgi">
          <div className="flex-1 flex flex-col items-start justify-start">
            <div className="self-stretch bg-white h-[234px] flex flex-col items-start justify-start py-11 pr-11 pl-[49px] box-border">
              <div className="self-stretch flex-1 flex flex-col items-center justify-start">
                <div className="self-stretch relative leading-[180%]">
                  “ It is a long established fact that a reader will be tracked
                  distracted by the readable content of a page is when looking
                  at its layout. The point of using Lorem of distribution it
                  look like readable English “
                </div>
              </div>
            </div>
            <div className="self-stretch bg-darkslategray-200 h-[125px] flex flex-col items-center justify-end py-[25px] px-0 box-border text-xl text-white font-playfair-display">
              <div className="self-stretch flex flex-row items-center justify-start py-0 px-[50px] gap-[178px]">
                <div className="w-[232px] flex flex-row items-center justify-start gap-[20px]">
                  <img
                    className="relative w-[78px] h-[78px] object-cover"
                    alt=""
                    src="/image2@2x.png"
                  />
                  <div className="w-[138px] flex flex-col items-start justify-start">
                    <img
                      className="relative w-[81px] h-[16.2px]"
                      alt=""
                      src="/reviews.svg"
                    />
                    <b className="relative tracking-[-0.01em] leading-[160%] inline-block mt-[-1px]">
                      James Williams
                    </b>
                    <div className="relative text-sm tracking-[0.03em] leading-[160%] font-semibold font-manrope mt-[-1px]">
                      United States
                    </div>
                  </div>
                </div>
                <img
                  className="relative w-[70px] h-[55.3px]"
                  alt=""
                  src="/icon3.svg"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex-1 flex flex-col items-start justify-start">
            <div className="self-stretch bg-white flex flex-col items-start justify-start py-11 pr-11 pl-[49px]">
              <div className="self-stretch h-[146px] flex flex-col items-center justify-start">
                <div className="self-stretch relative leading-[180%]">
                  “ It is a long established fact that a reader will be tracked
                  distracted by the readable content of a page is when looking
                  at its layout. The point of using Lorem of distribution it
                  look like readable English “
                </div>
              </div>
            </div>
            <div className="self-stretch bg-darkslategray-200 h-[125px] flex flex-col items-center justify-end py-[25px] px-0 box-border text-xl text-white font-playfair-display">
              <div className="self-stretch flex flex-row items-center justify-start py-0 px-[50px] gap-[178px]">
                <div className="w-[232px] flex flex-row items-center justify-start gap-[20px]">
                  <img
                    className="relative w-[78px] h-[78px] object-cover"
                    alt=""
                    src="/image3@2x.png"
                  />
                  <div className="w-[138px] flex flex-col items-start justify-start">
                    <img
                      className="relative w-[81px] h-[16.2px]"
                      alt=""
                      src="/reviews.svg"
                    />
                    <b className="relative tracking-[-0.01em] leading-[160%] inline-block mt-[-1px]">
                      Lieo Jessica
                    </b>
                    <div className="relative text-sm tracking-[0.03em] leading-[160%] font-semibold font-manrope mt-[-1px]">
                      United Kingdom
                    </div>
                  </div>
                </div>
                <img
                  className="relative w-[70px] h-[55.3px]"
                  alt=""
                  src="/icon3.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
