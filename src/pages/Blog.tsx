import { FunctionComponent, useEffect } from "react";
import { Link } from "react-router-dom";
import BeautySpaCard from "../components/BeautySpaCard";

const Blog: FunctionComponent = () => {
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
      className="relative [background:linear-gradient(#fff,_#fff),_#fff] w-full h-[2637px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] text-left text-9xl text-gray-200 font-playfair-display"
      data-animate-on-scroll
    >
      <BeautySpaCard />
      <div className="absolute w-[32.85%] top-[55.5px] right-[65.14%] left-[2.01%] flex flex-row items-center justify-start gap-[46px]">
        <Link
          className="cursor-pointer [text-decoration:none] flex-1 h-[35px] flex flex-row items-center justify-start gap-[11px] text-[inherit]"
          to="/"
        >
          <img className="relative w-[33px] h-[33px]" alt="" src="/logo1.svg" />
          <b className="relative leading-[125%]">Beautyness</b>
        </Link>
        <div className="w-[260px] h-[23px] flex flex-row items-center justify-start gap-[12px] text-lg font-manrope">
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
      <a className="[text-decoration:none] absolute w-[47.15%] top-[48px] right-[2.71%] left-[50.14%] flex flex-row items-center justify-end gap-[32px] text-lg text-dimgray font-manrope">
        <div className="w-[339px] h-[23px] flex flex-row items-center justify-end">
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
          <div className="relative leading-[125%] flex items-center w-16 h-8 shrink-0 ml-[-16px]">
            Blog
          </div>
          <Link
            className="cursor-pointer [text-decoration:none] relative leading-[125%] text-[inherit] flex items-center w-20 h-[30px] shrink-0 ml-[-16px]"
            to="/contact"
          >
            Contact
          </Link>
        </div>
        <div className="w-[117px] flex flex-row items-center justify-end gap-[30px]">
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
        <div className="flex-1 bg-lightslategray flex flex-col items-center justify-center py-4 px-[33px] text-center text-sm text-white">
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
      <section className="absolute w-full top-[167px] right-[0%] left-[0%]" />
      <section className="absolute w-full top-[167px] right-[0%] left-[0%] flex flex-col items-center justify-start text-center text-mini text-white font-manrope">
        <div className="self-stretch relative h-[356px]">
          <img
            className="absolute top-[0px] left-[0px] w-[1440px] h-[356px] object-cover"
            alt=""
            src="/background4@2x.png"
          />
          <div className="absolute w-[33.81%] top-[130px] right-[33.07%] left-[33.13%] flex flex-col items-center justify-start">
            <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
              <div className="self-stretch relative tracking-[0.1em] leading-[154.5%] uppercase font-semibold">
                GET IN TOUCH WITH US
              </div>
              <b className="self-stretch relative text-36xl tracking-[-0.01em] leading-[120%] font-playfair-display">{`Articles & News`}</b>
            </div>
          </div>
        </div>
      </section>
      <div className="absolute w-full top-[2016px] right-[0.14%] left-[-0.14%] h-[621px] flex flex-col items-center justify-start text-21xl text-white">
        <div className="self-stretch bg-darkslategray-200 h-[560px] flex flex-col items-center justify-center">
          <div className="self-stretch flex flex-col items-start justify-start py-0 px-[100px] gap-[52px]">
            <div className="self-stretch flex flex-row items-center justify-start gap-[651px]">
              <div className="flex-1 h-[65px] flex flex-row items-center justify-start gap-[16px]">
                <img
                  className="relative w-[65px] h-[65px]"
                  alt=""
                  src="/logo.svg"
                />
                <b className="relative tracking-[0.02em] leading-[125%]">
                  Beautyness
                </b>
              </div>
              <div className="flex-1 flex flex-row items-center justify-end gap-[10px]">
                <div className="box-border w-[55px] h-[55px] flex flex-col items-center justify-center border-[2px] border-solid border-slategray">
                  <img
                    className="relative w-5 h-[26px] object-cover"
                    alt=""
                    src="/z4880570784943-8640932773ae999d9139a3e2f80eb04c-1@2x.png"
                  />
                </div>
                <div className="box-border w-[55px] h-[55px] flex flex-col items-end justify-center py-0 px-[11px] border-[2px] border-solid border-slategray">
                  <img
                    className="relative w-[30px] h-[31px] object-cover"
                    alt=""
                    src="/z4880564138072-71550010f4c3a53af5d94f86e1039f43-1@2x.png"
                  />
                </div>
                <div className="box-border w-[55px] h-[55px] flex flex-col items-end justify-start py-[15px] px-[11px] border-[2px] border-solid border-slategray">
                  <img
                    className="relative w-[31px] h-8 object-cover"
                    alt=""
                    src="/z4880587159753-59ffb54e7aa733495feae13e1b2b0603-1@2x.png"
                  />
                </div>
                <div className="box-border w-[55px] h-[55px] flex flex-col items-center justify-start py-[15px] px-0 border-[2px] border-solid border-slategray">
                  <img
                    className="relative w-6 h-[26px] object-cover"
                    alt=""
                    src="/z4880571960074-a2b801e85fd9624d1d62070e575ef553-1@2x.png"
                  />
                </div>
              </div>
            </div>
            <img
              className="relative w-[1200px] h-0.5 opacity-[0.15]"
              alt=""
              src="/line.svg"
            />
            <div className="self-stretch flex flex-row items-start justify-start gap-[129px] text-3xl">
              <div className="flex-1 flex flex-col items-start justify-start gap-[21px]">
                <b className="self-stretch relative leading-[140%]">Explore</b>
                <div className="self-stretch relative text-mid tracking-[-0.01em] leading-[200%] font-medium font-manrope inline-block h-[206px] shrink-0">
                  <p className="m-0">Home</p>
                  <p className="m-0">About Us</p>
                  <p className="m-0">Services</p>
                  <p className="m-0">Appointments</p>
                  <p className="m-0">Blog</p>
                  <p className="m-0">Contact Us</p>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[21px]">
                <b className="self-stretch relative leading-[140%]">
                  Utility Pages
                </b>
                <div className="self-stretch relative text-mid tracking-[-0.01em] leading-[200%] font-medium font-manrope">
                  <p className="m-0">Start here</p>
                  <p className="m-0">Style guide</p>
                  <p className="m-0">404 not found</p>
                  <p className="m-0">Password protected</p>
                  <p className="m-0">Licenses</p>
                  <p className="m-0">Changelog</p>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[21px]">
                <b className="self-stretch relative leading-[140%]">
                  Keep in Touch
                </b>
                <div className="self-stretch flex flex-col items-start justify-start gap-[14px] text-mid font-manrope">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[14px]">
                    <b className="relative tracking-[-0.01em] leading-[150%]">
                      Address :
                    </b>
                    <div className="flex-1 relative tracking-[-0.01em] leading-[150%] font-medium inline-block h-[63px]">
                      24A Kingston St, Los Vegas NC , USA.
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[47px]">
                    <b className="relative tracking-[-0.01em] leading-[150%]">
                      Mail :
                    </b>
                    <div className="flex-1 relative tracking-[-0.01em] leading-[170%] font-medium">
                      support@doctors.com
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[29px]">
                    <b className="relative tracking-[-0.01em] leading-[150%]">
                      Phone :
                    </b>
                    <div className="flex-1 relative tracking-[-0.01em] leading-[170%] font-medium inline-block h-[31px]">
                      (+22) 123 - 4567 - 900
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[21px]">
                <b className="self-stretch relative leading-[140%]">
                  Working Hours
                </b>
                <div className="self-stretch relative text-mid tracking-[-0.01em] leading-[200%] font-medium font-manrope">
                  <p className="m-0">Mon to Fri: 7am - 6pm</p>
                  <p className="m-0">Sat: 9am - 7pm</p>
                  <p className="m-0">Sun: 9am - 6pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-gray-100 h-[61px] flex flex-col items-center justify-end py-[19px] px-0 box-border text-center text-mini font-heebo">
          <div className="self-stretch relative tracking-[-0.01em] leading-[200%]">
            <span></span>
            <span className="text-lg font-manrope">
              <span className="font-dm-sans">{` Copyright 2021. `}</span>
              <span>Drafted by Victor Themes.</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
