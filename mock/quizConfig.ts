import { ConfigType, Screen } from '@/types/api/config';

export const screens: Screen[] = [
  {
    id: 'gender-id',
    url: 'gender',
    index: 1,
    showBackButton: false,
    description: 'Select your gender:',
    type: 'text',
    answers: [
      {
        value: 'male',
        title: 'Male',
        nextQuestionUrl: 'relationship-status',
      },
      {
        value: 'female',
        title: 'Female',
        nextQuestionUrl: 'relationship-status',
      },
    ],
  },
  {
    id: 'relationship-status-id',
    url: 'relationship-status',
    index: 2,
    showBackButton: true,
    type: 'text',
    description: 'So we can get to know you better, tell us about your relationship status.',
    answers: [
      {
        value: 'single',
        title: 'Single',
        nextQuestionUrl: 'single-parent',
      },
      {
        value: 'in-relationship',
        title: 'In a relationship',
        nextQuestionUrl: 'parent',
      },
    ],
  },
  {
    id: 'single-parent-id',
    url: 'single-parent',
    index: 3,
    showBackButton: true,
    type: 'text',
    description: 'Are you single parent?',
    answers: [
      {
        value: 'yes',
        title: 'Yes',
        nextQuestionUrl: 'in-a-relationship-problem',
      },
      {
        value: 'no',
        title: 'No',
        nextQuestionUrl: 'in-a-relationship-problem',
      },
    ],
  },
  {
    id: 'parent-id',
    url: 'parent',
    index: 4,
    showBackButton: true,
    type: 'text',
    description: 'Are you parent?',
    answers: [
      {
        value: 'yes',
        title: 'Yes',
        nextQuestionUrl: 'single-problem',
      },
      {
        value: 'no',
        title: 'No',
        nextQuestionUrl: 'single-problem',
      },
    ],
  },
  {
    id: 'single-problem-id',
    url: 'single-problem',
    index: 5,
    showBackButton: true,
    type: 'text',
    description:
      'Single {gender} {who have children (if have children)} need a slightly different approach to find their perfect partner. But first, how did you fell in your last relationship?',
    answers: [
      {
        value: 'unhappy',
        title: 'I was unhappy with low things were going in my relationship',
        nextQuestionUrl: 'partner-introvert-or-extravert',
      },
      {
        value: 'partially-unhappy',
        title: 'I was unhappy with parts of my relationship, but some thing were working',
        nextQuestionUrl: 'partner-introvert-or-extravert',
      },
      {
        value: 'happy',
        title: 'I was generally happy with my relationship',
        nextQuestionUrl: 'partner-introvert-or-extravert',
      },
      {
        value: 'had-no-relationship',
        title: "I've never been in a relationship",
        nextQuestionUrl: 'partner-introvert-or-extravert',
      },
    ],
  },
  {
    id: 'partner-introvert-or-extravert-id',
    url: 'partner-introvert-or-extravert',
    index: 6,
    showBackButton: true,
    type: 'text',
    description: 'Is your partner an introvert or extravert?',
    answers: [
      {
        value: 'introvert',
        title: 'Introvert',
        nextQuestionUrl: 'partner-gender',
      },
      {
        value: 'extravert',
        title: 'Extravert',
        nextQuestionUrl: 'partner-gender',
      },
      {
        value: 'both',
        title: 'A bit of both',
        nextQuestionUrl: 'partner-gender',
      },
    ],
  },
  {
    id: 'partner-gender-id',
    url: 'partner-gender',
    index: 7,
    showBackButton: true,
    description: "Select your partner's gender:",
    type: 'text',
    answers: [
      {
        value: 'male',
        title: 'Male',
        nextQuestionUrl: 'partner-priority',
      },
      {
        value: 'female',
        title: 'Female',
        nextQuestionUrl: 'partner-priority',
      },
    ],
  },
  {
    id: 'partner-priority-id',
    url: 'partner-priority',
    index: 8,
    showBackButton: true,
    description: 'Do you agree with the statement below?',
    additionalDescription: '"My partner and I make sex a priority in our relationship"',
    type: 'text',
    answers: [
      {
        value: 'strongly-agree',
        title: 'Strongly agree',
        nextQuestionUrl: 'think-about-relationship-goals',
      },
      {
        value: 'agree',
        title: 'Agree',
        nextQuestionUrl: 'think-about-relationship-goals',
      },
      {
        value: 'neutral',
        title: 'Neutral',
        nextQuestionUrl: 'think-about-relationship-goals',
      },
      {
        value: 'disagree',
        title: 'Disagree',
        nextQuestionUrl: 'think-about-relationship-goals',
      },
      {
        value: 'strongly-agree',
        title: 'Strongly agree',
        nextQuestionUrl: 'think-about-relationship-goals',
      },
    ],
  },
  {
    id: 'think-about-relationship-goals-id',
    url: 'think-about-relationship-goals',
    index: 9,
    showBackButton: true,
    description: 'When you think about your relationship goals, you feel...?',
    type: 'text',
    answers: [
      {
        value: 'optimistic',
        title: 'Optimistic! They are totally doable, with some guidance.',
        nextQuestionUrl: 'relationship-about-us',
      },
      {
        value: 'cautious',
        title: "Cautious. I've struggled before, but I'm hopeful.",
        nextQuestionUrl: 'relationship-about-us',
      },
      {
        value: 'anxious',
        title: "I'm feeling a little anxious, honestly.",
        nextQuestionUrl: 'relationship-about-us',
      },
    ],
  },
  {
    id: 'in-a-relationship-problem-id',
    url: 'in-a-relationship-problem',
    index: 10,
    showBackButton: true,
    description:
      '{Gender} {who have children (if have children)} need a slightly different approach to improve their relationship. Which statement best describes you?',
    type: 'text',
    answers: [
      {
        value: 'unhappy',
        title: "I'm very unhappy with how things are going in my relationship",
        nextQuestionUrl: 'traits-tend-to-overthink',
      },
      {
        value: 'partially-unhappy',
        title: "I'm unhappy with parts of my relationship, but some things are working well",
        nextQuestionUrl: 'traits-tend-to-overthink',
      },
      {
        value: 'happy',
        title: "I'm generally happy in my relationship",
        nextQuestionUrl: 'traits-tend-to-overthink',
      },
    ],
  },
  {
    id: 'traits-tend-to-overthink-id',
    url: 'traits-tend-to-overthink',
    index: 11,
    showBackButton: true,
    description: 'Do you tend to overthink?',
    type: 'text',
    answers: [
      {
        value: 'yes',
        title: 'Yes',
        nextQuestionUrl: 'traits-most-important',
      },
      {
        value: 'no',
        title: 'No',
        nextQuestionUrl: 'traits-emotional-control',
      },
    ],
  },
  // TODO There should be "how-does-it-work-id" section
  {
    id: 'traits-most-important-id',
    url: 'traits-most-important',
    index: 12,
    showBackButton: true,
    description: 'What is most important to you?',
    type: 'text',
    answers: [
      {
        value: 'success',
        title: 'Success',
        nextQuestionUrl: 'relationship-about-us',
      },
      {
        value: 'romance',
        title: 'Romance',
        nextQuestionUrl: 'relationship-about-us',
      },
      {
        value: 'stability',
        title: 'Stability',
        nextQuestionUrl: 'relationship-about-us',
      },
      {
        value: 'freedom',
        title: 'Freedom',
        nextQuestionUrl: 'relationship-about-us',
      },
    ],
  },
  {
    id: 'traits-emotional-control-id',
    url: 'traits-emotional-control',
    index: 13,
    showBackButton: true,
    description: 'Is emotional control tricky for you?',
    type: 'text',
    answers: [
      {
        value: 'yes',
        title: 'Yes',
        nextQuestionUrl: 'relationship-about-us',
      },
      {
        value: 'sometimes',
        title: 'Sometimes',
        nextQuestionUrl: 'relationship-about-us',
      },
      {
        value: 'rarely',
        title: 'Rarely',
        nextQuestionUrl: 'relationship-about-us',
      },
      {
        value: 'not-at-all',
        title: 'Not at all',
        nextQuestionUrl: 'relationship-about-us',
      },
    ],
  },
  {
    id: 'relationship-about-us-id',
    url: 'relationship-about-us',
    index: 14,
    showBackButton: true,
    description: 'Where did you hear about us?',
    type: 'text',
    answers: [
      {
        value: 'poster',
        title: 'Poster or Billboard',
      },
      {
        value: 'friends-or-family',
        title: 'Friend or Family',
      },
      {
        value: 'instagram',
        title: 'Instagram',
      },
      {
        value: 'mail-or-package',
        title: 'Direct Mail or Package Insert',
      },
      {
        value: 'online-tv',
        title: 'Online TV or Streaming TV',
      },
      {
        value: 'tv',
        title: 'TV',
      },
      {
        value: 'radio',
        title: 'Radio',
      },
      {
        value: 'search-engine',
        title: 'Search Engine (Google, Bing, etc.)',
      },
      {
        value: 'newspaper-or-magazine',
        title: 'Newspaper or Magazine',
      },
      {
        value: 'blog-or-website',
        title: 'Blog Post or Website Review',
      },
      {
        value: 'podcast',
        title: 'Podcast',
      },
      {
        value: 'influencer',
        title: 'Influencer',
      },
      {
        value: 'youtube',
        title: 'Youtube',
      },
      {
        value: 'pinterest',
        title: 'Pinterest',
      },
      {
        value: 'other',
        title: 'Other',
      },
    ],
  },
];

export const quizConfig: ConfigType = {
  version: '1',
  name: 'quiz',
  link: '/quiz',
  flow: {
    id: 'flow-id',
    name: 'default_flow',
    initialScreen: 'gender-id',
    screens,
  },
};
