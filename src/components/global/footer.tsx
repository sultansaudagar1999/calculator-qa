"use client"

import { useEffect, useState } from "react"

export default function Footer() {
  const [currentTime, setCurrentTime] = useState<string>("")

  useEffect(() => {
    // Update time initially
    updateTime()

    // Set up interval to update time every second
    const interval = setInterval(updateTime, 1000)

    // Clean up interval on unmount
    return () => clearInterval(interval)
  }, [])

  const updateTime = () => {
    const now = new Date()
    const timeString = now.toLocaleTimeString()
    setCurrentTime(timeString)
  }

  return (
    <footer className="w-full py-4 px-4 border-t bg-white/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-sm text-gray-600">Made by Tanikesh Sharma</div>
        <div className="text-sm text-gray-600">{currentTime}</div>
      </div>
    </footer>
  )
}

