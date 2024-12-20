import { Search } from "lucide-react";
import React from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function InputSearch() {
  const SearchInputRef = React.useRef<HTMLInputElement>(null);

  const [, setSearchParams] = useSearchParams();

  return (
    <div className="flex-1 inline-flex space-x-2 w-full">
      <Input
        placeholder="Pesquisar"
        onChange={(event) => {
          if (!event.currentTarget.value) {
            setSearchParams((state) => {
              state.delete("search");
              return state;
            });
            return;
          }
        }}
        onKeyUp={(event) => {
          if (!SearchInputRef.current?.value || !(event.key === "Enter"))
            return;

          if (event.key === "Enter") {
            const search = SearchInputRef.current?.value;
            setSearchParams((state) => {
              state.set("page", "1");
              state.set("search", search);
              return state;
            });
          }
        }}
        ref={SearchInputRef}
      />
      <Button
        // className="p-2"
        // variant="ghost"
        size="icon"
        className="p-2"
        onClick={() => {
          if (!SearchInputRef.current?.value) return;
          const search = SearchInputRef.current?.value;
          setSearchParams((state) => {
            state.set("page", "1");
            state.set("search", search);
            return state;
          });
        }}
      >
        <Search className="w-4 h-4" />
      </Button>
    </div>
  );
}
