"use client";

import { useState } from "react";
import { Terminal as TerminalIcon } from "lucide-react";
import { Button } from "@/components/ui/button"; // Assume Button is already implemented
import { Terminal } from "./terminal"; // Import the Terminal component

export function TerminalButton() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  const toggleTerminal = () => {
    setIsTerminalOpen((prevState) => !prevState); // Toggle terminal visibility
  };

  return (
    <>
      {/* Terminal toggle button */}
      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-4 right-4 z-50"
        onClick={toggleTerminal}
      >
        <TerminalIcon className="h-4 w-4" />
      </Button>

      {/* Render Terminal when open */}
      {isTerminalOpen && <Terminal onClose={() => setIsTerminalOpen(false)} />}
    </>
  );
}
