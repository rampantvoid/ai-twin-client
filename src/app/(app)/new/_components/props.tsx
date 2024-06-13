export type StepProp = {
  handleNext: () => void;
  setDetails: React.Dispatch<React.SetStateAction<Inputs>>;
  details: Inputs;
};

export type Inputs = {
  field: string;
  paymentMethod: string;
  otp: string;
};
