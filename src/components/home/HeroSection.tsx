import TypeWriter from "components/type-writer";
import AWSIcon from "icons/AWSIcon";
import DockerIcon from "icons/DockerIcon";
import FirebaseIcon from "icons/FirebaseIcon";
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

export default function HeroSection() {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col">
                <p className=" text-4xl pb-4">Welcome!</p>
                <p className="text-3xl">I am Zhengliang(Puck) Wang</p>
                <p className="typewriter text-2xl">
                    <TypeWriter strings={['who loves to build and experience novel technologies.']} />
                </p>
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

    )
}