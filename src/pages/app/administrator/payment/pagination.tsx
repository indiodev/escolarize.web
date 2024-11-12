import { useSearchParams } from 'react-router-dom';

import {
	PaginationContent,
	PaginationItem,
	Pagination as Root,
} from '@/components/ui/pagination';
import { MetaData } from '@/models/query.model';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

export function Pagination({
	meta,
}: {
	meta: MetaData;
}): React.ReactElement {
	const [, setParams] = useSearchParams(new URLSearchParams(location.search));

	const handlePageChange = (page: number): void => {
		setParams((state) => {
			state.set('page', page.toString());
			return state;
		});
	};

  console.log(meta, handlePageChange)

	return (
    <Root className='flex justify-end'>
      <PaginationContent>
        <PaginationItem>
          <Button>
            <ChevronsLeft />
          </Button>
        </PaginationItem>
        <PaginationItem>
          <Button>
            <ChevronLeft />
          </Button>
        </PaginationItem>
        <PaginationItem>
          <Button>
            <ChevronRight />
          </Button>
        </PaginationItem>
        <PaginationItem>
          <Button>
            <ChevronsRight />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Root>
	);
}
