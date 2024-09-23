"use client";
import { useStore } from "@/store/context";
import { observer } from "mobx-react-lite";
import CaloriesLabel from "@/app/_components/CaloriesLabel";
import { Cherry, Flame, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Chart from "@/app/_components/FruitJar/Chart";
import ActionBar from "./ActionBar";

function FruitJar() {
  const { jar, totalCalories, removeFromJar } = useStore();

  if (jar.length === 0)
    return (
      <div className="w-1/2 flex flex-col p-10">
        <h1 className="font-bold text-2xl">Fruit Jar</h1>
        <div className="grow grid place-items-center place-content-center">
          <Cherry size={64} className="text-accent mb-3" />
          <h3 className="text-lg font-medium">The jar is empty</h3>
          <p className="text-white/50 text-sm">Add some fruits</p>
        </div>
      </div>
    );

  return (
    <>
      <div className="w-1/2 flex flex-col justify-between">
        <div className="flex justify-between sticky top-0 bg-background p-10 pb-5 z-10">
          <h1 className="font-bold text-2xl">Fruit Jar</h1>
          <p className="text-2xl font-bold flex gap-1 items-center">
            <Flame size={20} />
            {totalCalories} Cal
          </p>
        </div>
        <div className="grow p-10 pt-0 mt-5 overflow-auto no-scrollbar">
          <ActionBar />
          <ul className="mt-5">
            {jar.map((fruit, index) => (
              <li
                key={`${fruit.id}-${index}`}
                className="flex gap-3 py-2 hover:cursor-pointer group items-center"
                onClick={() => removeFromJar(index)}
              >
                <p className="transition group-hover:text-accent">
                  {fruit.name}
                </p>
                <CaloriesLabel calories={fruit.nutritions.calories} />
                <Button
                  size="icon"
                  variant="outline"
                  className="text-muted group-hover:bg-red-500 group-hover:border-red-500 group-hover:text-white w-[20px] h-[20px] ml-auto"
                >
                  <Minus />
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <Chart />
      </div>
    </>
  );
}

export default observer(FruitJar);
