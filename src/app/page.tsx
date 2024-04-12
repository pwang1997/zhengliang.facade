import Footer from "components/footer";
import NavBar from "components/navbar";
import TypeWriter from "components/type-writer";
import AWSIcon from "icons/AWSIcon";
import DockerIcon from "icons/DockerIcon";
import FirebaseIcon from "icons/FirebaseIcon";
import GitHubIcon from "icons/GitHubIcon";
import { GmailIcon } from "icons/GmailIcon";
import LinkedInIcon from "icons/LinkedInIcon";
import MediumIcon from "icons/MediumIcon";
import MySQLIcon from "icons/MySQLIcon";
import NextJsIcon from "icons/NextJsIcon";
import NginxIcon from "icons/NginxIcon";
import NodeJsIcon from "icons/NodeJsIcon";
import RabbitMQIcon from "icons/RabbitMqIcon";
import ReactIcon from "icons/ReactIcon";
import RedisIcon from "icons/RedisIcon";
import SpringIcon from "icons/SpringIcon";
import TailwindIcon from "icons/TailwindIcon";
import TypeScriptIcon from "icons/TypeScriptIcon";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <NavBar />
      <div className='content container min-h-screen max-w-4xl flex-grow lg:mx-auto pt-10'>
        <div className=" flex justify-center">
          <div className="introduction">
            <p className=" text-4xl pb-4">Welcome to Facade!</p>
            <p className="typewriter text-3xl">
              <TypeWriter strings={['I am a Software Developer']} />
            </p>
            <p className="text-xl pb-4">who loves to build and experience novel technologies.</p>
            <p className="text-xl font-bold pb-4">Tech Stack:</p>
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-md font-bold">* Frontend:</p>
                <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
                  <li className="flex items-center space-x-3 rtl:space-x-reverse">
                    ✅
                    <p className="flex flex-row items-center gap-2">
                      <TypeScriptIcon /> TypeScript
                      <ReactIcon /> React
                      <NextJsIcon /> Next.js
                      <TailwindIcon /> Tailwind CSS</p>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-md font-bold">* Backend:</p>
                <ul className="space-y-3 text-left text-gray-500 dark:text-gray-400">
                  <li className="flex items-center space-x-3 rtl:space-x-reverse">
                    ✅
                    <p className="flex flex-row items-center gap-2"><SpringIcon />Spring Cloud <SpringIcon />Spring Boot <RabbitMQIcon />RabbitMQ <RedisIcon />Redis <MySQLIcon />MySQL</p>
                  </li>
                  <li className="flex items-center space-x-3 rtl:space-x-reverse">
                    ✅
                    <p className="flex flex-row items-center gap-2"><NodeJsIcon />Node.js <FirebaseIcon />Firebase <AWSIcon />AWS</p>
                  </li>
                  <li className="flex items-center space-x-3 rtl:space-x-reverse">
                    ✅
                    <p className="flex flex-row items-center gap-2"><DockerIcon />Docker <NginxIcon /> Nginx</p>
                  </li>
                  <li className="flex items-center space-x-3 rtl:space-x-reverse">
                    📖
                    <span>Learning Golang + Kubernetes at the moment...</span>
                  </li>
                </ul>
              </div>
            </div>


            <p className="pt-4 text-md">
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
