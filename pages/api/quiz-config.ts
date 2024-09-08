import type {NextApiRequest, NextApiResponse} from 'next';
import {QuizConfigResponseData} from "@/types/api";
import {quizConfig} from "@/mock/quizConfig";

/**
 * Get full quiz config
 */
export default function handler(req: NextApiRequest, res: NextApiResponse<QuizConfigResponseData>) {
  if (req.method !== 'GET') return res.status(404).send({error: 'Something went wrong'});

  // Used the mock data
  if (!quizConfig) return res.status(500).json({error: 'Failed to load data'});

  const responseData: QuizConfigResponseData = {
    data: quizConfig,
  };

  return res.status(200).json(responseData);
};
