import { useMemo } from "react";

const Component = ({
  image,
  sherlinDCruz,
  oIP1,
  download1,
  oIP21,
  propRight,
  propLeft,
}) => {
  const aStyle = useMemo(() => {
    return {
      right: propRight,
      left: propLeft,
    };
  }, [propRight, propLeft]);

  return (
    <a
      className="[text-decoration:none] absolute w-[27.87%] top-[2473px] right-[67.2%] left-[4.93%] flex flex-col items-center justify-start gap-[25px] text-center text-5xl text-gray-200 font-playfair-display"
      style={aStyle}
    >
      <img
        className="self-stretch relative max-w-full overflow-hidden h-[350px] shrink-0 object-cover"
        alt=""
        src={image}
      />
      <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[4px]">
          <b className="relative leading-[120%] flex items-center justify-center w-[315px]">
            {sherlinDCruz}
          </b>
          <div className="relative text-mini tracking-[0.1em] leading-[154.5%] uppercase font-semibold font-manrope text-slategray">
            Beautyness Expert
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[23px] text-lg text-dimgray font-manrope">
          <div className="self-stretch relative leading-[160%]">
            I must explain to you how all this mistaken idea of denouncing
            pleasure that will araise praising pain
          </div>
          <div className="w-[103.3px] h-[27px] flex flex-row items-center justify-end gap-[30px]">
            <img
              className="relative w-3.5 h-[27px] object-cover"
              alt=""
              src={oIP1}
            />
            <img
              className="relative w-[22px] h-[21px] object-cover"
              alt=""
              src={download1}
            />
            <img
              className="relative w-[21px] h-5 object-cover"
              alt=""
              src={oIP21}
            />
          </div>
        </div>
      </div>
    </a>
  );
};

export default Component;
