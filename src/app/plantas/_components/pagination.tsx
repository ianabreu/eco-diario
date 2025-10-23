"use client";
import {
  Pagination as PaginationComponent,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
interface PaginationProps {
  meta: {
    last_page: number;
    current_page: number;
  };
}
export default function Pagination({
  meta: { current_page, last_page },
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
    replace(`${pathname}?${params.toString()}`, { scroll: true });
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
      </PaginationContent>
    </PaginationComponent>
  );
}
