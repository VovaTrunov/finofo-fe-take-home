"use client";
import { PieChart, Trash } from "lucide-react";
import { useStore } from "@/store/context";
import { observer } from "mobx-react-lite";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";

function ActionBar() {
  const { chartsOpen, clearJar, toggleCharts } = useStore();

  return (
    <div className="flex gap-3 justify-between">
      <Toggle onClick={toggleCharts} defaultChecked={chartsOpen}>
        <PieChart size="18" />
      </Toggle>
      <Button size="icon" variant="ghost" className="px-3" onClick={clearJar}>
        <Trash size="18" />
      </Button>
    </div>
  );
}

export default observer(ActionBar);
