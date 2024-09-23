import { Button } from "@/components/ui/button";
import { useStore } from "@/store/context";
import { Plus } from "lucide-react";
import { observer } from "mobx-react-lite";
import CaloriesLabel from "@/app/_components/CaloriesLabel";
import { TFruit } from "@/types";

function ListView({ fruits }: { fruits: TFruit[] }) {
  const { addToJar } = useStore();

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li
          key={`${fruit.id}-${index}`}
          className="flex gap-3 py-2 hover:cursor-pointer group items-center"
          onClick={() => addToJar(fruit)}
        >
          <p className="transition group-hover:text-accent">{fruit.name}</p>
          <CaloriesLabel calories={fruit.nutritions.calories} />
          <Button
            size="icon"
            variant="outline"
            className="text-muted group-hover:bg-green-500 group-hover:border-green-500 group-hover:text-white w-[20px] h-[20px] ml-auto"
          >
            <Plus />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default observer(ListView);
