import dynamic from 'next/dynamic';

const ModelViewer = dynamic(() => import('../ModelViewer'), { ssr: false });

 const tipitytopity = ()=> {
    return (
        <div className="flex flex-col mb-8 md:flex-row items-center justify-center gap-4 pr-0 md:pr-12 w-full mx-auto mt-[10vh] md:mt-0 bg-[url('https://cloud-dhj4yjv42-hack-club-bot.vercel.app/0backgroundhh.png')] bg-no-repeat bg-center bg-cover sm:h-[120vh] md:h-[95vh]">
      {typeof window !== 'undefined' && <ModelViewer />}
      {/* 
          <Image 
              src="https://cloud-1mi3pnd3v-hack-club-bot.vercel.app/0image.png" 
              alt="Example PCB!" 
              style={{ width: '35%', height: '34%' }}
              sx={{
                width: '300px',
                height: '200px',
                // borderRadius: '16px',
                // divShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                '&:hover': {
                  transform: 'scale(1.1)',
                  transition: 'transform 0.3s ease-in-out',
                },
              }}
          /> */}
          <div className="flex flex-col items-start ml-0 md:ml-[2vw] max-w-full">
          <h1 className="font-[var(--font-inter)] text-[2.8rem] md:text-[7rem] font-bold text-center md:text-left text-white [text-shadow:_0_4px_4px_rgb(0_0_0_/_25%)]">
            Hacky Holidays!
          </h1>
          <h2 className="font-[var(--font-inter)] text-[0.7rem] md:text-[1.9rem] font-bold text-white [text-shadow:_0_4px_4px_rgb(0_0_0_/_25%)] md:-mt-4">
            Design a PCB holiday decoration this winter, get one shipped!
          </h2>
          <a href = "/guide">
          <button className="mx-auto mb-10 md:mx-0 font-[var(--font-inter)] text-[0.4rem] md:text-[calc(0.6vw+0.6vh)] font-bold text-white bg-[#f76f63] rounded-[2rem] px-[0.6rem] py-[0.6rem] md:px-[2rem] md:py-[1rem] mt-4 [text-shadow:_0_4px_4px_rgb(0_0_0_/_25%)]">
              <b>&nbsp;Learn to Make a Decoration &nbsp; ➜</b>
          </button>
          </a>

          </div>
        </div>

    )
}

export default tipitytopity;