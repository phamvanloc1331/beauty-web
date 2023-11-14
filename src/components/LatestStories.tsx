import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import Component5 from "./Component5";

const LatestStories: FunctionComponent = () => {
  return (
    <div className="absolute w-full top-[7333px] right-[0%] left-[0%] flex flex-col items-center justify-start gap-[40px] text-center text-mini text-slategray font-manrope">
      <div className="self-stretch flex flex-col items-center justify-start gap-[4px]">
        <div className="relative tracking-[0.1em] leading-[154.5%] uppercase font-semibold">
          Our Blog
        </div>
        <b className="relative text-26xl tracking-[-0.01em] leading-[130%] font-playfair-display text-gray-200">
          Latest Updates
        </b>
      </div>
      <div className="self-stretch h-[581px] flex flex-row flex-wrap items-start justify-center gap-[20px] text-left text-smi">
        <Component5
          image="/image4@2x.png"
          theEnergyEfficiencyOfTheH="The energy efficiency of the hydrotherapy or swim"
        />
        <Component5
          image="/image5@2x.png"
          theEnergyEfficiencyOfTheH="Tips to improve your body via cleansing"
        />
        <Component5
          image="/image6@2x.png"
          theEnergyEfficiencyOfTheH="Experience the beauty at our beauty spa"
        />
      </div>
      <div className="w-[1426px] flex flex-row flex-wrap items-start justify-center text-sm text-gray-200">
        <Link
          className="cursor-pointer [text-decoration:none] flex flex-row items-center justify-center pt-[23px] px-[41px] pb-6 text-[inherit] border-[2px] border-solid border-slategray"
          to="/pages"
        >
          <div className="relative tracking-[0.12em] leading-[125%] uppercase font-extrabold">
            VIEW MORE STORIES
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LatestStories;
