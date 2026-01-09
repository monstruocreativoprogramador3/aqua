import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
// import PageIndicator from '../components/PageIndicator';
import Footer from '../../components/Footer';
import SocialSidebar from '@/components/Sidebar';
import AboutUsSection from '@/components/About';
import WhoWeServeSection from '@/components/WhoWeServe';
import HowWeWorkSection from '@/components/HowWeWork';
import OurServicesSection from '@/components/ServicesSection';
import ProjectGallery from '../../components/ProjectGallery';
// import ContactQuote from "@/components/ContactForm";
// import animationData from "@/../public/hero.lottie.json";
import HomeComponent from '@/components/Home';
import { Suspense } from 'react';
import { getDictionary } from './dictionaries';
import ContactQuote from '@/components/ContactForm';
// import dynamic from "next/dynamic";
// const Lottie = dynamic(() => import("lottie-react"), {
//   ssr: false,
// });

const Video = () => {
  return (
    <video
      className="object-cover bg-center -z-0 absolute h-[50vh] md:h-screen top-0 left-0 min-w-full min-h-full"
      autoPlay
      muted
      loop
      playsInline
    >
      <source src="/pool.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};
const Home: NextPage<{ params: Promise<{ lang: 'en' | 'es' }> }> = async ({
  params,
}) => {
  const { lang } = await params;
  const dict = await getDictionary(lang); // en

  return (
    <>
      <Head>
        <title>Aquatopia</title>
        <meta
          name="description"
          content="Be prepared for the mountains and beyond"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen relative">
        {/* Background Image */}
        <div className="inset-0 z-0 absolute">
          <div className="relative bg-red-300">
            <div className="left-0 right-0 w-full h-[50vh] md:h-screen absolute bg-gradient-to-b top-0 bottom-0 from-[#07161eb7] to-[#07161e5e] z-10"></div>
            <Suspense fallback={<p>Loading video...</p>}>
              <Video />
            </Suspense>
          </div>
        </div>

        <div className="relative z-10">
          <Navbar dict={dict} />
          <HomeComponent dict={dict} />
          <AboutUsSection dict={dict} />
          <HowWeWorkSection dict={dict} />
          <WhoWeServeSection dict={dict} />
          <OurServicesSection dict={dict} />
          <ProjectGallery dict={dict} />
          <ContactQuote dict={dict} />
          <SocialSidebar />
          {/* <PageIndicator /> */}
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Home;
