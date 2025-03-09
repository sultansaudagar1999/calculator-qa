"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface CalculatorTabsProps {
  activeTab: "basic" | "scientific"
  setActiveTab: (tab: "basic" | "scientific") => void
}

export function CalculatorTabs({ activeTab, setActiveTab }: CalculatorTabsProps) {
  return (
    <div className="border-b">
      <Tabs
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as "basic" | "scientific")}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="basic">Basic</TabsTrigger>
          <TabsTrigger value="scientific">Scientific</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  )
}

