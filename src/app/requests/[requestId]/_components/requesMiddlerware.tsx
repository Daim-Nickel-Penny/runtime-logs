import Icon from "@/components/ui/icon/icon"

const RequestMiddlerware = () => {
  return (
    <div className="z-10 flex flex-col justify-between gap-4 rounded-lg border border-gray-500/50 bg-black p-4">
      <div className="flex items-center justify-between align-middle">
        <p className="p-property-key">
          <Icon name="Columns3" color="grey" size={16} />
          Middleware
        </p>
        <p className="rounded-lg border border-gray-500/50 px-3 py-1 font-mono slashed-zero text-green-400">
          200
        </p>
      </div>
    </div>
  )
}

export default RequestMiddlerware
