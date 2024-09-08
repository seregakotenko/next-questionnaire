export type Answer = {
  name: string,
  title: string,
  nextQuestionUrl?: string,
}

export type Screen = {
  id: string,
  index: number,
  url: string,
  description: string,
  additionalDescription?: string,
  type: string,
  answers: Answer[],
};

export type Flow = {
  id: string,
  name: string,
  initialScreen: string,
  screens: Screen[],
};


export type ConfigType = {
  version: string;
  name: string;
  link: string;
  flow: Flow;
}
