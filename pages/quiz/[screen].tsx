import {Screen as ScreenType} from "@/types/api/config";
import {GetStaticPaths, GetStaticPathsResult, GetStaticProps} from "next";
import {ScreenResponseData, ScreensResponseData} from "@/types/api";
import AnswersList from "@/components/answersList/answersList";
import {useConfigStore} from "@/providers/quiz-config-store-provider";
import {v4 as uuidv4} from "uuid";
import {createConfigStore} from "@/stores/quiz-config-store";

export const getStaticPaths = (async (): Promise<GetStaticPathsResult> => {
  // Call an API endpoint to get posts
  const res: Response = await fetch(`${process.env.API_URL}/screens`);
  const responseData: ScreensResponseData = await res.json();
  const screens = responseData.data;

  // Get the paths we want to pre-render based on screens
  const paths = screens?.map((screen: ScreenType) => {
    return {
      params: {
        screen: screen.url,
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
  const screenParam = params?.screen;
  const res: Response = await fetch(`${process.env.API_URL}/screens/${screenParam}`);
  const responseData: ScreenResponseData = await res.json();

  const screenItem = responseData.data;

  const ress: Response = await fetch(`${process.env.API_URL}/screens`);
  const responseDatas: ScreensResponseData = await ress.json();
  const screens = responseDatas.data;

  if (screens) {
    createConfigStore().getState().initialState(screens); // Zustand. Set initial state on server side
  }

  return {
    props:
      {
        screen: screenItem,
        screens: screens,
      }
  };
}) satisfies GetStaticProps;

type PageProps = {
  screen: ScreenType;
  screens: ScreenType[];
}

export default function Screen({screen}: PageProps) {
  const {answers = [], description = '', additionalDescription = ''} = screen;

  // Zustand. Use the state on server/client side
  const {screens} = useConfigStore(
    (state) => state,
  );

  return (
    <section className="py-4 w-full max-w-96">
      <h2 className="mb-4 text-2xl font-bold">{description}</h2>
      {!!additionalDescription && (<p className="my-4 text-lg font-semibold">{additionalDescription}</p>)}

      <AnswersList answers={answers}/>

      <>
        {
          screens && screens.map(screen => {
            return <div key={uuidv4()}>{screen.description}</div>
          })
        }
      </>

      <div>

      </div>
    </section>
  );
}
