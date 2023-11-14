import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Link } from "react-router-dom";

type Component7Type = {
  image?: string;
  experienceTheBeautyAtOurB?: string;
  image1?: string;
  tipsToImproveYourBodyViaC?: string;
  image2?: string;
  theEnergyEfficiencyOfTheH?: string;

  /** Style props */
  lineAlignSelf?: CSSProperties["alignSelf"];
  lineWidth?: CSSProperties["width"];
  tHAUGUST2021Left?: CSSProperties["left"];
  tHAUGUST2021Width?: CSSProperties["width"];
  experienceTheBeautyLeft?: CSSProperties["left"];
  experienceTheBeautyWidth?: CSSProperties["width"];
  lineAlignSelf1?: CSSProperties["alignSelf"];
  lineWidth1?: CSSProperties["width"];
  tHAUGUST2021Left1?: CSSProperties["left"];
  tHAUGUST2021Width1?: CSSProperties["width"];
  tipsToImproveLeft?: CSSProperties["left"];
  tipsToImproveWidth?: CSSProperties["width"];
  lineAlignSelf2?: CSSProperties["alignSelf"];
  lineWidth2?: CSSProperties["width"];
  tHAUGUST2021Width2?: CSSProperties["width"];
  tHAUGUST2021Left2?: CSSProperties["left"];
  theEnergyEfficiencyWidth?: CSSProperties["width"];
};

const Component7: FunctionComponent<Component7Type> = ({
  image,
  experienceTheBeautyAtOurB,
  image1,
  tipsToImproveYourBodyViaC,
  image2,
  theEnergyEfficiencyOfTheH,
  lineAlignSelf,
  lineWidth,
  tHAUGUST2021Left,
  tHAUGUST2021Width,
  experienceTheBeautyLeft,
  experienceTheBeautyWidth,
  lineAlignSelf1,
  lineWidth1,
  tHAUGUST2021Left1,
  tHAUGUST2021Width1,
  tipsToImproveLeft,
  tipsToImproveWidth,
  lineAlignSelf2,
  lineWidth2,
  tHAUGUST2021Width2,
  tHAUGUST2021Left2,
  theEnergyEfficiencyWidth,
}) => {
  const dateStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: lineAlignSelf,
      width: lineWidth,
    };
  }, [lineAlignSelf, lineWidth]);

  const bYPETERBERGSONStyle: CSSProperties = useMemo(() => {
    return {
      left: tHAUGUST2021Left,
      width: tHAUGUST2021Width,
    };
  }, [tHAUGUST2021Left, tHAUGUST2021Width]);

  const tHAUGUST2021Style: CSSProperties = useMemo(() => {
    return {
      left: experienceTheBeautyLeft,
      width: experienceTheBeautyWidth,
    };
  }, [experienceTheBeautyLeft, experienceTheBeautyWidth]);

  const date1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: lineAlignSelf1,
      width: lineWidth1,
    };
  }, [lineAlignSelf1, lineWidth1]);

  const bYPETERBERGSON1Style: CSSProperties = useMemo(() => {
    return {
      left: tHAUGUST2021Left1,
      width: tHAUGUST2021Width1,
    };
  }, [tHAUGUST2021Left1, tHAUGUST2021Width1]);

  const tHAUGUST20211Style: CSSProperties = useMemo(() => {
    return {
      left: tipsToImproveLeft,
      width: tipsToImproveWidth,
    };
  }, [tipsToImproveLeft, tipsToImproveWidth]);

  const date2Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: lineAlignSelf2,
      width: lineWidth2,
    };
  }, [lineAlignSelf2, lineWidth2]);

  const bYPETERBERGSON2Style: CSSProperties = useMemo(() => {
    return {
      width: tHAUGUST2021Width2,
      left: tHAUGUST2021Left2,
    };
  }, [tHAUGUST2021Width2, tHAUGUST2021Left2]);

  const tHAUGUST20212Style: CSSProperties = useMemo(() => {
    return {
      width: theEnergyEfficiencyWidth,
    };
  }, [theEnergyEfficiencyWidth]);

  return (
    <div className="self-stretch relative h-[579px] text-left text-smi text-slategray font-manrope">
      <Link
        className="cursor-pointer [text-decoration:none] absolute w-[30.83%] top-[0px] right-[0%] left-[69.17%] flex flex-col items-start justify-start text-[inherit]"
        to="/blogsingle"
      >
        <img
          className="self-stretch relative max-w-full overflow-hidden h-[325px] shrink-0 object-cover"
          alt=""
          src={image}
        />
        <div className="self-stretch bg-aliceblue-100 flex flex-col items-start justify-start py-[30px] pr-[27px] pl-[26px]">
          <div className="self-stretch h-[194px] flex flex-col items-start justify-start gap-[8px]">
            <div className="self-stretch relative h-4" style={dateStyle}>
              <b
                className="absolute top-[0px] left-[167.9px] tracking-[0.06em] leading-[125%] uppercase flex items-center w-[138.5px]"
                style={bYPETERBERGSONStyle}
              >
                BY PETER BERGSON
              </b>
              <div className="absolute top-[9px] left-[136.2px] box-border w-[21.8px] h-0.5 border-t-[2px] border-solid border-darkslategray-100" />
              <b
                className="absolute top-[0px] left-[0px] tracking-[0.06em] leading-[125%] uppercase flex items-center w-[130px]"
                style={tHAUGUST2021Style}
              >
                11TH AUGUST 2021
              </b>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[14px] text-3xl text-gray-200 font-playfair-display">
              <b className="self-stretch relative tracking-[0.02em] leading-[140%]">
                {experienceTheBeautyAtOurB}
              </b>
              <div className="self-stretch relative text-lg tracking-[0.02em] leading-[155%] font-manrope text-dimgray inline-block h-[85px] shrink-0">
                The point of using Lorem Ipsum hiter that using making it look
                like others readable will get end.
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute w-[30.83%] top-[0px] right-[34.67%] left-[34.5%] flex flex-col items-start justify-start text-[inherit]"
        to="/blogsingle"
      >
        <img
          className="self-stretch relative max-w-full overflow-hidden h-[325px] shrink-0 object-cover"
          alt=""
          src={image1}
        />
        <div className="self-stretch bg-aliceblue-100 flex flex-col items-start justify-start py-[30px] pr-[27px] pl-[26px]">
          <div className="self-stretch h-[194px] flex flex-col items-start justify-start gap-[8px]">
            <div className="self-stretch relative h-4" style={date1Style}>
              <b
                className="absolute top-[0px] left-[167.9px] tracking-[0.06em] leading-[125%] uppercase flex items-center w-[138.5px]"
                style={bYPETERBERGSON1Style}
              >
                BY PETER BERGSON
              </b>
              <div className="absolute top-[9px] left-[136.2px] box-border w-[21.8px] h-0.5 border-t-[2px] border-solid border-darkslategray-100" />
              <b
                className="absolute top-[0px] left-[0px] tracking-[0.06em] leading-[125%] uppercase flex items-center w-[130px]"
                style={tHAUGUST20211Style}
              >
                11TH AUGUST 2021
              </b>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[14px] text-3xl text-gray-200 font-playfair-display">
              <b className="self-stretch relative tracking-[0.02em] leading-[140%]">
                {tipsToImproveYourBodyViaC}
              </b>
              <div className="self-stretch relative text-lg tracking-[0.02em] leading-[155%] font-manrope text-dimgray inline-block h-[85px] shrink-0">
                The point of using Lorem Ipsum hiter that using making it look
                like others readable will get end.
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute w-[30.83%] top-[0px] right-[69.17%] left-[0%] flex flex-col items-start justify-start text-[inherit]"
        to="/blogsingle"
      >
        <img
          className="self-stretch relative max-w-full overflow-hidden h-[325px] shrink-0 object-cover"
          alt=""
          src={image2}
        />
        <div className="self-stretch bg-aliceblue-100 flex flex-col items-start justify-start py-[30px] pr-[27px] pl-[26px]">
          <div className="self-stretch h-[194px] flex flex-col items-start justify-start gap-[8px]">
            <div className="self-stretch relative h-4" style={date2Style}>
              <b
                className="absolute w-[43.7%] top-[0px] left-[52.96%] tracking-[0.06em] leading-[125%] uppercase flex items-center"
                style={bYPETERBERGSON2Style}
              >
                BY PETER BERGSON
              </b>
              <div className="absolute top-[9px] left-[136.2px] box-border w-[21.8px] h-0.5 border-t-[2px] border-solid border-darkslategray-100" />
              <b
                className="absolute w-[41.03%] top-[0px] left-[0%] tracking-[0.06em] leading-[125%] uppercase flex items-center"
                style={tHAUGUST20212Style}
              >
                11TH AUGUST 2021
              </b>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[14px] text-3xl text-gray-200 font-playfair-display">
              <b className="self-stretch relative tracking-[0.02em] leading-[140%]">
                {theEnergyEfficiencyOfTheH}
              </b>
              <div className="self-stretch relative text-lg tracking-[0.02em] leading-[155%] font-manrope text-dimgray inline-block h-[85px] shrink-0">
                The point of using Lorem Ipsum hiter that using making it look
                like others readable will get end.
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Component7;
