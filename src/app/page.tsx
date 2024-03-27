import NavBar from "components/navbar";

export default function Page() {
  return (
    <>
      <NavBar />
      <div className='content container min-h-screen max-w-4xl flex-grow pt-4 lg:mx-auto'>
        <div className=" flex justify-center">

          {/* <h1 className="relative w-[max-content] text-lg
        before:absolute before:inset-0 before:animate-typewriter before:bg-white 
        after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-black">
            
          </h1> */}

          <div className="typewriter">

            <p className=" text-lg">Welcome to <b>FACADE</b>.</p>
            <dt className='flex gap-1 text-sm font-medium leading-6 text-gray-900 dark:bg-medium dark:text-white'>
              The name "Facade" came from the idea of <a href="https://refactoring.guru/design-patterns/facade" className=" underline">Facade design pattern</a>.
            </dt>
            <br />
            I am a software engineer who loves to build and experience novel technologies. My tech stack mainly falls
            under the Java & Spring domain. My work and projects primarily involve Spring Boot, Docker, Redis, MySQL,
            and Message Queues (Kafka / RabbitMQ). I like to play with novel technologies and sometimes reinvent the wheels just to experinece the "pain."
            <br /><br />
            Here you will find my working projects, blogs about technologies, lee..eetcode solutions, and interesting issues I encountered from work.
          </div>
        </div>
        <hr />
        <div className="flex justify-center">
          Powered by Next.js, Spring Boot, Docker
        </div>


      </div>
    </>

  )
}
