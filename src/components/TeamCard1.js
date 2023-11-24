const TeamCard1 = () => {
  return (
    <div className="absolute w-[99.24%] top-[662px] right-[0%] left-[0.76%] bg-white h-[940px] flex flex-col items-center justify-center text-left text-mini text-lightslategray font-manrope">
      <div className="self-stretch flex flex-row items-center justify-start py-0 px-[100px] gap-[127px]">
        <img
          className="flex-1 relative max-w-full overflow-hidden h-[685px] object-cover"
          alt=""
          src="/image32@2x.png"
        />
        <div className="flex-1 flex flex-col items-start justify-start gap-[30px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[7px]">
              <div className="self-stretch relative tracking-[0.1em] leading-[154.5%] uppercase font-semibold">
                Beautyness Expert Manager
              </div>
              <b className="self-stretch relative text-26xl tracking-[-0.01em] leading-[130%] font-playfair-display text-gray-200">
                Sherlin D’Cruz
              </b>
            </div>
            <div className="self-stretch relative text-lg leading-[160%] text-dimgray">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by injecte
              humour, or randomised words which don't look even slightly
              believable. If you are going to use a passage of Lorem Ipsum, you
              need to be sure there isn't anything embarrassing hidden in the
              middle of text. All the Lorem Ipsum generators on the Internet
              tend to repeat.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[15px] text-3xl text-gray-200 font-playfair-display">
            <div className="self-stretch flex flex-row items-center justify-start gap-[34px]">
              <img
                className="relative w-[65px] h-[65px]"
                alt=""
                src="/call.svg"
              />
              <b className="flex-1 relative tracking-[-0.01em] leading-[130%]">
                (+22) 1423 585 980
              </b>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[34px]">
              <img className="relative w-[65px] h-[65px]" alt="" src="/1.svg" />
              <b className="flex-1 relative tracking-[-0.01em] leading-[130%]">
                sherlindcruz@gmail.com
              </b>
            </div>
          </div>
          <div className="bg-lightslategray w-[239px] h-[65px] flex flex-col items-center justify-end py-[23px] px-0 box-border text-center text-sm text-white">
            <div className="relative tracking-[0.12em] leading-[125%] uppercase font-extrabold">
              Make a reservation
            </div>
          </div>
          <div className="self-stretch h-[27px] flex flex-row items-center justify-start py-0 px-2.5 box-border gap-[30px]">
            <img
              className="relative w-3.5 h-[27px] object-cover"
              alt=""
              src="/oip-16@2x.png"
            />
            <img
              className="relative w-[22px] h-[21px] object-cover"
              alt=""
              src="/download-16@2x.png"
            />
            <img
              className="relative w-[21px] h-5 object-cover"
              alt=""
              src="/oip-2-16@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard1;
