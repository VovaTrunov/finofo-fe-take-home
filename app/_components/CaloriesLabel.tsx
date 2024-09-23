import { Flame } from "lucide-react";

export default function CaloriesLabel({ calories }: { calories: number }) {
  return (
    <div className="rounded-full bg-accent px-2 h-[20px] w-fit flex gap-1 items-center">
      <Flame size={12}/>
      <p className="text-sm font-bold leading-[20px]">{calories}</p>
      <span className="text-xs leading-[20px]">Cal</span>
    </div>
  );
}
