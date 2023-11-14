import { FunctionComponent } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";

const AppointmentForm1: FunctionComponent = () => {
  return (
    <div className="absolute w-[99.65%] top-[2378px] right-[0.21%] left-[0.14%] bg-aliceblue-200 h-[943px] flex flex-col items-center justify-end py-32 px-0 box-border text-center text-mini text-lightslategray font-manrope">
      <div className="self-stretch flex flex-col items-center justify-start py-0 px-[250px] gap-[48px]">
        <div className="self-stretch flex flex-col items-center justify-start py-0 px-[100px] gap-[20px]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[2px]">
            <div className="relative tracking-[0.1em] leading-[154.5%] uppercase font-semibold">
              SCHEDULE YOUR PRESENCE
            </div>
            <b className="self-stretch relative text-26xl tracking-[-0.01em] leading-[130%] font-playfair-display text-gray-200">
              Make an Appointment
            </b>
          </div>
          <div className="self-stretch relative text-lg leading-[175%] text-dimgray inline-block h-14 shrink-0">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </div>
        </div>
        <div className="self-stretch bg-white shadow-[0px_20px_40px_rgba(42,_68,_75,_0.13)] flex flex-col items-center justify-start py-[83px] px-[100px] text-base text-white">
          <div className="self-stretch flex flex-col items-center justify-start gap-[35px]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[15px]">
              <div className="self-stretch flex flex-row items-start justify-center gap-[10px]">
                <TextField
                  className="[border:none] bg-[transparent] flex-1"
                  color="primary"
                  label="Name"
                  variant="standard"
                />
                <TextField
                  className="[border:none] bg-[transparent] flex-1"
                  color="primary"
                  label="Email"
                  variant="standard"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-center gap-[10px]">
                <TextField
                  className="[border:none] bg-[transparent] flex-1"
                  color="primary"
                  label="Phone"
                  variant="standard"
                />
                <TextField
                  className="[border:none] bg-[transparent] flex-1 relative"
                  color="primary"
                  label="Service You Need"
                  variant="standard"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-center gap-[10px]">
                <TextField
                  className="[border:none] bg-[transparent] flex-1"
                  color="primary"
                  label="Any Note For Us"
                  variant="standard"
                />
                <Button className="flex-1" color="primary" variant="contained">
                  GET AN APPOINTMENT
                </Button>
              </div>
            </div>
            <div className="self-stretch relative leading-[160%] inline-block h-[53px] shrink-0 [-webkit-text-stroke:1px_#5c8692]">
              <span>{` Your personal information will not be passed on to any third parties. please read our `}</span>
              <b className="[text-decoration:underline]">Privacy Policy</b>
              <span>.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm1;
