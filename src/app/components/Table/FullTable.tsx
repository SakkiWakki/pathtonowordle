// src/components/Table/GameTable.tsx
import React from "react";
import TableHeader from "@/components/Table/TableHeader";
import GuessTable from "@/components/Table/GuessTable";
import './FullTable.css';
import { Attribute, Character, Thresholds } from "@/types";

interface GameTableProps {
  attributeKeys: string[];
  guesses: Attribute[][];
  targetCharacter: Character;
  thresholds: Thresholds;
  reverseTable: boolean;
  onReverseChange: (newReverse: boolean) => void;
}

const GameTable: React.FC<GameTableProps> = ({
  attributeKeys,
  guesses,
  targetCharacter,
  thresholds,
  reverseTable,
  onReverseChange,
}) => {
  if (guesses.length === 0) return null;

  return (
    <div className="flex flex-col full-table">
      <TableHeader
        attributeKeys={attributeKeys}
        reversed={reverseTable}
        onReverseChange={onReverseChange}
      />
      <GuessTable
        guesses={guesses}
        target_guess={targetCharacter}
        thresholds={thresholds}
        reverse={reverseTable}
      />
    </div>
  );
};

export default GameTable;
