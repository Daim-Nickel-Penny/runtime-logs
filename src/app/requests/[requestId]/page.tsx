import Icon from "@/components/ui/icon/icon"
import RequestDetails from "./_components/requestDetails"
import Firewall from "./_components/firewall"
import RequestMiddlerware from "./_components/requesMiddlerware"
import FunctionInvocation from "./_components/functionInvocation"

interface RequestProps {
  params: {
    requestId: string
  }
}

const Request = (props: RequestProps) => {
  const requestId = props.params.requestId
  return (
    <div className="flex flex-col justify-center gap-2 px-96 py-9">
      <div className="flex items-center justify-between align-middle">
        <p className="p-property-title">
          <Icon name="Circle" color="grey" size={10} />
          Request started
        </p>
        <p className="p-property-title-value text-gray-500">
          DEC 05 <span className="text-white/80">04:39:01.23</span> GMT+1
        </p>
      </div>

      <div className="relative z-10 flex flex-col gap-4">
        <RequestDetails requestId={requestId} />

        <div className="absolute left-5 top-7 z-0 h-96 w-[2px] rounded-lg bg-gray-500/50"></div>

        <Firewall />

        <RequestMiddlerware />

        <FunctionInvocation />

        <div className="z-10 ml-10 flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
          </span>
          <p className="p-property-title !text-white/90">Response finished</p>
        </div>
      </div>
    </div>
  )
}

export default Request
