import { KeyboardEvent, useRef, useState } from "react";

type Props = {
  onChange: (otp: string) => void;
};

export const Otp = (props: Props) => {
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const otpBoxReference = useRef<(HTMLInputElement | null)[]>([]);

  function handleChange(value: string, index: number) {
    let newArr = [...otp];
    newArr[index] = value;
    setOtp(newArr);
    props.onChange(newArr.join(""));

    if (value && index < 6 - 1) {
      otpBoxReference.current[index + 1]?.focus();
    }
  }

  function handleBackspaceAndEnter(
    e: KeyboardEvent<HTMLInputElement>,
    index: number
  ) {
    // @ts-expect-error
    if (e.key === "Backspace" && !e.target?.value && index > 0) {
      otpBoxReference.current[index - 1]?.focus();
    }
    // @ts-expect-error
    if (e.key === "Enter" && e.target?.value && index < 6 - 1) {
      otpBoxReference.current[index + 1]?.focus();
    }
  }

  return (
    <div id="otp" className="flex flex-row justify-center text-center px-2">
      {otp.map((digit, index) => (
        <input
          key={index}
          className="text-dark mr-3 border h-16 w-16 text-center form-control rounded-[16px] bg-[#E8E8E8] opacity-95 outline-none focus:outline-blue-500 focus:opacity-100 transition-all ease-in-out"
          type="text"
          value={digit}
          minLength={1}
          onKeyUp={(e) => handleBackspaceAndEnter(e, index)}
          maxLength={1}
          onChange={(e) => handleChange(e.target.value, index)}
          required
          autoComplete="off"
          ref={(reference) => {
            otpBoxReference.current[index] = reference;
          }}
        />
      ))}
    </div>
  );
};
