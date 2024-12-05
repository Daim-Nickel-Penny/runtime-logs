import { Avatar } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon/icon";
import { MediaImage } from "@/components/ui/mediaImage";
import { FrameWorkSupportedData } from "@/data/frameworkSupported.data";
import ProjectBio from "./_components/projectBio";

export default function Home() {
  return (
    <div className="m-20 flex flex-col justify-center gap-10 border border-gray-100/15 p-20">
      <div className="text-center font-sans text-5xl font-bold leading-tight tracking-tighter">
        Runtime logs to see event <br /> sequences for API requests
      </div>
      <div className="flex justify-center gap-10">
        {FrameWorkSupportedData.map((eachFramework, index) => (
          <Avatar
            key={index}
            src={eachFramework.src}
            alt={eachFramework.alt}
            size={"sm"}
          />
        ))}
      </div>
      <div className="flex justify-between">
        <div className="flex flex-row items-center gap-2">
          <Icon name="CircleDotDashed" color="lightgrey" size={15} />
          <p className="text-md text-gray-400/50">v 1.0.0</p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <p className="text-md text-gray-400/50">{"Dec 5, 2024"}</p>
        </div>
      </div>
      <div className="flex justify-center">
        <MediaImage
          src="https://vercel.com/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fcontentful%2Fimage%2Fe5382hct74si%2F3U8V2pTHiSOdr0wDyROvLA%2F8ddeb70020ff90c57f81b17c99b83046%2FLogs_Request_Anatomy_-_Light-1.png&w=1920&q=75"
          alt="demo"
        />
      </div>
      <div>
        <ProjectBio />
      </div>
    </div>
  );
}
