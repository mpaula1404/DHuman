import React, { useState } from "react";
import { TableNomina } from "@/components/Molecules/TableNomina";
import { Pagination } from "@/components/Molecules/PaginationNomina";

interface PaymentData {
  month: string;
  amount: string;
  status: string;
}

const allRows: PaymentData[] = [
  { month: "Enero", amount: "1.200.000", status: "Pagado" },
  { month: "Febrero", amount: "1.200.000", status: "Pagado" },
  { month: "Marzo", amount: "1.200.000", status: "Pagado" },
  { month: "Abril", amount: "1.200.000", status: "Pagado" },
  { month: "Mayo", amount: "1.200.000", status: "Pagado" },
  { month: "Junio", amount: "1.200.000", status: "Pagado" },
  { month: "Julio", amount: "1.200.000", status: "Pagado" },
  { month: "Agosto", amount: "1.200.000", status: "Pagado" },
  { month: "Septiembre", amount: "1.200.000", status: "Pagado" },
  { month: "Octubre", amount: "1.200.000", status: "Pagado" },
];

const rowsPerPage = 5;

export function PaymentTable() {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedRows = allRows.slice(startIndex, startIndex + rowsPerPage);
  const totalPages = Math.ceil(allRows.length / rowsPerPage);

  return (
    <div className="mt-8">
      <table className="table-auto w-5xl border-collapse border rounded-md overflow-hidden shadow-md mx-auto max-w-5xl text-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-6 py-4">Mes</th>
            <th className="border px-6 py-4">Total pagado</th>
            <th className="border px-6 py-4">Estado</th>
            <th className="border px-6 py-4">Notificación</th>
          </tr>
        </thead>
        <tbody>
          {paginatedRows.map((row, i) => (
            <TableNomina
              key={i}
              month={row.month}
              amount={row.amount}
              status={row.status}
              onDownload={() => alert(`Descargando ${row.month}`)}
            />
          ))}
        </tbody>
      </table>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
