import { Avatar } from "@/components/ui/avatar";
import { FrameWorkSupportedData } from "@/data/frameworkSupported.data";

export default function Home() {
  return (
    <div className="m-20 flex flex-col justify-center gap-10 border border-slate-100/15 p-20">
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
    </div>
  );
}
