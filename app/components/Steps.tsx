import Image from 'next/image';

const Steps = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-20 w-fit min-h-[30vh] resize-both px-12 text-center justify-center items-center bg-black bg-opacity-30 rounded-xl mx-8 p-8">
        <div className="flex flex-col items-center justify-center mx-4 pt-0 md:pt-8 rounded-xl">
          <h4 className="font-inter font-extrabold text-lg md:text-2xl pb-5 text-white shadow-md">
            Design a PCB
          </h4>
          <div className="relative w-[24vh] md:w-[18vw] h-[26vh] md:h-[20vw] rounded-lg pb-8">
            <Image
              src="/images/schematic.png"
              alt="Design a PCB"
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <p className="font-inter text-white text-sm md:text-base mt-2">
            Create your own custom PCB design.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center mx-4 pt-4 md:pt-8 rounded-xl">
          <h4 className="font-inter font-extrabold text-lg md:text-2xl pb-5 text-white shadow-md">
            Design Art
          </h4>
          <div className="relative w-[24vh] md:w-[18vw] h-[26vh] md:h-[20vw] rounded-lg pb-8">
            <Image
              src="/images/pcb-view.png"
              alt="Design Art"
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <p className="font-inter text-white text-sm md:text-base mt-2">
            Add artistic elements to your PCB.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center mx-4 pt-0 md:pt-8 rounded-xl">
          <h4 className="font-inter font-extrabold text-lg md:text-2xl pb-5 text-white shadow-md">
            Create Firmware
          </h4>
          <div className="relative w-[24vh] md:w-[18vw] h-[26vh] md:h-[20vw] rounded-lg pb-4 md:pb-8">
            <Image
              src="/images/code.png"
              alt="Create Firmware"
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <p className="font-inter text-white text-sm md:text-base mt-2">
            Develop the firmware for your PCB.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Steps;