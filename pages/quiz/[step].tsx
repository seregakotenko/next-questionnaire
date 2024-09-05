import {Step as StepType} from "@/types/api/steps";
import {GetStaticPaths, GetStaticPathsResult, GetStaticProps} from "next";
import {StepsResponseData} from "@/types/api";
import AnswersList from "@/components/answersList/answersList";

export const getStaticPaths = (async (): Promise<GetStaticPathsResult> => {
  // Call an API endpoint to get posts
  const res: Response = await fetch('http://127.0.0.1:3000/api/steps');


  const responseData: StepsResponseData = await res.json();
  const steps = responseData.data;

  // Get the paths we want to pre-render based on posts
  const paths = steps?.map((step: StepType) => {
    return {
      params: {
        step: step.url,
      },
    }
  })

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return {
    paths: paths || [],
    fallback: false,
  }
}) satisfies GetStaticPaths;

export const getStaticProps = (async ({params}) => {
  const step = params?.step;
  const res: Response = await fetch(`http://127.0.0.1:3000/api/steps/${step}`);
  const responseData: StepsResponseData = await res.json();

  const stepItem = responseData.data;

  return {
    props:
      {
        step: stepItem,
      }
  };
}) satisfies GetStaticProps;

type PageProps = {
  step: StepType;
}

export default function Step({step}: PageProps) {
  const {url, answers, description, additionalDescription} = step;

  return (
    <>
      <p>Step name: {url}</p>
      <p>Step description: {description}</p>
      {!!additionalDescription && (<p>Step description: {additionalDescription}</p>)}

      <AnswersList answers={answers}/>
    </>
  );
}
