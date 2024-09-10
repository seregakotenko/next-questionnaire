export type Answer = {
  value: string;
  title: string;
  nextQuestionId?: string;
  nextUrl?: string; // link to the INFO banner
};

export type ContentType = {
  title?: string;
  text?: string;
  next?: string;
  prev?: string;
  answers?: Answer[];
};

export type AttributeType = {
  next?: string;
  prev?: string;
  content: ContentType;
};

export enum ScreenType {
  QUESTION = 'QUESTION',
  INFORM = 'INFORM',
}

export type Screen = {
  id: string;
  index: number;
  showBackButton: boolean;
  url: string;
  description: string;
  additionalDescription?: string;
  type: ScreenType;
  attributes: AttributeType;
};

export type Flow = {
  id: string;
  name: string;
  initialScreen: string;
  screens: Screen[];
};

export type ConfigType = {
  version: string;
  name: string;
  link: string;
  flow: Flow;
};
