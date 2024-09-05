import {Step, Steps} from "@/types/api/steps";

export type StepsResponseData = {
  data?: Steps;
  error?: string,
};

export type StepResponseData = {
  data?: Step;
  error?: string,
};
