import Socials from "./components/Socials";
export default function Home() {
  return (
    <>
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        <section>
          <h1 className='mb-5 text-6xl text-primary'>Hey there I'm Ezequiel</h1>
          <h2 className='mb-6 bg-primary text-4xl text-secondary'>
            I'm a full-stack software developer
          </h2>
          <p className='w-4/6'>
            Full-Stack Developer, Ruby is my go-to programming language,
            trilingual, Stack: JavaScript, Ruby, Rails, React, Redux. seeking
            growth and open to new challenges
          </p>
        </section>
        <Socials />
      </main>
    </>
  );
}
