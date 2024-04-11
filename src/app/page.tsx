import Footer from "components/footer";
import NavBar from "components/navbar";
import TypeWriter from "components/type-writer";
import GitHubIcon from "icons/GitHubIcon";
import { GmailIcon } from "icons/GmailIcon";
import LinkedInIcon from "icons/LinkedInIcon";
import MediumIcon from "icons/MediumIcon";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <NavBar />
      <div className='content container min-h-screen max-w-4xl flex-grow lg:mx-auto pt-10'>
        <div className=" flex justify-center">
          <div className="introduction">
            <p className=" text-6xl pb-4">Welcome to Facade!</p>
            <p className="typewriter text-3xl">
              <TypeWriter strings={['I Am A Software Developer']} />
            </p>
            <p className="text-xl pb-4">who loves to build and experience novel technologies.</p>
            <p className="text-xl pb-4">My tech stack mainly falls
              under the Java & Spring domain. My work and projects primarily involve Spring Boot, Docker, Redis, MySQL,
              and Message Queues (Kafka / RabbitMQ).</p>
            <p className="text-md">
              Here you will find my working projects, blogs about technologies, leetcode solutions, and interesting issues I encountered from work.
            </p>
          </div>
        </div>

        <div id="">

        </div>

        <div className="flex gap-4" id="contact">
          <Link className='flex justify-center items-center pl-4 text-sm font-semibold leading-6 text-gray-900 dark:text-white' href={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'pwang1997'}`}>
            <GitHubIcon />
          </Link>
          <Link className="hover:bg-white-hover dark:bg-dark dark:text-white dark:hover:bg-dark-hover rounded-lg p-1" href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_TO || 'wzlpuck@gmail.com'}`}>
            <GmailIcon />
          </Link>
          <Link className="hover:bg-white-hover dark:bg-dark dark:text-white dark:hover:bg-dark-hover rounded-lg p-1" href={`https://medium.com/${process.env.NEXT_PUBLIC_MEDIUM_USERNAME || '@zhengliang_puck_wang'} `}>
            <MediumIcon />
          </Link>
          <Link className="hover:bg-white-hover dark:bg-dark dark:text-white dark:hover:bg-dark-hover rounded-lg p-1" href={`https://www.linkedin.com/in/${process.env.NEXT_PUBLIC_LINKEDIN_USERNAME || 'puck-wang-2020'}/`}>
            <LinkedInIcon />
          </Link>
        </div>
      </div>
      <Footer />
    </>

  )
}
