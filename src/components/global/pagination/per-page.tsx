import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams } from "react-router-dom";

export function PerPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div className="inline-flex items-center space-x-4">
      <span className="font-medium">Itens por página </span>
      <Select
        defaultValue={searchParams.get("per_page") || "10"}
        onValueChange={(value) => {
          setSearchParams((state) => {
            state.set("per_page", value);
            return state;
          });
        }}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="10">10</SelectItem>
          <SelectItem value="20">20</SelectItem>
          <SelectItem value="30">30</SelectItem>
          <SelectItem value="40">40</SelectItem>
          <SelectItem value="50">50</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
