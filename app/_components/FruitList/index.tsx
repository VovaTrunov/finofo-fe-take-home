"use client";
import ActionBar from "./ActionBar";
import { observer } from "mobx-react-lite";
import Content from "./Content";
import { useStore } from "@/store/context";
import FruitListSkeleton from "./Skeleton";

function FruitList() {
  const { fruits } = useStore();

  if (!fruits.length)
    return (
      <div className="w-1/2 overflow-auto border-r no-scrollbar">
        <h1 className="font-bold text-2xl p-10 pb-5 sticky top-0 bg-background z-10">
          Fruit List
        </h1>
        <FruitListSkeleton />
      </div>
    );

  return (
    <div className="w-1/2 overflow-auto border-r no-scrollbar">
      <h1 className="font-bold text-2xl p-10 pb-5 sticky top-0 bg-background z-10">
        Fruit List
      </h1>
      <ActionBar />
      <div className="p-10 pt-0 mt-5">
        <Content />
      </div>
    </div>
  );
}

export default observer(FruitList);
