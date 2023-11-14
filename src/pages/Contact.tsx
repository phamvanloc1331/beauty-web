import { FunctionComponent, useEffect } from "react";
import { Link } from "react-router-dom";
import AppointmentForm2 from "../components/AppointmentForm2";
import Contact1 from "../components/Contact1";
import BeautyForm from "../components/BeautyForm";

const Contact: FunctionComponent = () => {
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
      className="relative [background:linear-gradient(#fff,_#fff),_#fff] w-full h-[3288px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] text-left text-9xl text-gray-200 font-playfair-display"
      data-animate-on-scroll
    >
      <AppointmentForm2 />
      <Contact1 />
      <section className="absolute top-[0px] left-[calc(50%_-_960px)] w-[1920px]" />
      <div className="absolute w-[32.99%] top-[55.5px] right-[65%] left-[2.01%] flex flex-row items-center justify-start gap-[46px]">
        <Link
          className="cursor-pointer [text-decoration:none] flex-1 h-[35px] flex flex-row items-center justify-start gap-[11px] text-[inherit]"
          to="/"
        >
          <img className="relative w-[33px] h-[33px]" alt="" src="/logo1.svg" />
          <b className="relative leading-[125%]">Beautyness</b>
        </Link>
        <div className="w-[261px] h-[23px] flex flex-row items-center justify-start gap-[12px] text-lg font-manrope">
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
      <a className="[text-decoration:none] absolute w-[48.47%] top-[48px] right-[2.71%] left-[48.82%] flex flex-row items-center justify-end gap-[32px] text-lg text-dimgray font-manrope">
        <div className="w-[364px] h-[23px] flex flex-row items-center justify-end">
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
          <div className="relative leading-[125%] flex items-center w-20 h-[30px] shrink-0 ml-[-16px]">
            Contact
          </div>
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
      <section className="absolute w-full top-[167px] right-[0%] left-[0%] flex flex-col items-center justify-start text-center text-mini text-white font-manrope">
        <div className="self-stretch relative h-[495px]">
          <img
            className="absolute top-[0px] left-[0px] w-[1440px] h-[495px] object-cover"
            alt=""
            src="/background5@2x.png"
          />
          <div className="absolute w-[42.15%] top-[199px] right-[28.89%] left-[28.96%] flex flex-col items-center justify-start">
            <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
              <div className="self-stretch relative tracking-[0.1em] leading-[154.5%] uppercase font-semibold">
                GET IN TOUCH WITH US
              </div>
              <b className="self-stretch relative text-36xl tracking-[-0.01em] leading-[120%] font-playfair-display">
                <p className="m-0">We Are Ready To Assist</p>
                <p className="m-0">You In 24x7</p>
              </b>
            </div>
          </div>
        </div>
      </section>
      <BeautyForm divTop="2667px" />
    </div>
  );
};

export default Contact;
