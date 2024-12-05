"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useState } from "react"

const RequestsRootPage: React.FC = () => {
  const router = useRouter()
  const generateUUID = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-12">
      <h1 className="text-center font-sans text-4xl font-bold text-white/90">Requests</h1>
      <Button
        name="Open an example request"
        variant="solid"
        onClick={() => router.push(`/requests/${generateUUID()}`)}
      />
    </div>
  )
}

export default RequestsRootPage
