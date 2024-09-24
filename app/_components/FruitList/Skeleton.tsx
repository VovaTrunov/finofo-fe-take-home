import { Skeleton } from "@/components/ui/skeleton";

function FruitListSkeleton() {
  return (
    <>
      <div className="flex justify-between items-end px-10">
        <div>
          <Skeleton className="h-[15px] w-[50px] mb-3" />
          <Skeleton className="h-[33px] w-[180px]" />
        </div>
        <div className="flex gap-1">
          <Skeleton className="h-[33px] w-[40px]" />
          <Skeleton className="h-[33px] w-[40px]" />
        </div>
      </div>
      <div className="flex flex-col px-10 gap-3 mt-5">
        {[...new Array(10)].map((_, index) => {
          const width = Math.floor(Math.random() * 100) + 200;

          return (
            <div className="flex justify-between" key={index}>
              <Skeleton className="h-[30px]" style={{ width }} />
              <Skeleton className="h-[30px] w-[30px]" />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default FruitListSkeleton;
