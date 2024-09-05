import type {NextApiRequest, NextApiResponse} from 'next';
import {StepsResponseData} from "@/types/api";
import {quizConfig} from "@/mock/quizConfig";

export default function handler(req: NextApiRequest, res: NextApiResponse<StepsResponseData>) {
  if (req.method !== 'GET') return res.status(404).send({error: 'Something went wrong'});

  if (!quizConfig?.length) return res.status(500).json({error: 'Failed to load data'});

  const responseData: StepsResponseData = {
    data: quizConfig,
  };

  return res.status(200).json(responseData);
};
