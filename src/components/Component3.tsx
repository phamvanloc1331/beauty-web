import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Link } from "react-router-dom";

type Component3Type = {
  photo?: string;
  spaMassage?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth1?: CSSProperties["width"];
  propWidth2?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
  propAlignSelf1?: CSSProperties["alignSelf"];
  propWidth3?: CSSProperties["width"];
};

const Component3: FunctionComponent<Component3Type> = ({
  photo,
  spaMassage,
  propWidth,
  propAlignSelf,
  propWidth1,
  propWidth2,
  propHeight,
  propAlignSelf1,
  propWidth3,
}) => {
  const imageStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  const backgroundStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const photoIconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth2,
      height: propHeight,
    };
  }, [propWidth2, propHeight]);

  const contentStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
      width: propWidth3,
    };
  }, [propAlignSelf1, propWidth3]);

  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[26px] text-left text-7xl text-gray-200 font-playfair-display">
      <div className="relative w-[330px] h-[250px]" style={imageStyle}>
        <div
          className="absolute top-[0px] left-[0px] bg-silver w-[330px] h-[250px]"
          style={backgroundStyle}
        />
        <img
          className="absolute top-[0px] left-[0px] w-[398px] h-[265px] object-cover"
          alt=""
          src={photo}
          style={photoIconStyle}
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[30px]">
        <div
          className="self-stretch flex flex-col items-start justify-start gap-[11px]"
          style={contentStyle}
        >
          <b className="self-stretch relative leading-[120%]">{spaMassage}</b>
          <div className="self-stretch relative text-lg tracking-[0.02em] leading-[165%] font-manrope text-dimgray inline-block h-[86px] shrink-0">
            If you are going to use a passage offer Lorem Ipsum, you need to be
            sure hidden in the middle of text.
          </div>
        </div>
        <Link
          className="cursor-pointer [text-decoration:none] flex flex-row items-center justify-center pt-[18px] px-[43px] pb-[19px] text-center text-sm text-[inherit] font-manrope border-[2px] border-solid border-slategray"
          to="/blogsingle"
        >
          <div className="relative tracking-[0.12em] leading-[125%] uppercase font-extrabold">
            READ MORE
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Component3;
