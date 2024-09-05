export type Answer = {
  name: string,
  title: string,
  nextQuestionUrl?: string,
}

export type Step = {
  id: string,
  url: string,
  description: string,
  additionalDescription?: string,
  type: string,
  answers: Answer[],
};

export type Steps = Step[];
