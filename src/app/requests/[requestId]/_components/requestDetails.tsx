const RequestDetails = ({ requestId }: { requestId: string }) => {
  return (
    <div className="z-10 flex flex-col justify-between gap-4 rounded-lg border border-gray-500/50 bg-black p-4">
      <div className="flex items-center justify-between align-middle">
        <p className="p-property-key">Request ID</p>
        <p className="p-property-value">{requestId}</p>
      </div>
      <div className="flex items-center justify-between align-middle">
        <p className="p-property-key">Path</p>
        <p className="p-property-value">/var</p>
      </div>
      <div className="flex items-center justify-between align-middle">
        <p className="p-property-key">Host</p>
        <p className="p-property-value">test.com</p>
      </div>
    </div>
  )
}

export default RequestDetails
