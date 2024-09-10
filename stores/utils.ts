import { AnswerRecordsType } from '@/types/store';
import { Screen, ScreenType } from '@/types/api/config';

/**
 * Return an array of questions ONLY
 */
export function prepareCustomerState(screens: Screen[]): AnswerRecordsType | {} {
  if (!screens) return {};

  // Filter questions only
  const answers = screens.filter(({ type }) => type === ScreenType.QUESTION);

  const answersObject: AnswerRecordsType = {};

  for (const screen of answers) {
    answersObject[screen.id] = '';
  }

  return answersObject;
}
