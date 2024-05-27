import TypeWriter from "components/type-writer";
import AWSIcon from "icons/AWSIcon";
import DockerIcon from "icons/DockerIcon";
import FirebaseIcon from "icons/FirebaseIcon";
import GolangIcon from "icons/GoLangIcon";
import HtmlIcon from "icons/HtmlIcon";
import JavaScriptIcon from "icons/JavaScriptIcon";
import MuiIcon from "icons/MuiIcon";
import MySQLIcon from "icons/MySQLIcon";
import NextJsIcon from "icons/NextJsIcon";
import NginxIcon from "icons/NginxIcon";
import NodeJsIcon from "icons/NodeJsIcon";
import ReactIcon from "icons/ReactIcon";
import ReactQueryIcon from "icons/ReactQueryIcon";
import RedisIcon from "icons/RedisIcon";
import SassIcon from "icons/SassIcon";
import SpringIcon from "icons/SpringIcon";
import TailwindIcon from "icons/TailwindIcon";
import TypeScriptIcon from "icons/TypeScriptIcon";

export default function HeroSection() {
    return (
        <div className="flex flex-col">
            <div className="">
                <p className=" text-4xl pb-4 font-bold ">Welcome!</p>
                <p className="text-3xl">I am Zhengliang(Puck) Wang</p>
                <p className="typewriter text-2xl">
                    <TypeWriter strings={['who loves to build and experience novel technologies.']} />
                </p>
            </div>

            <div>
                <p className="text-xl font-bold py-4 capitalize">A bit about my Tech Stack:</p>
                <div className="flex flex-col gap-4">
                    <div>
                        <p className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">* Frontend:</p>
                        <ul className="text-left text-gray-500 dark:text-gray-400 capitalize">
                            <li>
                                <div className="flex flex-row items-center gap-2">
                                    ✅ hands-on experience with <HtmlIcon /> HTML5 + <SassIcon /> Sass + <JavaScriptIcon /> JavaScript ES6
                                </div>
                            </li>
                            <li>
                                <div className="flex flex-row items-center gap-2">
                                    ✅ hands-on experience with <TypeScriptIcon /> TypeScript + <NextJsIcon /> Next.js + <TailwindIcon /> Tailwind CSS
                                </div>
                            </li>

                            <li>
                                <div className="flex flex-row items-center gap-2">
                                    ✅ Hands-on experience with <ReactIcon /> React + <ReactQueryIcon /> TanStack Query + <MuiIcon /> Material UI
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">* Backend:</p>
                        <ul className="space-y-3 text-left text-gray-500 dark:text-gray-400 capitalize">
                            <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                <div className="flex flex-row items-center gap-2">
                                    ✅ Familiar with Distributed system development using <SpringIcon /> Spring Cloud modules
                                </div>
                            </li>
                            <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                <div className="flex flex-row items-center gap-2">
                                    ✅ Years of experience in <SpringIcon /> Spring Boot + <RedisIcon /> Redis + <MySQLIcon /> MySQL
                                </div>
                            </li>
                            <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                <div className="flex flex-row items-center gap-2">
                                    ✅ Hands-on experience in <NodeJsIcon /> Node.js + <FirebaseIcon /> Firebase + <AWSIcon /> AWS
                                </div>
                            </li>
                            <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                <div className="flex flex-row items-center gap-2">
                                    ✅ Deployed multiple services using <DockerIcon /> Docker + <NginxIcon /> Nginx
                                </div>
                            </li>
                            <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                <div className="flex flex-row items-center gap-2">
                                    📖 Learning <GolangIcon /> Golang at the moment...
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <p className="pt-4 text-lg font-semibold">
                Here you will find my working projects, blogs about technologies, leetcode solutions, and interesting issues I encountered from work.
            </p>
        </div>
    )
}