const Content = () => {
  return (
    <div className="absolute w-[99.58%] top-[749px] right-[0.35%] left-[0.07%] flex flex-col items-center justify-start py-0 px-[350px] box-border gap-[45px] text-center text-mini text-slategray font-manrope">
      <div className="self-stretch flex flex-col items-center justify-start gap-[9px]">
        <div className="relative tracking-[0.1em] leading-[154.5%] uppercase font-semibold">
          Our Values
        </div>
        <b className="self-stretch relative text-26xl tracking-[-0.01em] leading-[130%] font-playfair-display text-gray-200">
          The work values we thrive for
        </b>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start gap-[36px] text-left text-3xl text-gray-200 font-playfair-display">
        <div className="self-stretch flex flex-row items-start justify-start gap-[32px]">
          <img
            className="relative w-[100px] h-[100px]"
            alt=""
            src="/icon8.svg"
          />
          <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
            <b className="self-stretch relative leading-[120%]">
              Beauty Experts
            </b>
            <div className="self-stretch relative text-lg leading-[175%] font-manrope text-dimgray inline-block h-[90px] shrink-0">
              The majority have suffered alteration in some form, buying to
              injected humour, or randomised words which desktop publishing
              packages.
            </div>
          </div>
        </div>
        <div className="relative box-border w-[621px] h-px border-t-[1px] border-solid border-lightgray" />
        <div className="self-stretch flex flex-row items-start justify-start gap-[32px]">
          <img
            className="relative w-[100px] h-[100px]"
            alt=""
            src="/icon9.svg"
          />
          <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
            <b className="self-stretch relative leading-[120%]">
              Great Services
            </b>
            <div className="self-stretch relative text-lg leading-[175%] font-manrope text-dimgray">
              The majority have suffered alteration in some form, buying to
              injected humour, or randomised words which desktop publishing
              packages.
            </div>
          </div>
        </div>
        <div className="relative box-border w-[621px] h-px border-t-[1px] border-solid border-lightgray" />
        <div className="self-stretch flex flex-row items-start justify-start gap-[32px]">
          <img
            className="relative w-[100px] h-[100px]"
            alt=""
            src="/icon10.svg"
          />
          <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
            <b className="self-stretch relative leading-[120%]">100% Genuine</b>
            <div className="self-stretch relative text-lg leading-[175%] font-manrope text-dimgray inline-block h-[90px] shrink-0">
              The majority have suffered alteration in some form, buying to
              injected humour, or randomised words which desktop publishing
              packages.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
