import { useSearchParams } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  PaginationContent,
  PaginationItem,
  Pagination as Root,
} from "@/components/ui/pagination";
import { MetaData } from "@/models/query.model";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

export function Pagination({ meta }: { meta: MetaData }): React.ReactElement {
  const [, setParams] = useSearchParams(new URLSearchParams(location.search));

  function handlePageChange(page: number): void {
    setParams((state) => {
      state.set("page", page.toString());
      return state;
    });
  }

  console.log(meta, handlePageChange);

  return (
    <Root className="flex justify-end">
      <PaginationContent>
        <PaginationItem>
          <Button
            onClick={() => handlePageChange(1)}
            variant="ghost"
            size="icon"
            className="border"
          >
            <ChevronsLeft />
          </Button>
        </PaginationItem>
        <PaginationItem>
          <Button
            variant="ghost"
            size="icon"
            className="border"
            onClick={() => {
              if (meta?.currentPage > 1)
                handlePageChange(meta?.currentPage - 1);
            }}
          >
            <ChevronLeft />
          </Button>
        </PaginationItem>
        <PaginationItem>
          <Button
            variant="ghost"
            size="icon"
            className="border"
            onClick={() => {
              if (meta?.currentPage <= meta?.lastPage)
                handlePageChange(meta?.currentPage + 1);
            }}
          >
            <ChevronRight />
          </Button>
        </PaginationItem>
        <PaginationItem>
          <Button
            variant="ghost"
            size="icon"
            className="border"
            onClick={() => handlePageChange(meta?.lastPage)}
          >
            <ChevronsRight />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Root>
  );
}
