import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useStore } from "@/store/context";
import { Plus } from "lucide-react";
import { observer } from "mobx-react-lite";
import CaloriesLabel from "@/app/_components/CaloriesLabel";
import { TFruit } from "@/types";

function TableView({ fruits }: { fruits: TFruit[] }) {
  const { addToJar } = useStore();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/5">Name</TableHead>
          <TableHead className="w-1/5">Family</TableHead>
          <TableHead className="w-1/6">Order</TableHead>
          <TableHead className="w-1/6">Genus</TableHead>
          <TableHead className="w-1/6">Calories</TableHead>
          <TableHead className="w-[50px]" />
        </TableRow>
      </TableHeader>
      <TableBody>
        {fruits.map((fruit, index) => (
          <TableRow
            key={`${fruit.id}-${index}`}
            className="group hover:cursor-pointer"
            onClick={() => addToJar(fruit)}
          >
            <TableCell className="font-medium">{fruit.name}</TableCell>
            <TableCell>{fruit.family}</TableCell>
            <TableCell>{fruit.order}</TableCell>
            <TableCell>{fruit.genus}</TableCell>
            <TableCell>
              <CaloriesLabel calories={fruit.nutritions.calories} />
            </TableCell>
            <TableCell className="text-right">
              <Button
                size="icon"
                variant="outline"
                className="text-muted group-hover:bg-green-500 group-hover:border-green-500 group-hover:text-white h-[20px] w-[20px] translate-y-[3px]"
              >
                <Plus />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default observer(TableView);
