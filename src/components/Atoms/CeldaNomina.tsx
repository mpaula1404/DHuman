import { ReactNode } from "react";

interface CellProps {
  children: ReactNode;
}

export function Cell({ children }: CellProps) {
  return <td className="border px-4 py-2 text-center">{children}</td>;
}
