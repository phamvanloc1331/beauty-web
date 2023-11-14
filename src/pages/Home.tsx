import { FunctionComponent, useEffect } from "react";
import { Link } from "react-router-dom";
import BeautyForm from "../components/BeautyForm";
import Appointment from "../components/Appointment";
import Component3 from "../components/Component3";
import Background from "../components/Background";
import ComfortableSkinContainer from "../components/ComfortableSkinContainer";
import Testimonials from "../components/Testimonials";
import LatestStories from "../components/LatestStories";

const Home: FunctionComponent = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div
      className="relative [background:linear-gradient(#fff,_#fff),_#fff] w-full h-[8894px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] text-left text-lg text-gray-200 font-playfair-display"
      data-animate-on-scroll
    >
      <BeautyForm divTop="8273px" />
      <div className="absolute w-[6.94%] top-[8206px] right-[-9.79%] left-[102.85%] h-[100px] overflow-hidden" />
      <Appointment />
      <div className="absolute w-[45.76%] top-[5405px] right-[27.15%] left-[27.08%] flex flex-col items-center justify-start gap-[9px] text-center text-mini text-slategray font-manrope">
        <div className="relative tracking-[0.1em] leading-[154.5%] uppercase font-semibold">
          Our Awesome Benefits
        </div>
        <b className="self-stretch relative text-26xl tracking-[-0.01em] leading-[130%] font-playfair-display text-gray-200">
          Actually what you’ll get from
        </b>
      </div>
      <div className="absolute w-[45.76%] top-[2826px] right-[24.79%] left-[29.44%] flex flex-col items-center justify-start gap-[9px] text-center text-mini text-slategray font-manrope">
        <div className="relative tracking-[0.1em] leading-[154.5%] uppercase font-semibold">
          Our Services
        </div>
        <b className="self-stretch relative text-26xl tracking-[-0.01em] leading-[130%] font-playfair-display text-gray-200">
          We are Experienced in making you very Beautiful
        </b>
      </div>
      <img
        className="absolute w-[11.39%] top-[3764px] right-[43.99%] left-[44.63%] max-w-full overflow-hidden h-[157px]"
        alt=""
        src="/background.svg"
      />
      <div className="absolute w-full top-[1200px] right-[0%] left-[0%] flex flex-row flex-wrap items-start justify-center py-0 px-[110px] box-border gap-[105px]">
        <Component3 photo="/photo@2x.png" spaMassage={`Spa & Massage`} />
        <Component3
          photo="/photo1@2x.png"
          spaMassage={`Hair & Beauty`}
          propWidth="unset"
          propAlignSelf="stretch"
          propWidth1="336.7px"
          propWidth2="402px"
          propHeight="264px"
          propAlignSelf1="unset"
          propWidth3="327px"
        />
        <Component3
          photo="/photo2@2x.png"
          spaMassage="Body Treatments"
          propWidth="unset"
          propAlignSelf="stretch"
          propWidth1="336.7px"
          propWidth2="387.7px"
          propHeight="253px"
          propAlignSelf1="stretch"
          propWidth3="unset"
        />
      </div>
      <Background />
      <div className="absolute w-[36.53%] top-[55px] right-[61.46%] left-[2.01%] flex flex-row items-center justify-start gap-[46px] text-9xl">
        <a className="[text-decoration:none] w-[201px] h-[35px] flex flex-row items-center justify-start gap-[11px] text-[inherit]">
          <img className="relative w-[33px] h-[33px]" alt="" src="/logo1.svg" />
          <b className="relative leading-[125%]">Beautyness</b>
        </a>
        <div className="w-[300px] h-[23px] flex flex-row items-center justify-start gap-[12px] text-lg font-manrope">
          <img
            className="relative w-[22.9px] h-[22.9px]"
            alt=""
            src="/vector1.svg"
          />
          <div className="relative tracking-[-0.01em] leading-[125%] font-semibold">
            Call Us - (+22) 123 456 7890
          </div>
        </div>
      </div>
      <a className="[text-decoration:none] absolute w-[52.85%] top-[48px] right-[2.29%] left-[44.85%] flex flex-row items-center justify-end gap-[32px] text-dimgray font-manrope">
        <div className="w-[450px] h-[23px] flex flex-row items-center justify-end">
          <div className="relative leading-[125%] flex items-center w-[84px] h-[30px] shrink-0">
            Home
          </div>
          <Link
            className="cursor-pointer [text-decoration:none] relative leading-[125%] text-[inherit] flex items-center w-[84px] h-[30px] shrink-0 ml-[-16px]"
            to="/pages"
          >
            Pages
          </Link>
          <Link
            className="cursor-pointer [text-decoration:none] relative leading-[125%] text-[inherit] flex items-center w-[84px] h-[30px] shrink-0 ml-[-16px]"
            to="/about"
          >
            About
          </Link>
          <Link
            className="cursor-pointer [text-decoration:none] relative leading-[125%] text-[inherit] flex items-center w-16 h-8 shrink-0 ml-[-16px]"
            to="/blog"
          >
            Blog
          </Link>
          <Link
            className="cursor-pointer [text-decoration:none] relative leading-[125%] text-[inherit] flex items-center w-20 h-[30px] shrink-0 ml-[-16px]"
            to="/contact"
          >
            Contact
          </Link>
        </div>
        <div className="flex-1 flex flex-row items-center justify-end gap-[30px]">
          <img
            className="relative w-3.5 h-[27px] object-cover"
            alt=""
            src="/oip-1@2x.png"
          />
          <img
            className="relative w-[22px] h-[21px] object-cover"
            alt=""
            src="/download-1@2x.png"
          />
          <img
            className="relative w-[21px] h-5 object-cover"
            alt=""
            src="/oip-2-1@2x.png"
          />
        </div>
        <div className="bg-lightslategray w-[173px] flex flex-col items-center justify-center py-4 px-[33px] box-border text-center text-sm text-white">
          <div className="flex flex-row items-center justify-center gap-[12px]">
            <img
              className="relative w-[15.5px] h-[17px]"
              alt=""
              src="/icon.svg"
            />
            <b className="relative tracking-[0.1em] leading-[125%] uppercase">
              RESERVATION
            </b>
          </div>
        </div>
      </a>
      <ComfortableSkinContainer />
      <Testimonials />
      <div className="absolute w-[100.07%] top-[5600px] right-[-0.07%] left-[0%] flex flex-col items-center justify-start gap-[35px] text-7xl">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center py-0 px-[100px] gap-[105px]">
          <div className="flex-1 h-[243px] flex flex-col items-start justify-start gap-[20px]">
            <div className="box-border w-[90px] h-[90px] flex flex-col items-center justify-end pt-0 px-[5px] pb-[5px] border-[1px] border-dashed border-darkslategray-200">
              <div className="relative bg-slategray w-20 h-20" />
              <img
                className="relative w-[31px] h-[22px] mt-[-19px]"
                alt=""
                src="/vector3.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[11px]">
              <b className="self-stretch relative leading-[120%]">
                Optimised Energy Efficiency
              </b>
              <div className="self-stretch relative text-lg tracking-[0.02em] leading-[165%] font-manrope text-dimgray">
                The point of using Lorem Ipsum is that using making it look like
                readable.
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[20px]">
            <div className="box-border w-[90px] h-[90px] flex flex-col items-center justify-end pt-0 px-[5px] pb-[5px] border-[1px] border-dashed border-darkslategray-200">
              <div className="relative bg-slategray w-20 h-20" />
              <img
                className="relative w-[31px] h-[22px] mt-[-19px]"
                alt=""
                src="/vector3.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[11px]">
              <b className="self-stretch relative leading-[120%]">
                Multi-faceted Water Filtration
              </b>
              <div className="self-stretch relative text-lg tracking-[0.02em] leading-[165%] font-manrope text-dimgray">
                The point of using Lorem Ipsum is that using making it look like
                readable.
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[20px]">
            <div className="box-border w-[90px] h-[90px] flex flex-col items-center justify-end pt-0 px-[5px] pb-[5px] border-[1px] border-dashed border-darkslategray-200">
              <div className="relative bg-slategray w-20 h-20" />
              <img
                className="relative w-[31px] h-[22px] mt-[-19px]"
                alt=""
                src="/vector3.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[11px]">
              <b className="self-stretch relative leading-[120%]">
                Uncompromising Quality and Durability
              </b>
              <div className="self-stretch relative text-lg tracking-[0.02em] leading-[165%] font-manrope text-dimgray">
                The point of using Lorem Ipsum is that using making it look like
                readable.
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center py-0 px-[100px] gap-[105px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[20px]">
            <div className="box-border w-[90px] h-[90px] flex flex-col items-center justify-end pt-0 px-[5px] pb-[5px] border-[1px] border-dashed border-darkslategray-200">
              <div className="relative bg-slategray w-20 h-20" />
              <img
                className="relative w-[31px] h-[22px] mt-[-19px]"
                alt=""
                src="/vector3.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[11px]">
              <b className="self-stretch relative leading-[120%]">
                An Ultra-Pampering Spa Experience
              </b>
              <div className="self-stretch relative text-lg tracking-[0.02em] leading-[165%] font-manrope text-dimgray">
                The point of using Lorem Ipsum is that using making it look like
                readable.
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[20px]">
            <div className="box-border w-[90px] h-[90px] flex flex-col items-center justify-end pt-0 px-[5px] pb-[5px] border-[1px] border-dashed border-darkslategray-200">
              <div className="relative bg-slategray w-20 h-20" />
              <img
                className="relative w-[31px] h-[22px] mt-[-19px]"
                alt=""
                src="/vector3.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[11px]">
              <b className="self-stretch relative leading-[120%]">
                Easy Care for Unparalleled Enjoyment
              </b>
              <div className="self-stretch relative text-lg tracking-[0.02em] leading-[165%] font-manrope text-dimgray">
                The point of using Lorem Ipsum is that using making it look like
                readable.
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[20px]">
            <div className="box-border w-[90px] h-[90px] flex flex-col items-center justify-end pt-0 px-[5px] pb-[5px] border-[1px] border-dashed border-darkslategray-200">
              <div className="relative bg-slategray w-20 h-20" />
              <img
                className="relative w-[31px] h-[22px] mt-[-19px]"
                alt=""
                src="/vector3.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[11px]">
              <b className="self-stretch relative leading-[120%]">
                Optimised Energy Efficiency
              </b>
              <div className="self-stretch relative text-lg tracking-[0.02em] leading-[165%] font-manrope text-dimgray">
                The point of using Lorem Ipsum is that using making it look like
                readable.
              </div>
            </div>
          </div>
        </div>
      </div>
      <LatestStories />
      <img
        className="absolute w-[46.74%] top-[3243px] right-[47.26%] left-[6%] max-w-full overflow-hidden h-[664px] object-cover"
        alt=""
        src="/image7@2x.png"
      />
      <div className="absolute w-[41.43%] top-[3925px] right-[50.83%] left-[7.74%] h-[474px] flex flex-col items-start justify-start py-0 px-2.5 box-border gap-[15px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[18px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[22px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
              <div className="self-stretch flex flex-row flex-wrap items-center justify-end">
                <div className="flex-1 relative leading-[130%]">
                  <span>
                    <b>{`Face masks   `}</b>
                  </span>
                  <span>
                    <span>
                      <span className="tracking-[0.05em]">
                        ..................................
                      </span>
                    </span>
                    <span className="tracking-[0.05em]">
                      <span className="text-3xl">.....</span>
                    </span>
                    <span className="text-lg">
                      {`from   `}
                      <span className="tracking-[0.05em]">$48.00</span>
                    </span>
                  </span>
                </div>
              </div>
              <div className="self-stretch relative text-base tracking-[0.02em] leading-[165%] font-manrope text-dimgray inline-block h-[27px] shrink-0">
                The versions have evolved over the sometimes by accident.
              </div>
            </div>
            <div className="relative box-border w-[531px] h-px opacity-[0.5] border-t-[1px] border-solid border-darkgray" />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[22px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
              <div className="self-stretch h-[29px] flex flex-row items-center justify-end">
                <div className="flex-1 relative leading-[130%]">
                  <span>
                    <b className="font-playfair-display">{`Full body massage  `}</b>
                    <span>
                      <span className="tracking-[0.05em]">
                        .........................
                      </span>
                    </span>
                  </span>
                  <span>
                    <span className="tracking-[0.05em]">
                      <span className="text-3xl">.</span>
                      <span>...</span>
                    </span>
                    <span>from</span>
                    <span className="text-3xl">{`    `}</span>
                    <span className="text-lg tracking-[0.05em]">$54.00</span>
                  </span>
                </div>
              </div>
              <div className="self-stretch relative text-base tracking-[0.02em] leading-[165%] font-manrope text-dimgray inline-block h-[27px] shrink-0">
                The versions have evolved over the sometimes by accident.
              </div>
            </div>
            <div className="relative box-border w-[531px] h-px opacity-[0.5] border-t-[1px] border-solid border-darkgray" />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[22px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
              <div className="self-stretch h-[29px] flex flex-row flex-wrap items-center justify-end">
                <div className="flex-1 relative leading-[130%]">
                  <b className="font-playfair-display">
                    <span className="text-lg">Geothermal spa</span>
                  </b>
                  <span className="text-3xl">
                    <b className="font-playfair-display">{`  `}</b>
                  </span>
                  <span>
                    <span className="text-3xl">
                      .............................
                    </span>
                    <span className="text-lg">from</span>
                    <span className="text-3xl">{`    `}</span>
                  </span>
                  <span>
                    <span className="tracking-[0.05em]">$54.00</span>
                  </span>
                </div>
              </div>
              <div className="self-stretch relative text-base tracking-[0.02em] leading-[165%] font-manrope text-dimgray inline-block h-[27px] shrink-0">
                The versions have evolved over the sometimes by accident.
              </div>
            </div>
            <div className="relative box-border w-[531px] h-px opacity-[0.5] border-t-[1px] border-solid border-darkgray" />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[22px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
              <div className="self-stretch h-[29px] flex flex-row items-center justify-end">
                <div className="flex-1 relative leading-[130%]">
                  <b className="font-playfair-display">
                    <span className="text-lg">Sauna relax</span>
                  </b>
                  <span className="text-3xl">
                    <b className="font-playfair-display">{`  `}</b>
                  </span>
                  <span>
                    <span className="text-3xl">
                      .............................
                    </span>
                    <span className="text-lg">from</span>
                    <span className="text-3xl">{`    `}</span>
                  </span>
                  <span>
                    <span className="tracking-[0.05em]">$73.00</span>
                  </span>
                </div>
              </div>
              <div className="self-stretch relative text-base tracking-[0.02em] leading-[165%] font-manrope text-dimgray">
                The versions have evolved over the sometimes by accident.
              </div>
            </div>
            <div className="relative box-border w-[531px] h-px opacity-[0.5] border-t-[1px] border-solid border-darkgray" />
          </div>
        </div>
        <Link
          className="cursor-pointer [text-decoration:none] flex flex-row items-center justify-center pt-[23px] pb-6 pr-[30px] pl-[34px] text-center text-sm text-[inherit] font-manrope border-[2px] border-solid border-slategray"
          to="/pagessingle"
        >
          <div className="relative tracking-[0.12em] leading-[125%] uppercase font-extrabold">
            GET AN APPOINTMENT
          </div>
        </Link>
      </div>
      <div className="absolute w-[38.82%] top-[3290px] right-[5.76%] left-[55.42%] h-[493px] flex flex-col items-start justify-start py-0 px-2.5 box-border gap-[15px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[18px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[22px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
              <div className="self-stretch flex flex-row flex-wrap items-center justify-end">
                <div className="flex-1 relative leading-[130%]">
                  <span>
                    <b>{`Face masks   `}</b>
                  </span>
                  <span>
                    <span>
                      <span className="tracking-[0.05em]">
                        ..................................
                      </span>
                    </span>
                    <span className="tracking-[0.05em]">
                      <span className="text-3xl">.....</span>
                    </span>
                    <span className="text-lg">
                      {`from   `}
                      <span className="tracking-[0.05em]">$48.00</span>
                    </span>
                  </span>
                </div>
              </div>
              <div className="self-stretch relative text-base tracking-[0.02em] leading-[165%] font-manrope text-dimgray inline-block h-[27px] shrink-0">
                The versions have evolved over the sometimes by accident.
              </div>
            </div>
            <div className="relative box-border w-[531px] h-px opacity-[0.5] border-t-[1px] border-solid border-darkgray" />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[22px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
              <div className="self-stretch h-[29px] flex flex-row items-center justify-end">
                <div className="flex-1 relative leading-[130%]">
                  <span>
                    <b className="font-playfair-display">{`Full body massage  `}</b>
                    <span>
                      <span className="tracking-[0.05em]">
                        .........................
                      </span>
                    </span>
                  </span>
                  <span>
                    <span className="tracking-[0.05em]">
                      <span className="text-3xl">.</span>
                      <span>...</span>
                    </span>
                    <span>from</span>
                    <span className="text-3xl">{`    `}</span>
                    <span className="text-lg tracking-[0.05em]">$54.00</span>
                  </span>
                </div>
              </div>
              <div className="self-stretch relative text-base tracking-[0.02em] leading-[165%] font-manrope text-dimgray inline-block h-[27px] shrink-0">
                The versions have evolved over the sometimes by accident.
              </div>
            </div>
            <div className="relative box-border w-[531px] h-px opacity-[0.5] border-t-[1px] border-solid border-darkgray" />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[22px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
              <div className="self-stretch h-[29px] flex flex-row flex-wrap items-center justify-end">
                <div className="flex-1 relative leading-[130%]">
                  <b className="font-playfair-display">
                    <span className="text-lg">Geothermal spa</span>
                  </b>
                  <span className="text-3xl">
                    <b className="font-playfair-display">{`  `}</b>
                  </span>
                  <span>
                    <span className="text-3xl">
                      .............................
                    </span>
                    <span className="text-lg">from</span>
                    <span className="text-3xl">{`    `}</span>
                  </span>
                  <span>
                    <span className="tracking-[0.05em]">$54.00</span>
                  </span>
                </div>
              </div>
              <div className="self-stretch relative text-base tracking-[0.02em] leading-[165%] font-manrope text-dimgray inline-block h-[27px] shrink-0">
                The versions have evolved over the sometimes by accident.
              </div>
            </div>
            <div className="relative box-border w-[531px] h-px opacity-[0.5] border-t-[1px] border-solid border-darkgray" />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[22px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
              <div className="self-stretch h-[29px] flex flex-row items-center justify-end">
                <div className="flex-1 relative leading-[130%]">
                  <b className="font-playfair-display">
                    <span className="text-lg">Sauna relax</span>
                  </b>
                  <span className="text-3xl">
                    <b className="font-playfair-display">{`  `}</b>
                  </span>
                  <span>
                    <span className="text-3xl">
                      .............................
                    </span>
                    <span className="text-lg">from</span>
                    <span className="text-3xl">{`    `}</span>
                  </span>
                  <span>
                    <span className="tracking-[0.05em]">$73.00</span>
                  </span>
                </div>
              </div>
              <div className="self-stretch relative text-base tracking-[0.02em] leading-[165%] font-manrope text-dimgray">
                The versions have evolved over the sometimes by accident.
              </div>
            </div>
            <div className="relative box-border w-[531px] h-px opacity-[0.5] border-t-[1px] border-solid border-darkgray" />
          </div>
        </div>
        <Link
          className="cursor-pointer [text-decoration:none] flex flex-row items-center justify-center pt-[23px] pb-6 pr-[30px] pl-[34px] text-center text-sm text-[inherit] font-manrope border-[2px] border-solid border-slategray"
          to="/pagessingle"
        >
          <div className="relative tracking-[0.12em] leading-[125%] uppercase font-extrabold">
            GET AN APPOINTMENT
          </div>
        </Link>
      </div>
      <div className="absolute h-[7%] w-[43.68%] top-[43.27%] right-[6.57%] bottom-[49.73%] left-[49.75%]">
        <img
          className="absolute h-[112.84%] w-[112.72%] top-[-3.21%] right-[-6.36%] bottom-[-9.63%] left-[-6.36%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/background2.svg"
        />
        <img
          className="absolute w-[100.08%] top-[0px] right-[-0.08%] left-[0%] max-w-full overflow-hidden h-[625.9px] object-cover"
          alt=""
          src="/photo3@2x.png"
        />
      </div>
    </div>
  );
};

export default Home;
