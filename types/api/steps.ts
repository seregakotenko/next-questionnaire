export type Step = {
  id: string,
  name: string,
  order: number,
  condition?: StepCondition,
};

export type StepCondition = {
  variations?: {
    step: string, // Consider to use "flow" instead of "step"
  }
}

export type Steps = Step[];
