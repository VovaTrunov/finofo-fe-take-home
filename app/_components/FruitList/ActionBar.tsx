"use client";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { List, Table } from "lucide-react";
import { TGroupBy, TView } from "@/types";
import { useStore } from "@/store/context";
import { observer } from "mobx-react-lite";

function ActionBar() {
  const { view, setView, setGroupBy } = useStore();

  return (
    <div className="flex gap-3 justify-between items-end px-10">
      <div className="flex flex-col gap-3">
        <span className="text-xs text-white/70">Group By</span>
        <Select
          name="group-by"
          onValueChange={(value) => setGroupBy(value as TGroupBy)}
          defaultValue="none"
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Group By" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none">None</SelectItem>
            <SelectItem value="family">Family</SelectItem>
            <SelectItem value="order">Order</SelectItem>
            <SelectItem value="genus">Genus</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex gap-3">
          <ToggleGroup
            type="single"
            defaultValue={view}
            onValueChange={(value) => setView(value as TView)}
          >
            <ToggleGroupItem value="table" aria-label="Toggle table view">
              <Table size={18} />
            </ToggleGroupItem>
            <ToggleGroupItem value="list" aria-label="Toggle list view">
              <List size={18} />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    </div>
  );
}

export default observer(ActionBar);
