import { Button } from "@/components/ui/button";
import { useStore } from "@/store/context";
import { Plus } from "lucide-react";
import { observer } from "mobx-react-lite";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import View from "./View";

function FruitListContent() {
  const { view, groupedFruits, addToJar } = useStore();

  // Flat
  if (Array.isArray(groupedFruits)) {
    return view === "list" ? (
      <View.List fruits={groupedFruits} />
    ) : (
      <View.Table fruits={groupedFruits} />
    );
  }

  // Grouped
  return (
    <div className="flex flex-col gap-2">
      <Accordion type="multiple" className="w-full">
        {Object.keys(groupedFruits).map((category) => (
          <AccordionItem key={category} value={category}>
            <AccordionTrigger className="font-medium">
              <div className="flex gap-2 items-center">
                <Button
                  size="icon"
                  variant="outline"
                  className="text-muted hover:bg-green-500 hover:border-green-500 hover:text-white w-[20px] h-[20px] ml-auto"
                  onClick={(e) => {
                    e.stopPropagation();
                    addToJar(groupedFruits[category]);
                  }}
                >
                  <Plus />
                </Button>
                <span>
                  {category}{" "}
                  <span className="text-xs">
                    ({groupedFruits[category].length})
                  </span>
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              {view === "list" ? (
                <View.List fruits={groupedFruits[category]} />
              ) : (
                <View.Table fruits={groupedFruits[category]} />
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default observer(FruitListContent);
