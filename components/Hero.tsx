import { MagicButton } from './ui/MagicButton'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'

const Hero = () => {
  return (
    <div className="min-h-screen w-full pb-20 pt-36 bg-darkblue text-white flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <Spotlight className='top-0 left-0 transform translate-x-0 translate-y-0 h-[80vh] w-[60vw]' fill='white'/>
      </div>
      <div className="absolute inset-0 h-full w-full dark:bg-darkblue bg-darkblue dark:bg-grid-white/[0.03] bg-grid-black/[0.2] 
       flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-darkblue bg-darkblue [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
      </div>

      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center *
        justify-center'>
          <h2 className='uppercase tracking-widest text-xs text-center
           text-blue-300 max-w-80'> 
              Dynamic Web with Next.js 
          </h2>

          <TextGenerateEffect
            className='text-center text-[40px] md:text-5xl lg:text-6xl'
            words="Transforming Concepts into Seamless User Experiences"
          />
          <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
            Hi, I&apos;m Eze, a Computer Science Student
          </p>
          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<span>🔍</span>}
              position="center"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero