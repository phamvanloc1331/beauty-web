import { FunctionComponent, useMemo, type CSSProperties } from "react";

type BeautyFormType = {
  /** Style props */
  divTop?: CSSProperties["top"];
};

const BeautyForm: FunctionComponent<BeautyFormType> = ({ divTop }) => {
  const footerStyle: CSSProperties = useMemo(() => {
    return {
      top: divTop,
    };
  }, [divTop]);

  return (
    <div
      className="absolute w-full top-[1523px] right-[0%] left-[0%] h-[621px] flex flex-col items-center justify-start text-left text-21xl text-white font-playfair-display"
      style={footerStyle}
    >
      <div className="self-stretch bg-darkslategray-200 h-[560px] flex flex-col items-center justify-center">
        <div className="self-stretch flex flex-col items-start justify-start py-0 px-[100px] gap-[52px]">
          <div className="self-stretch flex flex-row items-center justify-start gap-[651px]">
            <div className="flex-1 h-[65px] flex flex-row items-center justify-start gap-[16px]">
              <img
                className="relative w-[65px] h-[65px]"
                alt=""
                src="/logo.svg"
              />
              <b className="relative tracking-[0.02em] leading-[125%]">
                Beautyness
              </b>
            </div>
            <div className="flex-1 flex flex-row items-center justify-end gap-[10px]">
              <div className="box-border w-[55px] h-[55px] flex flex-col items-center justify-center border-[2px] border-solid border-slategray">
                <img
                  className="relative w-5 h-[26px] object-cover"
                  alt=""
                  src="/z4880570784943-8640932773ae999d9139a3e2f80eb04c-1@2x.png"
                />
              </div>
              <div className="box-border w-[55px] h-[55px] flex flex-col items-end justify-center py-0 px-[11px] border-[2px] border-solid border-slategray">
                <img
                  className="relative w-[30px] h-[31px] object-cover"
                  alt=""
                  src="/z4880564138072-71550010f4c3a53af5d94f86e1039f43-1@2x.png"
                />
              </div>
              <div className="box-border w-[55px] h-[55px] flex flex-col items-end justify-start py-[15px] px-[11px] border-[2px] border-solid border-slategray">
                <img
                  className="relative w-[31px] h-8 object-cover"
                  alt=""
                  src="/z4880587159753-59ffb54e7aa733495feae13e1b2b0603-1@2x.png"
                />
              </div>
              <div className="box-border w-[55px] h-[55px] flex flex-col items-center justify-start py-[15px] px-0 border-[2px] border-solid border-slategray">
                <img
                  className="relative w-6 h-[26px] object-cover"
                  alt=""
                  src="/z4880571960074-a2b801e85fd9624d1d62070e575ef553-1@2x.png"
                />
              </div>
            </div>
          </div>
          <img
            className="relative w-[1200px] h-0.5 opacity-[0.15]"
            alt=""
            src="/line.svg"
          />
          <div className="self-stretch flex flex-row items-start justify-start gap-[129px] text-3xl">
            <div className="flex-1 flex flex-col items-start justify-start gap-[21px]">
              <b className="self-stretch relative leading-[140%]">Explore</b>
              <div className="self-stretch relative text-mid tracking-[-0.01em] leading-[200%] font-medium font-manrope inline-block h-[206px] shrink-0">
                <p className="m-0">Home</p>
                <p className="m-0">About Us</p>
                <p className="m-0">Services</p>
                <p className="m-0">Appointments</p>
                <p className="m-0">Blog</p>
                <p className="m-0">Contact Us</p>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[21px]">
              <b className="self-stretch relative leading-[140%]">
                Utility Pages
              </b>
              <div className="self-stretch relative text-mid tracking-[-0.01em] leading-[200%] font-medium font-manrope">
                <p className="m-0">Start here</p>
                <p className="m-0">Style guide</p>
                <p className="m-0">404 not found</p>
                <p className="m-0">Password protected</p>
                <p className="m-0">Licenses</p>
                <p className="m-0">Changelog</p>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[21px]">
              <b className="self-stretch relative leading-[140%]">
                Keep in Touch
              </b>
              <div className="self-stretch flex flex-col items-start justify-start gap-[14px] text-mid font-manrope">
                <div className="self-stretch flex flex-row items-start justify-start gap-[14px]">
                  <b className="relative tracking-[-0.01em] leading-[150%]">
                    Address :
                  </b>
                  <div className="flex-1 relative tracking-[-0.01em] leading-[150%] font-medium inline-block h-[63px]">
                    24A Kingston St, Los Vegas NC , USA.
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[47px]">
                  <b className="relative tracking-[-0.01em] leading-[150%]">
                    Mail :
                  </b>
                  <div className="flex-1 relative tracking-[-0.01em] leading-[170%] font-medium">
                    support@doctors.com
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[29px]">
                  <b className="relative tracking-[-0.01em] leading-[150%]">
                    Phone :
                  </b>
                  <div className="flex-1 relative tracking-[-0.01em] leading-[170%] font-medium inline-block h-[31px]">
                    (+22) 123 - 4567 - 900
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[21px]">
              <b className="self-stretch relative leading-[140%]">
                Working Hours
              </b>
              <div className="self-stretch relative text-mid tracking-[-0.01em] leading-[200%] font-medium font-manrope">
                <p className="m-0">Mon to Fri: 7am - 6pm</p>
                <p className="m-0">Sat: 9am - 7pm</p>
                <p className="m-0">Sun: 9am - 6pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-gray-100 h-[61px] flex flex-col items-center justify-end py-[19px] px-0 box-border text-center text-mini font-heebo">
        <div className="self-stretch relative tracking-[-0.01em] leading-[200%]">
          <span></span>
          <span className="text-lg font-manrope">
            <span className="font-dm-sans">{` Copyright 2021. `}</span>
            <span>Drafted by Victor Themes.</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BeautyForm;
