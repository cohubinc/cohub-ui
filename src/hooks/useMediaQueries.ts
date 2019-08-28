import { useMediaQuery as umq } from "react-responsive";
import MediaQuery from "src/definitions/enums/MediaQuery";

const useMediaQuery = (query: string): boolean => umq({ query });

export default function useMediaQueries() {
  const isMobile = useMediaQuery(MediaQuery.mobileMediaQuery);
  const isTablet = useMediaQuery(MediaQuery.tabletMediaQuery);
  const isDesktop = useMediaQuery(MediaQuery.desktopsLaptopsMediaQuery);
  const isBigScreen = useMediaQuery(MediaQuery.bigScreenMediaQuery);

  return { isMobile, isTablet, isDesktop, isBigScreen };
}
