import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";

const Appointment = () => {
  return (
    <div className="absolute w-[99.79%] top-[6258px] right-[0.49%] left-[-0.28%] bg-aliceblue-100 h-[930px] flex flex-col items-center justify-center text-left text-mini text-slategray font-manrope">
      <div className="self-stretch flex flex-row items-center justify-start py-0 px-[125px] gap-[115px]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[37px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[14px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[9px]">
              <div className="relative tracking-[0.1em] leading-[154.5%] uppercase font-semibold">{`Flat Discount `}</div>
              <b className="self-stretch relative text-26xl tracking-[-0.01em] leading-[130%] font-playfair-display text-gray-200">
                <p className="m-0">Claim upto 50% off er</p>
                <p className="m-0">on ‍the most popular services...</p>
              </b>
            </div>
            <div className="self-stretch relative text-lg leading-[175%] text-dimgray inline-block h-[92px] shrink-0">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, buying to
              injected humour, or randomised words.
            </div>
          </div>
          <div className="self-stretch h-[145px] flex flex-row items-center justify-start text-sm text-gray-200">
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
        <div className="flex-1 bg-white shadow-[0px_20px_40px_rgba(42,_68,_75,_0.13)] flex flex-row items-start justify-start py-[66px] px-[75px] text-center text-sm text-white">
          <div className="flex-1 flex flex-col items-center justify-start gap-[15px]">
            <TextField
              className="[border:none] bg-[transparent] self-stretch"
              color="primary"
              label="Name"
              variant="standard"
            />
            <TextField
              className="[border:none] bg-[transparent] self-stretch"
              color="primary"
              label="Email"
              variant="standard"
            />
            <TextField
              className="[border:none] bg-[transparent] self-stretch"
              color="primary"
              label="Phone"
              variant="standard"
            />
            <TextField
              className="[border:none] bg-[transparent] self-stretch"
              color="primary"
              label="Service You Need"
              variant="standard"
            />
            <TextField
              className="self-stretch relative"
              color="primary"
              label="Any Note For Us"
              variant="standard"
              multiline
            />
            <div className="bg-slategray flex flex-row items-center justify-center py-[23px] px-[109px]">
              <div className="relative tracking-[0.12em] leading-[125%] uppercase font-extrabold">
                GET AN APPOINTMENT
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
