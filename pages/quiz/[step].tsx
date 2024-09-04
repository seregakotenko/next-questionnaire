import {Step as StepType} from "@/types/api/steps";
import {GetStaticPaths, GetStaticProps} from "next";

const steps: StepType[] = [
  {
    id: 'gender-id',
    name: 'gender',
    order: 0,
    condition: {}
  },
  {
    id: 'flow_choice-id',
    name: 'flow_choice',
    order: 1,
  }
];

export const getStaticPaths = (async () => {
  // Call an API endpoint to get posts
  // const res: Response = await fetch('http://localhost:3000/api/steps');
  // const steps: ResponseData = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = steps.map((step: StepType) => {
    return {
      params: {
        step: step.name,
      },
    }
  })

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return {
    paths: paths,
    fallback: false,
  }
}) satisfies GetStaticPaths;


export const getStaticProps = (async ({params}) => {
  const step = steps.find((step: StepType) => step.name === params?.step);

  return {props: {step}}
}) satisfies GetStaticProps<{ step: StepType | undefined }>

type PageProps = {
  step: StepType
}

export default function Step({step}: PageProps) {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24`}>
      Step name: -{step.name}-
    </main>
  );
}
