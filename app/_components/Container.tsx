"use client";
import { useStore } from "@/store/context";
import { TFruit } from "@/types";
import { useEffect } from "react";
import FruitList from "./FruitList";
import FruitJar from "./FruitJar";

export default function Container({ fruits }: { fruits: TFruit[] }) {
  const { setFruits } = useStore();

  useEffect(() => {
    if (fruits) setFruits(fruits);
  }, [fruits]);

  return (
    <>
      <FruitList />
      <FruitJar />
    </>
  );
}
