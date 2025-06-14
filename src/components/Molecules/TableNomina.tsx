import React from "react";
import { Cell } from "@/components/Atoms/CeldaNomina";
import { Text } from "@/components/Atoms/TextNomina";
import { Button } from "@/components/Atoms/ButtonNomina";

interface TableNominaProps {
  month: string;
  amount: string;
  status: string;
  onDownload: () => void;
}

export function TableNomina({
  month,
  amount,
  status,
  onDownload,
}: TableNominaProps) {
  return (
    <tr>
      <Cell>
        <Text>{month}</Text>
      </Cell>
      <Cell>
        <Text>{amount}</Text>
      </Cell>
      <Cell>
        <Text>{status}</Text>
      </Cell>
      <Cell>
        <Button label="Descargar" onClick={onDownload} />
      </Cell>
    </tr>
  );
}
export default TableNomina;
