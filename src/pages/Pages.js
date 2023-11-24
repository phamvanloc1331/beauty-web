import { useEffect } from "react";
import { Link } from "react-router-dom";
import BeautyForm from "../components/BeautyForm";

const Pages = () => {
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
      className="relative [background:linear-gradient(#fff,_#fff),_#fff] w-full h-[5566px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] text-left text-lg text-gray-200 font-playfair-display"
      data-animate-on-scroll
    >
      <div className="absolute w-full top-[4294px] right-[0%] left-[0%] bg-aliceblue-200 h-[670px] flex flex-col items-center justify-center text-center text-mini text-slategray font-manrope">
        <div className="self-stretch flex flex-col items-center justify-start gap-[37px]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[14px]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[9px]">
              <div className="relative tracking-[0.1em] leading-[154.5%] uppercase font-semibold">{`Flat Discount `}</div>
              <b className="self-stretch relative text-26xl tracking-[-0.01em] leading-[130%] font-playfair-display text-gray-200">
                <p className="m-0">Claim upto 50% offer</p>
                <p className="m-0">on the most popular services...</p>
              </b>
            </div>
            <div className="self-stretch relative text-lg leading-[175%] text-dimgray">
              <p className="m-0">
                Our Retreat is not meant to be an occasional treat, but rather a
                part of your
              </p>
              <p className="m-0">
                routine that restores balance to your daily life.
              </p>
            </div>
          </div>
          <div className="self-stretch h-[145px] flex flex-row items-center justify-center text-left text-sm text-gray-200">
            <div className="bg-white flex flex-col items-start justify-start pt-[18px] px-10 pb-[19px] border-[1px] border-solid border-lightblue">
              <div className="w-52 flex flex-col items-start justify-start gap-[18px]">
                <div className="w-52 flex flex-row items-start justify-start gap-[19px]">
                  <img
                    className="relative w-[30px] h-[45px]"
                    alt=""
                    src="/pattern.svg"
                  />
                  <div className="relative leading-[150%] inline-block w-[159px] shrink-0">
                    <p className="m-0 tracking-[0.08em] uppercase font-extrabold">
                      MAIL US :
                    </p>
                    <p className="m-0 text-mini font-medium">
                      info@beautyness.com
                    </p>
                  </div>
                </div>
                <div className="w-[185px] flex flex-row items-start justify-start gap-[19px]">
                  <img
                    className="relative w-[30px] h-[45px]"
                    alt=""
                    src="/pattern.svg"
                  />
                  <div className="relative leading-[150%] inline-block w-[136px] shrink-0">
                    <p className="m-0 tracking-[0.08em] uppercase font-extrabold">
                      CALL US :
                    </p>
                    <p className="m-0 text-mini font-medium">
                      (+22) 123 4568 009
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-darkslategray-200 w-[167px] flex flex-row items-start justify-center py-3 px-[34px] box-border text-center text-mini text-white">
              <div className="w-[99px] flex flex-col items-center justify-start gap-[6px]">
                <div className="w-[99px] flex flex-row items-center justify-center gap-[6px]">
                  <div className="relative box-border w-1.5 h-px border-t-[1px] border-solid border-white" />
                  <div className="relative tracking-[0.1em] leading-[175%] uppercase font-extrabold">
                    Get Flat
                  </div>
                  <div className="relative box-border w-1.5 h-px border-t-[1px] border-solid border-white" />
                </div>
                <div className="w-[97.6px] flex flex-col items-center justify-start gap-[8px] text-lg">
                  <img
                    className="relative w-[97.6px] h-[48.8px]"
                    alt=""
                    src="/50.svg"
                  />
                  <div className="relative tracking-[0.02em] leading-[175%] font-extrabold">
                    Discount
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-[49.97%] top-[765px] right-[24.98%] left-[25.06%] flex flex-col items-center justify-start gap-[9px] text-center text-mini text-slategray font-manrope">
        <div className="relative tracking-[0.1em] leading-[154.5%] uppercase font-semibold">
          Our Services
        </div>
        <b className="self-stretch relative text-26xl tracking-[-0.01em] leading-[130%] font-playfair-display text-gray-200">
          We are Experienced in making you very Beautiful
        </b>
      </div>
      <div className="absolute w-[33.13%] top-[55.5px] right-[64.86%] left-[2.01%] flex flex-row items-center justify-start gap-[46px] text-9xl">
        <Link
          className="cursor-pointer [text-decoration:none] flex-1 h-[35px] flex flex-row items-center justify-start gap-[11px] text-[inherit]"
          to="/home"
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
      <a className="[text-decoration:none] absolute w-[46.94%] top-[48px] right-[2.71%] left-[50.35%] flex flex-row items-center justify-end gap-[32px] text-dimgray font-manrope">
        <div className="w-[340px] h-[23px] flex flex-row items-center justify-end">
          <Link
            className="cursor-pointer [text-decoration:none] relative leading-[125%] text-[inherit] flex items-center w-[84px] h-[30px] shrink-0"
            to="/home"
          >
            Home
          </Link>
          <div className="relative leading-[125%] flex items-center w-[84px] h-[30px] shrink-0 ml-[-16px]">
            Pages
          </div>
          <Link
            className="cursor-pointer [text-decoration:none] relative leading-[125%] text-[inherit] flex items-center w-[84px] h-[30px] shrink-0 ml-[-16px]"
            to="/about"
          >
            About
          </Link>
          <Link
            className="cursor-pointer [text-decoration:none] relative leading-[125%] text-[inherit] flex items-center w-16 h-8 shrink-0 ml-[-16px]"
            to="/"
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
      <img
        className="absolute w-[11.39%] top-[1542px] right-[44.51%] left-[44.1%] max-w-full overflow-hidden h-[157px]"
        alt=""
        src="/background9.svg"
      />
      <img
        className="absolute w-[11.39%] top-[2798px] right-[44.31%] left-[44.31%] max-w-full overflow-hidden h-[157px]"
        alt=""
        src="/background9.svg"
      />
      <img
        className="absolute w-[22.92%] top-[4056px] right-[38.54%] left-[38.54%] max-w-full overflow-hidden h-[103px]"
        alt=""
        src="/background10.svg"
      />
      <section className="absolute w-full top-[167px] right-[0%] left-[0%] flex flex-col items-center justify-start text-center text-mini text-white font-manrope">
        <div className="self-stretch relative h-[495px]">
          <img
            className="absolute w-full top-[0px] right-[0%] left-[0%] max-w-full overflow-hidden h-[495px] object-cover"
            alt=""
            src="/background5@2x.png"
          />
          <div className="absolute w-[45.56%] top-[118px] right-[27.22%] left-[27.22%] flex flex-col items-center justify-start gap-[32px]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
              <div className="self-stretch relative tracking-[0.1em] leading-[154.5%] uppercase font-semibold">
                Our Services
              </div>
              <b className="self-stretch relative text-36xl tracking-[-0.01em] leading-[120%] font-playfair-display">
                Well Experience Beauty at your Service
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
      <img
        className="absolute w-[46.74%] top-[1016px] right-[47.15%] left-[6.11%] max-w-full overflow-hidden h-[664px] object-cover"
        alt=""
        src="/image33@2x.png"
      />
      <div className="absolute w-[38.82%] top-[1052px] right-[6.11%] left-[55.07%] h-[493px] flex flex-col items-start justify-start py-0 px-2.5 box-border gap-[15px]">
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
      <div className="absolute w-[38.82%] top-[2287px] right-[7.08%] left-[54.1%] h-[493px] flex flex-col items-start justify-start py-0 px-2.5 box-border gap-[15px]">
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
      <div className="absolute w-[38.82%] top-[3574px] right-[6.88%] left-[54.31%] h-[493px] flex flex-col items-start justify-start py-0 px-2.5 box-border gap-[15px]">
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
      <div className="absolute w-[41.43%] top-[1697px] right-[49.4%] left-[9.17%] h-[474px] flex flex-col items-start justify-start py-0 px-2.5 box-border gap-[15px]">
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
      <div className="absolute w-[41.43%] top-[2963px] right-[48.71%] left-[9.86%] h-[474px] flex flex-col items-start justify-start py-0 px-2.5 box-border gap-[15px]">
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
      <div className="absolute h-[11.19%] w-[43.68%] top-[29.09%] right-[6.32%] bottom-[59.72%] left-[50%]">
        <img
          className="absolute h-[112.84%] w-[112.72%] top-[-3.21%] right-[-6.36%] bottom-[-9.63%] left-[-6.36%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/background2.svg"
        />
        <img
          className="absolute w-[100.08%] top-[0px] right-[-0.08%] left-[0%] max-w-full overflow-hidden h-[625.9px] object-cover"
          alt=""
          src="/photo4@2x.png"
        />
      </div>
      <img
        className="absolute h-[12.94%] w-[46.88%] top-[39.92%] right-[47.15%] bottom-[47.14%] left-[5.97%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/image34@2x.png"
      />
      <img
        className="absolute h-[12.94%] w-[46.88%] top-[51.42%] right-[5.83%] bottom-[35.64%] left-[47.29%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/image35@2x.png"
      />
      <img
        className="absolute h-[12.94%] w-[46.88%] top-[62.88%] right-[47.15%] bottom-[24.18%] left-[5.97%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/image36@2x.png"
      />
      <BeautyForm divTop="4945px" />
    </div>
  );
};

export default Pages;
