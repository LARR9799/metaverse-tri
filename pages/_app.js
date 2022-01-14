import "tailwindcss/tailwind.css";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps: { session, ...pageProps} }) {
  return (
    <MoralisProvider 
      appId={process.env.NEXT_PUBLIC_APP_ID} 
      serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
