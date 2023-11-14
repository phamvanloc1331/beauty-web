import { FunctionComponent, useEffect } from "react";
import { Link } from "react-router-dom";
import AppointmentForm1 from "../components/AppointmentForm1";
import MembershipCard from "../components/MembershipCard";
import ServiceAboutContainer1 from "../components/ServiceAboutContainer1";
import Banner from "../components/Banner";
import BeautyForm from "../components/BeautyForm";

const PagesSingle: FunctionComponent = () => {
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
      className="relative [background:linear-gradient(#fff,_#fff),_#fff] w-full h-[4821px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] text-left text-9xl text-gray-200 font-playfair-display"
      data-animate-on-scroll
    >
      <AppointmentForm1 />
      <MembershipCard />
      <div className="absolute w-[33.47%] top-[55.5px] right-[64.51%] left-[2.01%] flex flex-row items-center justify-start gap-[46px]">
        <Link
          className="cursor-pointer [text-decoration:none] flex-1 h-[35px] flex flex-row items-center justify-start gap-[11px] text-[inherit]"
          to="/"
        >
          <img className="relative w-[33px] h-[33px]" alt="" src="/logo1.svg" />
          <b className="relative leading-[125%]">Beautyness</b>
        </Link>
        <div className="w-[264px] h-[23px] flex flex-row items-center justify-start gap-[12px] text-lg font-manrope">
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
      <a className="[text-decoration:none] absolute w-[47.5%] top-[48px] right-[2.71%] left-[49.79%] flex flex-row items-center justify-end gap-[32px] text-lg text-dimgray font-manrope">
        <div className="w-[350px] h-[23px] flex flex-row items-center justify-end">
          <Link
            className="cursor-pointer [text-decoration:none] relative leading-[125%] text-[inherit] flex items-center w-[84px] h-[30px] shrink-0"
            to="/"
          >
            Home
          </Link>
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
            src="/oip-11@2x.png"
          />
          <img
            className="relative w-[22px] h-[21px] object-cover"
            alt=""
            src="/download-11@2x.png"
          />
          <img
            className="relative w-[21px] h-5 object-cover"
            alt=""
            src="/oip-2-11@2x.png"
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
      <ServiceAboutContainer1 />
      <div className="absolute w-[45.76%] top-[3392px] right-[26.11%] left-[28.13%] flex flex-col items-center justify-start gap-[9px] text-center text-mini text-slategray font-manrope">
        <div className="relative tracking-[0.1em] leading-[154.5%] uppercase font-semibold">
          Our Awesome Benefits
        </div>
        <b className="self-stretch relative text-26xl tracking-[-0.01em] leading-[130%] font-playfair-display text-gray-200">
          Actually what you’ll get from
        </b>
      </div>
      <div className="absolute w-[100.07%] top-[3553px] right-[0.21%] left-[-0.28%] flex flex-col items-center justify-start gap-[35px] text-7xl">
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
      <Banner />
      <BeautyForm divTop="4200px" />
    </div>
  );
};

export default PagesSingle;
