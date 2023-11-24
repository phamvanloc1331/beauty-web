const Background = () => {
  return (
    <div className="absolute w-full top-[169px] right-[0.14%] left-[-0.14%] bg-aliceblue-200 h-[925px] text-left text-mini text-slategray font-manrope">
      <img
        className="absolute w-[46.85%] top-[0px] right-[0.03%] left-[53.13%] max-w-full overflow-hidden h-[925px] object-cover"
        alt=""
        src="/background11@2x.png"
      />
      <img
        className="absolute w-[30.85%] top-[186px] right-[21.66%] left-[47.49%] max-w-full overflow-hidden h-[545px] object-cover"
        alt=""
        src="/image@2x.png"
      />
      <div className="absolute w-[32.79%] top-[179px] right-[57.26%] left-[9.94%] h-[538px] flex flex-col items-start justify-center">
        <img className="relative w-[34px] h-[22px]" alt="" src="/vector.svg" />
        <div className="self-stretch relative tracking-[0.1em] leading-[154.5%] uppercase font-semibold">
          Welcome to Beautyness!!!
        </div>
        <b className="self-stretch relative text-51xl tracking-[-0.01em] leading-[115%] font-playfair-display text-gray-200">
          Beauty is power a smile is its sword.
        </b>
        <b className="self-stretch relative text-lgi leading-[170%] inline-block text-dimgray h-[89px] shrink-0">
          There are many variation of passages are Ipsum available, majority
          have suffered alteration in some form.
        </b>
        <div className="bg-slategray w-[246px] h-[72px] flex flex-row items-center justify-center pt-[23px] px-9 pb-6 box-border text-center text-sm text-white">
          <div className="relative tracking-[0.12em] leading-[125%] uppercase font-extrabold">
            Make a reservation
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
