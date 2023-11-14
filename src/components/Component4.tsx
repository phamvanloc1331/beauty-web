import { FunctionComponent, useMemo, type CSSProperties } from "react";

type Component4Type = {
  icon?: string;
  great?: string;
  services?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propHeight?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
  propHeight1?: CSSProperties["height"];
};

const Component4: FunctionComponent<Component4Type> = ({
  icon,
  great,
  services,
  propPadding,
  propHeight,
  propWidth,
  propHeight1,
}) => {
  const divStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const content1Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const iconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight1,
    };
  }, [propWidth, propHeight1]);

  return (
    <div
      className="flex-1 bg-white flex flex-row items-start justify-center py-[21px] px-[33px] text-center text-3xl text-gray-200 font-playfair-display border-[1px] border-solid border-darkslategray-200"
      style={divStyle}
    >
      <div
        className="w-[99px] h-[138px] flex flex-col items-center justify-start gap-[14px]"
        style={content1Style}
      >
        <img
          className="relative w-[73px] h-[74px]"
          alt=""
          src={icon}
          style={iconStyle}
        />
        <b className="relative leading-[120%] flex items-center w-[99px]">
          <span className="[line-break:anywhere] w-full">
            <p className="m-0">Great</p>
            <p className="m-0">Services</p>
          </span>
        </b>
      </div>
    </div>
  );
};

export default Component4;
