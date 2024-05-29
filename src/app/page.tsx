import HeroSection from "components/home/HeroSection";
import ShareSpace from "components/home/ShareSpace";
import WhereToFindMe from "components/home/WhereToFindMe";

export default function Page() {
  return (
    <div className='h-[calc(100vh-64px)] grid place-content-center relative'>
      <HeroSection />
      <WhereToFindMe />
      <ShareSpace />
    </div>
  )
}
