import { ConfigType, Screen, ScreenType } from '@/types/api/config';

const { QUESTION, INFORM } = ScreenType;

export const screens: Screen[] = [
  {
    id: 'gender',
    url: 'gender',
    index: 1,
    showBackButton: false,
    description: 'Select your gender:',
    type: QUESTION,
    attributes: {
      content: {
        answers: [
          {
            value: 'male',
            title: 'Male',
            nextQuestionId: 'relationshipStatus',
          },
          {
            value: 'female',
            title: 'Female',
            nextQuestionId: 'relationshipStatus',
          },
        ],
      },
    },
  },
  {
    id: 'relationshipStatus',
    url: 'relationship-status',
    index: 2,
    showBackButton: true,
    type: QUESTION,
    description: 'So we can get to know you better, tell us about your relationship status.',
    attributes: {
      content: {
        answers: [
          {
            value: 'single',
            title: 'Single',
            nextQuestionId: 'singleParent',
          },
          {
            value: 'in-relationship',
            title: 'In a relationship',
            nextQuestionId: 'parent',
          },
        ],
      },
    },
  },
  {
    id: 'singleParent',
    url: 'single-parent',
    index: 3,
    showBackButton: true,
    type: QUESTION,
    description: 'Are you single parent?',
    attributes: {
      content: {
        answers: [
          {
            value: 'yes',
            title: 'Yes',
            nextQuestionId: 'relationshipProblem',
          },
          {
            value: 'no',
            title: 'No',
            nextQuestionId: 'relationshipProblem',
          },
        ],
      },
    },
  },
  {
    id: 'parent',
    url: 'parent',
    index: 4,
    showBackButton: true,
    type: QUESTION,
    description: 'Are you parent?',
    attributes: {
      content: {
        answers: [
          {
            value: 'yes',
            title: 'Yes',
            nextQuestionId: 'singleProblem',
          },
          {
            value: 'no',
            title: 'No',
            nextQuestionId: 'singleProblem',
          },
        ],
      },
    },
  },
  {
    id: 'singleProblem',
    url: 'single-problem',
    index: 5,
    showBackButton: true,
    type: QUESTION,
    description:
      'Single {gender} {who have children (if have children)} need a slightly different approach to find their perfect partner. But first, how did you fell in your last relationship?',
    attributes: {
      content: {
        answers: [
          {
            value: 'unhappy',
            title: 'I was unhappy with low things were going in my relationship',
            nextQuestionId: 'partner-introvert-or-extravert-id',
          },
          {
            value: 'partially-unhappy',
            title: 'I was unhappy with parts of my relationship, but some thing were working',
            nextQuestionId: 'partnerIntrovertOrExtravert',
          },
          {
            value: 'happy',
            title: 'I was generally happy with my relationship',
            nextQuestionId: 'partnerIntrovertOrExtravert',
          },
          {
            value: 'had-no-relationship',
            title: "I've never been in a relationship",
            nextQuestionId: 'partnerIntrovertOrExtravert',
          },
        ],
      },
    },
  },
  {
    id: 'partnerIntrovertOrExtravert',
    url: 'partner-introvert-or-extravert',
    index: 6,
    showBackButton: true,
    type: QUESTION,
    description: 'Is your partner an introvert or extravert?',
    attributes: {
      content: {
        answers: [
          {
            value: 'introvert',
            title: 'Introvert',
            nextQuestionId: 'partnerGender',
          },
          {
            value: 'extravert',
            title: 'Extravert',
            nextQuestionId: 'partnerGender',
          },
          {
            value: 'both',
            title: 'A bit of both',
            nextQuestionId: 'partnerGender',
          },
        ],
      },
    },
  },
  {
    id: 'partnerGender',
    url: 'partner-gender',
    index: 7,
    showBackButton: true,
    description: "Select your partner's gender:",
    type: QUESTION,
    attributes: {
      content: {
        answers: [
          {
            value: 'male',
            title: 'Male',
            nextQuestionId: 'partnerPriority',
          },
          {
            value: 'female',
            title: 'Female',
            nextQuestionId: 'partnerPriority',
          },
        ],
      },
    },
  },
  {
    id: 'partnerPriority',
    url: 'partner-priority',
    index: 8,
    showBackButton: true,
    description: 'Do you agree with the statement below?',
    additionalDescription: '"My partner and I make sex a priority in our relationship"',
    type: QUESTION,
    attributes: {
      content: {
        answers: [
          {
            value: 'strongly-agree',
            title: 'Strongly agree',
            nextQuestionId: 'relationshipGoal',
          },
          {
            value: 'agree',
            title: 'Agree',
            nextQuestionId: 'relationshipGoal',
          },
          {
            value: 'neutral',
            title: 'Neutral',
            nextQuestionId: 'relationshipGoal',
          },
          {
            value: 'disagree',
            title: 'Disagree',
            nextQuestionId: 'relationshipGoal',
          },
          {
            value: 'strongly-agree',
            title: 'Strongly agree',
            nextQuestionId: 'relationshipGoal',
          },
        ],
      },
    },
  },
  {
    id: 'relationshipGoal',
    url: 'think-about-relationship-goals',
    index: 9,
    showBackButton: true,
    description: 'When you think about your relationship goals, you feel...?',
    type: QUESTION,
    attributes: {
      content: {
        answers: [
          {
            value: 'optimistic',
            title: 'Optimistic! They are totally doable, with some guidance.',
            nextQuestionId: 'relationshipAboutUs',
          },
          {
            value: 'cautious',
            title: "Cautious. I've struggled before, but I'm hopeful.",
            nextQuestionId: 'relationshipAboutUs',
          },
          {
            value: 'anxious',
            title: "I'm feeling a little anxious, honestly.",
            nextQuestionId: 'relationshipAboutUs',
          },
        ],
      },
    },
  },
  {
    id: 'relationshipProblem',
    url: 'relationship-problem',
    index: 10,
    showBackButton: true,
    description:
      '{Gender} {who have children (if have children)} need a slightly different approach to improve their relationship. Which statement best describes you?',
    type: QUESTION,
    attributes: {
      content: {
        answers: [
          {
            value: 'unhappy',
            title: "I'm very unhappy with how things are going in my relationship",
            nextQuestionId: 'traitsTendOverthink',
          },
          {
            value: 'partially-unhappy',
            title: "I'm unhappy with parts of my relationship, but some things are working well",
            nextQuestionId: 'traitsTendOverthink',
          },
          {
            value: 'happy',
            title: "I'm generally happy in my relationship",
            nextQuestionId: 'traitsTendOverthink',
          },
        ],
      },
    },
  },
  {
    id: 'traitsTendOverthink',
    url: 'traits-tend-to-overthink',
    index: 11,
    showBackButton: true,
    description: 'Do you tend to overthink?',
    type: QUESTION,
    attributes: {
      content: {
        answers: [
          {
            value: 'yes',
            title: 'Yes',
            nextQuestionId: 'traitsMostImportant',
            nextUrl: 'how-does-it-work',
          },
          {
            value: 'no',
            title: 'No',
            nextQuestionId: 'emotionalControl',
            nextUrl: 'how-does-it-work',
          },
        ],
      },
    },
  },
  {
    id: 'howDoesItWork',
    url: 'how-does-it-work',
    index: 15,
    showBackButton: true,
    description: 'So how does it work?',
    additionalDescription:
      "We analyze hundreds of data points to create your unique astrological blueprint. This is combined with Al to tailor-make your astrological insights, based on your attributes. We're going to change your relationship with astrology.",
    type: INFORM,
    attributes: {
      content: {
        next: 'Next',
        title: 'So how does it work?',
        text: "We analyze hundreds of data points to create your unique astrological blueprint. This is combined with Al to tailor-make your astrological insights, based on your attributes. We're going to change your relationship with astrology.",
      },
    },
  },
  {
    id: 'traitsMostImportant',
    url: 'traits-most-important',
    index: 12,
    showBackButton: true,
    description: 'What is most important to you?',
    type: QUESTION,
    attributes: {
      content: {
        answers: [
          {
            value: 'success',
            title: 'Success',
            nextQuestionId: 'relationshipAboutUs',
          },
          {
            value: 'romance',
            title: 'Romance',
            nextQuestionId: 'relationshipAboutUs',
          },
          {
            value: 'stability',
            title: 'Stability',
            nextQuestionId: 'relationshipAboutUs',
          },
          {
            value: 'freedom',
            title: 'Freedom',
            nextQuestionId: 'relationshipAboutUs',
          },
        ],
      },
    },
  },
  {
    id: 'emotionalControl',
    url: 'traits-emotional-control',
    index: 13,
    showBackButton: true,
    description: 'Is emotional control tricky for you?',
    type: QUESTION,
    attributes: {
      content: {
        answers: [
          {
            value: 'yes',
            title: 'Yes',
            nextQuestionId: 'relationshipAboutUs',
          },
          {
            value: 'sometimes',
            title: 'Sometimes',
            nextQuestionId: 'relationshipAboutUs',
          },
          {
            value: 'rarely',
            title: 'Rarely',
            nextQuestionId: 'relationshipAboutUs',
          },
          {
            value: 'not-at-all',
            title: 'Not at all',
            nextQuestionId: 'relationshipAboutUs',
          },
        ],
      },
    },
  },
  {
    id: 'relationshipAboutUs',
    url: 'relationship-about-us',
    index: 14,
    showBackButton: true,
    description: 'Where did you hear about us?',
    type: QUESTION,
    attributes: {
      content: {
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
    },
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
