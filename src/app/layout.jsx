import { Epilogue } from "next/font/google";
import "@/public/scss/base.scss";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Preloader from "../component/Preloader";
import { GoogleAnalytics } from '@next/third-parties/google';

const epilogue = Epilogue({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "All crypto news | Enlight News",
    template: "%s",
  },
  description:
    "Explore the latest crypto market news, get expert insights, and read opinions. We closely monitor the market to keep you informed!",
  openGraph: {
    title: {
      default: "All crypto news | Enlight News",
      template: "%s",
    },
    description:
      "Explore the latest crypto market news, get expert insights, and read opinions. We closely monitor the market to keep you informed!",
    images: "https://enlight.systems/images/meta.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={epilogue.className}>
        <GoogleAnalytics gaId="G-N1SFZ1RDHK" />
        <Preloader/>
        <Header />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
