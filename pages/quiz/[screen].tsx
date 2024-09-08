import { Screen as ScreenType } from '@/types/api/config';
import { GetStaticPaths, GetStaticPathsResult, GetStaticProps } from 'next';
import { ScreenResponseData, ScreensResponseData } from '@/types/api';
import ScreenDetails from '@/components/screenDetails/screenDetails';
import ScreenLayout from '@/components/screenLayout';

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
    };
  });

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return {
    paths: paths || [],
    fallback: false,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async ({ params }) => {
  const screenParam = params?.screen;
  const res: Response = await fetch(`${process.env.API_URL}/screens/${screenParam}`);
  const responseData: ScreenResponseData = await res.json();

  const screenItem = responseData.data;

  return {
    props: {
      screen: screenItem,
    },
  };
}) satisfies GetStaticProps;

type PageProps = {
  screen: ScreenType;
};

export default function Screen({ screen }: PageProps) {
  const { id, showBackButton } = screen;

  return (
    <ScreenLayout showBackButton={showBackButton}>
      <ScreenDetails id={id} />
    </ScreenLayout>
  );
}
