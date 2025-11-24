import { type AppType } from "next/dist/shared/lib/utils";
import "@/styles/globals.scss";
import { useEffect } from "react";
import { useRouter } from "next/router";

const MyApp: AppType = ({ Component, pageProps }) => {
  const router = useRouter();

  // Scroll to top on initial load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Scroll to top on route changes
  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo({ top: 0, behavior: "auto" });
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events]);

  return <Component {...pageProps} />;
};

export default MyApp;
