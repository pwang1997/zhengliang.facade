import HeroSection from "components/home/HeroSection";
import ShareSpace from "components/home/ShareSpace";
import WhereToFindMe from "components/home/WhereToFindMe";

export default function Page() {
  return (
    <div className='mx-1 pt-96 sm:pt-0 h-[calc(100dvh-64px)] grid place-content-center absolute sm:relative'>
      <div className="pt-96 sm:pt-0">
        <HeroSection />
      </div>
      <div>
        <ShareSpace />
      </div>
      <div>
        <WhereToFindMe />
      </div>
    </div>
  )
}
