import { useEffect } from "react";
import { Link } from "react-router-dom";
import Follow from "../components/Follow";
import AttitudePersonalityContainer1 from "../components/AttitudePersonalityContainer1";
import Content from "../components/Content";
import Component from "../components/Component";
import Testimonials from "../components/Testimonials";
import BeautyForm from "../components/BeautyForm";

const About = () => {
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
      className="relative [background:linear-gradient(#fff,_#fff),_#fff] w-full h-[6091px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] text-center text-mini text-slategray font-manrope"
      data-animate-on-scroll
    >
      <Follow />
      <AttitudePersonalityContainer1 />
      <Content />
      <div className="absolute w-[89.86%] top-[2292px] right-[5.21%] left-[4.93%] flex flex-col items-center justify-start py-0 px-[250px] box-border gap-[9px]">
        <div className="relative tracking-[0.1em] leading-[154.5%] uppercase font-semibold">
          Meet our Experts
        </div>
        <b className="self-stretch relative text-26xl tracking-[-0.01em] leading-[130%] font-playfair-display text-gray-200">
          The amazing women behind Beautyness
        </b>
      </div>
      <Component
        image="/image23@2x.png"
        sherlinDCruz="Sherlin D’Cruz"
        oIP1="/oip-12@2x.png"
        download1="/download-12@2x.png"
        oIP21="/oip-2-12@2x.png"
      />
      <Component
        image="/image24@2x.png"
        sherlinDCruz="Maria Sharapova"
        oIP1="/oip-13@2x.png"
        download1="/download-13@2x.png"
        oIP21="/oip-2-13@2x.png"
        propRight="36.21%"
        propLeft="35.92%"
      />
      <Component
        image="/image25@2x.png"
        sherlinDCruz="Angeline Jenifer"
        oIP1="/oip-14@2x.png"
        download1="/download-14@2x.png"
        oIP21="/oip-2-14@2x.png"
        propRight="5.21%"
        propLeft="66.92%"
      />
      <Link
        className="cursor-pointer [text-decoration:none] absolute w-[15.69%] top-[3082px] right-[42.29%] left-[42.01%] bg-slategray flex flex-row items-center justify-center pt-[23px] px-[72px] pb-6 box-border text-sm text-white"
        to="/team"
      >
        <div className="relative tracking-[0.12em] leading-[125%] uppercase font-extrabold">
          ABOUT US
        </div>
      </Link>
      <div className="absolute w-[32.99%] top-[55.5px] right-[65%] left-[2.01%] flex flex-row items-center justify-start gap-[46px] text-left text-9xl text-gray-200 font-playfair-display">
        <Link
          className="cursor-pointer [text-decoration:none] flex-1 h-[35px] flex flex-row items-center justify-start gap-[11px] text-[inherit]"
          to="/home"
        >
          <img className="relative w-[33px] h-[33px]" alt="" src="/logo1.svg" />
          <b className="relative leading-[125%]">Beautyness</b>
        </Link>
        <div className="w-[265px] h-[23px] flex flex-row items-center justify-start gap-[12px] text-lg font-manrope">
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
      <a className="[text-decoration:none] absolute w-[46.74%] top-[48px] right-[2.71%] left-[50.56%] flex flex-row items-center justify-end gap-[32px] text-left text-lg text-dimgray">
        <div className="w-[351px] h-[23px] flex flex-row items-center justify-end">
          <Link
            className="cursor-pointer [text-decoration:none] relative leading-[125%] text-[inherit] flex items-center w-[84px] h-[30px] shrink-0"
            to="/home"
          >
            Home
          </Link>
          <Link
            className="cursor-pointer [text-decoration:none] relative leading-[125%] text-[inherit] flex items-center w-[84px] h-[30px] shrink-0 ml-[-16px]"
            to="/pages"
          >
            Pages
          </Link>
          <div className="relative leading-[125%] flex items-center w-[84px] h-[30px] shrink-0 ml-[-16px]">
            About
          </div>
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
      <section className="absolute w-full top-[167px] right-[0%] left-[0%] flex flex-col items-center justify-start text-center text-mini text-white font-manrope">
        <div className="self-stretch relative h-[495px]">
          <img
            className="absolute top-[0px] left-[0px] w-[1440px] h-[495px] object-cover"
            alt=""
            src="/background7@2x.png"
          />
          <div className="absolute w-[44.44%] top-[118px] right-[27.78%] left-[27.78%] flex flex-col items-center justify-start gap-[32px]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
              <div className="self-stretch relative tracking-[0.1em] leading-[154.5%] uppercase font-semibold">
                SHORT STORY ABOUT US
              </div>
              <b className="self-stretch relative text-36xl tracking-[-0.01em] leading-[120%] font-playfair-display">
                The big story behind, our beautyness center
              </b>
            </div>
            <div className="bg-slategray flex flex-row items-center justify-center pt-[23px] px-9 pb-6 text-sm">
              <div className="relative tracking-[0.12em] leading-[125%] uppercase font-extrabold">
                Make a reservation
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonials propTop="3322px" />
      <BeautyForm divTop="5470px" />
    </div>
  );
};

export default About;
