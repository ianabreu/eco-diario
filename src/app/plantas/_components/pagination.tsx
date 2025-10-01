"use client";
import {
  Pagination as PaginationComponent,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
interface PaginationProps {
  meta: {
    total: number;
    last_page: number;
    current_page: number;
    has_next_page: boolean;
    has_previous_page: boolean;
  };
}
export default function Pagination({
  meta: { current_page, has_next_page, has_previous_page, last_page, total },
}: PaginationProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const maxVisiblePages = 3;
  const getPageNumbers = () => {
    const pages = [];
    const half = Math.floor(maxVisiblePages / 2);
    let start = Math.max(current_page - half, 1);
    let end = Math.min(current_page + half, last_page);

    if (end - start + 1 < maxVisiblePages) {
      if (start === 1) {
        end = Math.min(start + maxVisiblePages - 1, last_page);
      } else {
        start = Math.max(end - maxVisiblePages + 1, 1);
      }
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  function handleClickPage(pageNumber: number) {
    const params = new URLSearchParams(searchParams);
    if (pageNumber > 1 && pageNumber <= last_page) {
      params.set("page", pageNumber.toString());
    } else {
      params.delete("page");
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <PaginationComponent>
      <PaginationContent>
        <PaginationItem className="cursor-pointer">
          <PaginationPrevious
            label="Anterior"
            onClick={() => handleClickPage(current_page - 1)}
          />
        </PaginationItem>
        {pageNumbers.map((value, index) => (
          <PaginationItem key={index} className="cursor-pointer">
            <PaginationLink
              isActive={value === current_page}
              onClick={() => handleClickPage(value)}
            >
              {value}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem className="cursor-pointer">
          <PaginationNext
            label="Próximo"
            onClick={() => handleClickPage(current_page + 1)}
          />
        </PaginationItem>
        {/* <PaginationItem>
          <PaginationPrevious />
        </PaginationItem>
        <PaginationItem className="hidden md:inline-flex">
          <PaginationLink isActive={true}>1</PaginationLink>
        </PaginationItem>
        <PaginationItem className="hidden md:inline-flex">
          <PaginationLink>2</PaginationLink>
        </PaginationItem>
        <PaginationItem className="hidden md:inline-flex">
          <PaginationLink>3</PaginationLink>
        </PaginationItem>
        <PaginationItem className="hidden md:inline-flex">
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem className="hidden md:inline-flex">
          <PaginationLink>8</PaginationLink>
        </PaginationItem>
        <PaginationItem className="hidden md:inline-flex">
          <PaginationLink>9</PaginationLink>
        </PaginationItem>
        <PaginationItem className="hidden md:inline-flex">
          <PaginationLink>10</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext />
        </PaginationItem> */}
      </PaginationContent>
    </PaginationComponent>
  );
}
