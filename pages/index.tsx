import React, { useContext } from "react";

// Components
import DividerComponent from "@/components/Divider";
import Layout from "@/components/Layout";
import Banner from "@/components/sections/Banner";
import Contact from "@/components/sections/Contact";
import Gallery from "@/components/sections/Gallery";
import Location from "@/components/sections/Location";
import Opens from "@/components/sections/Opens";
import Plans from "@/components/sections/Plans";
import Coaches from "@/components/sections/Coaches";

// Parallax
import { ParallaxProvider } from "react-scroll-parallax";

// User Context
import { context } from "@/utils/userContext";

// Data
import info from '@/data/info.json'
import { assetsInfo } from "@/utils/assets";


export default function Home() {
  const {state, disPatch} = useContext(context);

  let language: "en" | "ar" = state || "en";

  return (
    <Layout>
      <ParallaxProvider>
        <div className="d-flex flex-column justify-content-center algin-items-center gap-5">
          <Banner title={assetsInfo.title}  shortTitle={assetsInfo.shortTitle} description={info[language].description} />

          <DividerComponent />

          <Location location={info[language].location} showLocation={info[language].showLocation} />

          <DividerComponent hr />

          <Opens opens={info[language].opens} />

          <DividerComponent hr />

          <Coaches coachesTitle={info[language].coachesTitle} coaches={info[language].coaches}/>

          <DividerComponent hr />

          <Gallery galleryTitle={info[language].galleryTitle} />

          <DividerComponent hr />

          <Plans plansTitle={info[language].plansTitle} plans={info[language].plans} />

          <DividerComponent hr />

          <Contact contact={info[language].contact} />

        </div>
      </ParallaxProvider>
    </Layout>
  );
}
