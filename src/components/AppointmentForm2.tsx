import { FunctionComponent } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";

const AppointmentForm2: FunctionComponent = () => {
  return (
    <div className="absolute w-full top-[1490px] right-[0%] left-[0%] bg-aliceblue-200 h-[1183px] flex flex-col items-center justify-center text-center text-mini text-lightslategray font-manrope">
      <div className="self-stretch flex flex-col items-center justify-start py-0 px-[250px] gap-[65px]">
        <div className="self-stretch h-[209px] flex flex-col items-center justify-start py-0 px-[250px] box-border gap-[20px]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[2px]">
            <div className="relative tracking-[0.1em] leading-[154.5%] uppercase font-semibold">
              SCHEDULE YOUR PRESENCE
            </div>
            <b className="relative text-26xl tracking-[-0.01em] leading-[130%] inline-block font-playfair-display text-gray-200 w-[453px]">
              Make an Appointment
            </b>
          </div>
          <div className="self-stretch relative text-lg leading-[175%] text-dimgray inline-block h-14 shrink-0">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </div>
        </div>
        <div className="self-stretch bg-white shadow-[0px_34px_50px_rgba(68,_46,_26,_0.12)] flex flex-col items-center justify-start py-[98px] px-[100px] text-sm text-white">
          <div className="self-stretch flex flex-col items-center justify-start gap-[15px]">
            <TextField
              className="[border:none] bg-[transparent] self-stretch"
              color="primary"
              label="Name"
              variant="filled"
            />
            <TextField
              className="[border:none] bg-[transparent] self-stretch"
              color="primary"
              label="Email"
              variant="filled"
            />
            <TextField
              className="[border:none] bg-[transparent] self-stretch"
              color="primary"
              label="Phone"
              variant="filled"
            />
            <TextField
              className="[border:none] bg-[transparent] self-stretch"
              color="primary"
              label="Service You Need"
              variant="filled"
            />
            <TextField
              className="self-stretch relative"
              color="primary"
              label="Any Note For Us"
              variant="standard"
              multiline
            />
            <div className="self-stretch bg-lightslategray flex flex-row items-end justify-center pt-[23px] px-[307px] pb-6">
              <div className="relative tracking-[0.12em] leading-[125%] uppercase font-extrabold">
                Make An Appointment
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm2;
