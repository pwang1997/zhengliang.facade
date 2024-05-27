import HeroSection from "components/home/HeroSection";
import WhereToFindMe from "components/home/WhereToFindMe";

export default function Page() {
  return (
    <div className='h-[calc(100vh-64px)] grid place-content-center relative'>
      <HeroSection />

      <WhereToFindMe />
    </div>
  )
}
