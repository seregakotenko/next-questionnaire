import type {NextApiRequest, NextApiResponse} from 'next';
import {StepResponseData} from "@/types/api";
import {quizConfig} from "@/mock/quizConfig";
import {Step} from "@/types/api/steps";

export default function handler(req: NextApiRequest, res: NextApiResponse<StepResponseData>) {
  const {step: stepName} = req.query;

  if (req.method !== 'GET') return res.status(404).send({error: 'Something went wrong'});

  if (!quizConfig?.length) return res.status(500).json({error: 'Failed to load data'});

  const stepItem: Step | undefined = quizConfig.find(item => item.url === stepName);
  const responseData: StepResponseData = {
    data: stepItem,
  };

  return res.status(200).json(responseData)
};
