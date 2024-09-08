import type { NextApiRequest, NextApiResponse } from 'next';
import { ScreenResponseData } from '@/types/api';
import { quizConfig } from '@/mock/quizConfig';
import { Screen } from '@/types/api/config';

/**
 * Get a screen item
 */
export default function handler(req: NextApiRequest, res: NextApiResponse<ScreenResponseData>) {
  const { screen: screenName } = req.query;

  if (req.method !== 'GET') return res.status(404).send({ error: 'Something went wrong' });
  const { screens = [] } = quizConfig?.flow;

  if (!screens.length) return res.status(500).json({ error: 'Failed to load data' });

  const screenItem: Screen | undefined = screens.find((item) => item.url === screenName);
  const responseData: ScreenResponseData = {
    data: screenItem,
  };

  return res.status(200).json(responseData);
}
