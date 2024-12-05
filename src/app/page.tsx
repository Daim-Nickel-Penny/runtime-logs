import { Avatar } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon/icon';
import { MediaImage } from '@/components/ui/mediaImage';
import { FrameWorkSupportedData } from '@/data/frameworkSupported.data';
import ProjectBio from './_components/projectBio';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <>
      <div className="relative m-20 flex flex-col justify-center gap-10 border border-gray-100/15 p-20">
        <div className="absolute left-0 top-0 -translate-x-3 -translate-y-2">
          <Icon color="grey" name="Plus" />
        </div>
        <div className="text-center font-sans text-5xl font-bold leading-tight tracking-tighter">
          Runtime logs to see event <br /> sequences for API requests
        </div>
        <div className="flex justify-center gap-10">
          {FrameWorkSupportedData.map((eachFramework, index) => (
            <Avatar key={index} src={eachFramework.src} alt={eachFramework.alt} size={'sm'} />
          ))}
        </div>
        <div className="flex justify-between">
          <div className="flex flex-row items-center gap-2">
            <Icon name="CircleDotDashed" color="grey" size={15} />
            <p className="text-md text-gray-400/50">v 1.0.0</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <p className="text-md text-gray-400/50">{'Dec 5, 2024'}</p>
          </div>
        </div>
        <div className="flex justify-center">
          <MediaImage src="/Logs_Request_Anatomy.avif" alt="demo" />
        </div>
        <div className="w-full">
          <ProjectBio />
        </div>
        <div className="flex-col gap-12">
          <h1 className="text-center font-sans text-2xl font-semibold leading-tight tracking-tighter">
            Ready to test? <span className="text-white/50">Start exploring the</span>{' '}
            <span className="inline-block bg-gradient-to-r from-blue-600 via-blue-500 to-purple-400 bg-clip-text text-transparent">
              Logs
            </span>{' '}
            <span className="text-white/50">today!</span>
            <br />
            <span className="text-white/50"> Collaborate by pushing on the Github</span>
          </h1>

          <div className="mt-10 flex justify-center gap-4">
            <Button variant="solid" name="Start Logging" />
            <Button variant="outlined" name="Source Code" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 -translate-x-3 translate-y-2">
          <Icon color="grey" name="Plus" />
        </div>
      </div>
    </>
  );
}
