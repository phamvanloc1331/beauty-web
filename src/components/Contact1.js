const Contact1 = () => {
  return (
    <div className="absolute w-[83.26%] top-[761px] right-[8.33%] left-[8.4%] flex flex-row items-center justify-start gap-[120px] text-left text-mini text-lightslategray font-manrope">
      <img
        className="flex-1 relative max-w-full overflow-hidden h-[676px] object-cover"
        alt=""
        src="/image17@2x.png"
      />
      <div className="flex-1 flex flex-col items-start justify-start gap-[43px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[23px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[9px]">
            <div className="self-stretch relative tracking-[0.1em] leading-[154.5%] uppercase font-semibold">
              Get in Touch!
            </div>
            <b className="self-stretch relative text-26xl tracking-[-0.01em] leading-[130%] font-playfair-display text-gray-200">
              We are here to help you always...
            </b>
          </div>
          <div className="self-stretch relative text-lg leading-[175%] text-gray-200 inline-block h-24 shrink-0">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, buying to many
            desktop publishing packages.
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[30px] text-5xl text-gray-200 font-playfair-display">
          <div className="self-stretch flex flex-row items-center justify-start gap-[27px]">
            <img
              className="relative w-[65px] h-[65px]"
              alt=""
              src="/icon5.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
              <b className="self-stretch relative leading-[125%]">Visit Us :</b>
              <div className="self-stretch relative text-base tracking-[0.06em] leading-[125%] uppercase font-semibold font-manrope">
                NO.09a, Downtown, SAN DIEAGO, USA
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-[27px]">
            <img
              className="relative w-[65px] h-[65px]"
              alt=""
              src="/icon6.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
              <b className="self-stretch relative leading-[125%]">Drop Us :</b>
              <div className="self-stretch relative text-base tracking-[0.06em] leading-[125%] uppercase font-semibold font-manrope">
                support@beautyness.com
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-[27px]">
            <img
              className="relative w-[65px] h-[65px]"
              alt=""
              src="/icon7.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
              <b className="self-stretch relative leading-[125%]">Call Us :</b>
              <div className="self-stretch relative text-base tracking-[0.06em] leading-[125%] uppercase font-semibold font-manrope">
                Call: 1-800-123-9999
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact1;
