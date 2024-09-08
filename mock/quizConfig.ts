import {ConfigType, Screen} from "@/types/api/config";

export const screens: Screen[] = [
  {
    id: 'gender-id',
    url: 'gender',
    index: 1,
    description: 'Select your gender:',
    type: 'text',
    answers: [
      {
        name: 'male',
        title: 'Male',
        nextQuestionUrl: 'relationship-status',
      },
      {
        name: 'female',
        title: 'Female',
        nextQuestionUrl: 'relationship-status',
      }
    ],
  },
  {
    id: 'relationship-status-id',
    url: 'relationship-status',
    index: 2,
    type: 'text',
    description: 'So we can get to know you better, tell us about your relationship status.',
    answers: [
      {
        name: 'single',
        title: 'Single',
        nextQuestionUrl: 'single-parent',
      },
      {
        name: 'in-relationship',
        title: 'In a relationship',
        nextQuestionUrl: 'parent',
      }
    ],
  },
  {
    id: 'single-parent-id',
    url: 'single-parent',
    index: 3,
    type: 'text',
    description: 'Are you single parent?',
    answers: [
      {
        name: 'yes',
        title: 'Yes',
        nextQuestionUrl: 'in-a-relationship-problem',
      },
      {
        name: 'no',
        title: 'No',
        nextQuestionUrl: 'in-a-relationship-problem',
      }
    ],
  },
  {
    id: 'parent-id',
    url: 'parent',
    index: 4,
    type: 'text',
    description: 'Are you parent?',
    answers: [
      {
        name: 'yes',
        title: 'Yes',
        nextQuestionUrl: 'single-problem',
      },
      {
        name: 'no',
        title: 'No',
        nextQuestionUrl: 'single-problem',
      }
    ],
  },
  {
    id: 'single-problem-id',
    url: 'single-problem',
    index: 5,
    type: 'text',
    description: 'Single {gender} {who have children (if have children)} need a slightly different approach to find their perfect partner. But first, how did you fell in your last relationship?',
    answers: [
      {
        name: 'unhappy',
        title: 'I was unhappy with low things were going in my relationship',
        nextQuestionUrl: 'partner-introvert-or-extravert',
      },
      {
        name: 'partially-unhappy',
        title: 'I was unhappy with parts of my relationship, but some thing were working',
        nextQuestionUrl: 'partner-introvert-or-extravert',
      },
      {
        name: 'happy',
        title: 'I was generally happy with my relationship',
        nextQuestionUrl: 'partner-introvert-or-extravert',
      },
      {
        name: 'had-no-relationship',
        title: 'I\'ve never been in a relationship',
        nextQuestionUrl: 'partner-introvert-or-extravert',
      }
    ],
  },
  {
    id: 'partner-introvert-or-extravert-id',
    url: 'partner-introvert-or-extravert',
    index: 6,
    type: 'text',
    description: 'Is your partner an introvert or extravert?',
    answers: [
      {
        name: 'introvert',
        title: 'Introvert',
        nextQuestionUrl: 'partner-gender',
      },
      {
        name: 'extravert',
        title: 'Extravert',
        nextQuestionUrl: 'partner-gender',
      },
      {
        name: 'both',
        title: 'A bit of both',
        nextQuestionUrl: 'partner-gender',
      }
    ],
  },
  {
    id: 'partner-gender-id',
    url: 'partner-gender',
    index: 7,
    description: 'Select your partner\'s gender:',
    type: 'text',
    answers: [
      {
        name: 'male',
        title: 'Male',
        nextQuestionUrl: 'partner-priority',
      },
      {
        name: 'female',
        title: 'Female',
        nextQuestionUrl: 'partner-priority',
      }
    ],
  },
  {
    id: 'partner-priority-id',
    url: 'partner-priority',
    index: 8,
    description: 'Do you agree with the statement below?',
    additionalDescription: '"My partner and I make sex a priority in our relationship"',
    type: 'text',
    answers: [
      {
        name: 'strongly-agree',
        title: 'Strongly agree',
        nextQuestionUrl: 'think-about-relationship-goals',
      },
      {
        name: 'agree',
        title: 'Agree',
        nextQuestionUrl: 'think-about-relationship-goals',
      },
      {
        name: 'neutral',
        title: 'Neutral',
        nextQuestionUrl: 'think-about-relationship-goals',
      },
      {
        name: 'disagree',
        title: 'Disagree',
        nextQuestionUrl: 'think-about-relationship-goals',
      },
      {
        name: 'strongly-agree',
        title: 'Strongly agree',
        nextQuestionUrl: 'think-about-relationship-goals',
      }
    ],
  },
  {
    id: 'think-about-relationship-goals-id',
    url: 'think-about-relationship-goals',
    index: 9,
    description: 'When you think about your relationship goals, you feel...?',
    type: 'text',
    answers: [
      {
        name: 'optimistic',
        title: 'Optimistic! They are totally doable, with some guidance.',
        nextQuestionUrl: 'relationship-about-us',
      },
      {
        name: 'cautious',
        title: 'Cautious. I\'ve struggled before, but I\'m hopeful.',
        nextQuestionUrl: 'relationship-about-us',
      },
      {
        name: 'anxious',
        title: 'I\'m feeling a little anxious, honestly.',
        nextQuestionUrl: 'relationship-about-us',
      },
    ],
  },
  {
    id: 'in-a-relationship-problem-id',
    url: 'in-a-relationship-problem',
    index: 10,
    description: '{Gender} {who have children (if have children)} need a slightly different approach to improve their relationship. Which statement best describes you?',
    type: 'text',
    answers: [
      {
        name: 'unhappy',
        title: 'I\'m very unhappy with how things are going in my relationship',
        nextQuestionUrl: 'traits-tend-to-overthink',
      },
      {
        name: 'partially-unhappy',
        title: 'I\'m unhappy with parts of my relationship, but some things are working well',
        nextQuestionUrl: 'traits-tend-to-overthink',
      },
      {
        name: 'happy',
        title: 'I\'m generally happy in my relationship',
        nextQuestionUrl: 'traits-tend-to-overthink',
      },
    ],
  },
  {
    id: 'traits-tend-to-overthink-id',
    url: 'traits-tend-to-overthink',
    index: 11,
    description: 'Do you tend to overthink?',
    type: 'text',
    answers: [
      {
        name: 'yes',
        title: 'Yes',
        nextQuestionUrl: 'traits-most-important',
      },
      {
        name: 'no',
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
    description: 'What is most important to you?',
    type: 'text',
    answers: [
      {
        name: 'success',
        title: 'Success',
        nextQuestionUrl: 'relationship-about-us',
      },
      {
        name: 'romance',
        title: 'Romance',
        nextQuestionUrl: 'relationship-about-us',
      },
      {
        name: 'stability',
        title: 'Stability',
        nextQuestionUrl: 'relationship-about-us',
      },
      {
        name: 'freedom',
        title: 'Freedom',
        nextQuestionUrl: 'relationship-about-us',
      },
    ],
  },
  {
    id: 'traits-emotional-control-id',
    url: 'traits-emotional-control',
    index: 13,
    description: 'Is emotional control tricky for you?',
    type: 'text',
    answers: [
      {
        name: 'yes',
        title: 'Yes',
        nextQuestionUrl: 'relationship-about-us',
      },
      {
        name: 'sometimes',
        title: 'Sometimes',
        nextQuestionUrl: 'relationship-about-us',
      },
      {
        name: 'rarely',
        title: 'Rarely',
        nextQuestionUrl: 'relationship-about-us',
      },
      {
        name: 'not-at-all',
        title: 'Not at all',
        nextQuestionUrl: 'relationship-about-us',
      },
    ],
  },
  {
    id: 'relationship-about-us-id',
    url: 'relationship-about-us',
    index: 14,
    description: 'Where did you hear about us?',
    type: 'text',
    answers: [
      {
        name: 'poster',
        title: 'Poster or Billboard',
      },
      {
        name: 'friends-or-family',
        title: 'Friend or Family',
      },
      {
        name: 'instagram',
        title: 'Instagram',
      },
      {
        name: 'mail-or-package',
        title: 'Direct Mail or Package Insert',
      },
      {
        name: 'online-tv',
        title: 'Online TV or Streaming TV',
      },
      {
        name: 'tv',
        title: 'TV',
      },
      {
        name: 'radio',
        title: 'Radio',
      },
      {
        name: 'search-engine',
        title: 'Search Engine (Google, Bing, etc.)',
      },
      {
        name: 'newspaper-or-magazine',
        title: 'Newspaper or Magazine',
      },
      {
        name: 'blog-or-website',
        title: 'Blog Post or Website Review',
      },
      {
        name: 'podcast',
        title: 'Podcast',
      },
      {
        name: 'influencer',
        title: 'Influencer',
      },
      {
        name: 'youtube',
        title: 'Youtube',
      },
      {
        name: 'pinterest',
        title: 'Pinterest',
      },
      {
        name: 'other',
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
    initialScreen: 'gender',
    screens,
  }
};
