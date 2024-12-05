import Icon from "@/components/ui/icon/icon"

const Firewall = () => {
  return (
    <div className="z-10 flex flex-col justify-between gap-4 rounded-lg border border-gray-500/50 bg-black p-4">
      <div className="flex items-center justify-between align-middle">
        <p className="p-property-key">
          <Icon name="BrickWall" color="grey" size={16} />
          Firewall
        </p>
        <p className="p-property-value !font-sans !text-white/70">Allowed</p>
      </div>
    </div>
  )
}

export default Firewall
