import { useEffect } from "react";
import { Link } from "react-router-dom";
import CollectionCard1 from "../components/CollectionCard1";
import BeautyForm from "../components/BeautyForm";

const BlogSingle = () => {
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
      className="relative bg-white w-full h-[4356px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] text-left text-9xl text-gray-200 font-playfair-display"
      data-animate-on-scroll
    >
      <div className="absolute w-[33.4%] top-[55.5px] right-[64.58%] left-[2.01%] flex flex-row items-center justify-start gap-[46px]">
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
      <a className="[text-decoration:none] absolute w-[46.94%] top-[48px] right-[2.71%] left-[50.35%] flex flex-row items-center justify-end gap-[32px] text-lg text-dimgray font-manrope">
        <div className="w-[338px] h-[27px] flex flex-row items-center justify-end">
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
          <div className="self-stretch flex flex-row items-center justify-center gap-[12px]">
            <img
              className="relative w-[15.5px] h-[17px]"
              alt=""
              src="/icon4.svg"
            />
            <b className="relative tracking-[0.1em] leading-[125%] uppercase">
              RESERVATION
            </b>
          </div>
        </div>
      </a>
      <section className="absolute w-full top-[167px] right-[0%] left-[0%] flex flex-col items-center justify-start text-center text-mini text-white font-manrope">
        <div className="self-stretch relative h-[625px]">
          <img
            className="absolute top-[0px] left-[0px] w-[1440px] h-[625px] object-cover"
            alt=""
            src="/background3@2x.png"
          />
          <div className="absolute w-[59.38%] top-[149px] right-[20.28%] left-[20.35%] flex flex-col items-center justify-start">
            <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
              <div className="self-stretch relative tracking-[0.1em] leading-[154.5%] uppercase font-semibold">{`By Jessica Smith  /  Beauty & Wellness`}</div>
              <b className="self-stretch relative text-36xl tracking-[-0.01em] leading-[120%] font-playfair-display">{`Certified Health Professionals & Community Medicine`}</b>
            </div>
          </div>
        </div>
      </section>
      <div className="absolute w-[99.31%] top-[571px] right-[0.35%] left-[0.35%] h-[2939px] flex flex-col items-start justify-start py-0 px-[200px] box-border gap-[50px] text-xl">
        <img
          className="self-stretch relative max-w-full overflow-hidden h-[872px] shrink-0 object-cover"
          alt=""
          src="/image8@2x.png"
        />
        <div className="self-stretch h-[2149px] flex flex-row items-start justify-start gap-[94px]">
          <div className="flex-1 bg-azure flex flex-row items-start justify-start py-[39px] px-[34px] border-[5px] border-solid border-lightslategray">
            <div className="flex-1 flex flex-col items-start justify-start gap-[27px]">
              <div className="self-stretch flex flex-row items-center justify-start gap-[24px]">
                <img
                  className="relative w-20 h-20 object-cover"
                  alt=""
                  src="/image9@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <b className="self-stretch relative tracking-[-0.01em] leading-[160%]">
                      Author - Chris Jericho
                    </b>
                    <div className="self-stretch relative text-base tracking-[0.02em] leading-[154.5%] font-manrope text-black mt-[-3px]">{`Chairman & Director`}</div>
                  </div>
                  <div className="bg-lightslategray w-[154px] flex flex-row items-center justify-center py-1 px-[13px] box-border text-center text-smi text-white font-manrope">
                    <b className="relative tracking-[0.06em] leading-[125%] uppercase">
                      BEAUTY HEALTH
                    </b>
                  </div>
                </div>
              </div>
              <div className="self-stretch relative text-lg tracking-[0.02em] leading-[155%] font-manrope text-dimgray">
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything embarrassing hidden in the middle of
                text. All the Lorem Ipsum generators on the Internet tend tools
                that generator on the Internet.
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[15px]">
                <b className="relative tracking-[-0.01em] leading-[160%] inline-block w-[130px] shrink-0">
                  Share us on :
                </b>
                <div className="flex-1 flex flex-row items-center justify-start gap-[30px]">
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
              </div>
            </div>
          </div>
          <CollectionCard1 />
        </div>
      </div>
      <BeautyForm divTop="3735px" />
    </div>
  );
};

export default BlogSingle;
