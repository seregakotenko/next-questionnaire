import type { NextApiRequest, NextApiResponse } from 'next';
import { ScreensResponseData } from '@/types/api';
import { quizConfig } from '@/mock/quizConfig';

/**
 * Get screens list
 */
export default function handler(req: NextApiRequest, res: NextApiResponse<ScreensResponseData>) {
  if (req.method !== 'GET') return res.status(404).send({ error: 'Something went wrong' });

  // Used the mock data
  const { screens = [] } = quizConfig?.flow;

  if (!screens.length) return res.status(500).json({ error: 'Failed to load data' });

  const responseData: ScreensResponseData = {
    data: screens,
  };

  return res.status(200).json(responseData);
}
