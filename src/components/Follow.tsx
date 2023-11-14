import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

const Follow: FunctionComponent = () => {
  return (
    <div className="absolute w-full top-[4274px] right-[0.35%] left-[-0.35%] h-[1101px] flex flex-col items-center justify-start gap-[60px] text-left text-mini text-slategray font-manrope">
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[175px] gap-[52px]">
        <div className="flex-1 h-[976px] flex flex-col items-center justify-start">
          <div className="self-stretch flex flex-col items-start justify-start gap-[53px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[22px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[9px]">
                <div className="relative tracking-[0.1em] leading-[154.5%] uppercase font-semibold">
                  Share us
                </div>
                <b className="relative text-26xl tracking-[-0.01em] leading-[130%] inline-block font-playfair-display text-gray-200 w-[264px]">
                  Follow us on Instagram
                </b>
              </div>
              <div className="self-stretch relative text-lg leading-[175%] text-dimgray inline-block h-[123px] shrink-0">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, buying
                to injected humour, or randomised words many desktop publishing
                packages.
              </div>
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden h-[575px] shrink-0 object-cover"
              alt=""
              src="/image19@2x.png"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[46px]">
          <img
            className="self-stretch relative max-w-full overflow-hidden h-[480px] shrink-0 object-cover"
            alt=""
            src="/image20@2x.png"
          />
          <img
            className="self-stretch relative max-w-full overflow-hidden h-[450px] shrink-0 object-cover"
            alt=""
            src="/image21@2x.png"
          />
        </div>
      </div>
      <Link
        className="cursor-pointer [text-decoration:none] bg-slategray flex flex-row items-center justify-center pt-[23px] px-[72px] pb-6 text-center text-sm text-white"
        to="/contact"
      >
        <div className="relative tracking-[0.12em] leading-[125%] uppercase font-extrabold">
          Contact US
        </div>
      </Link>
    </div>
  );
};

export default Follow;
