"use client";
// ParentComponent.tsx
import React, { useState } from "react";
import Dialog from "./Dialog";
import { Button } from "@/components/ui/button";

const ButtonComponent: React.FC = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  
  return (
    <>
      <div className="flex justify-end items-center">
        <Button variant="outline" onClick={() => setDialogOpen(true)}>
          Create faq
        </Button>
      </div>
      <Dialog
        isOpen={isDialogOpen}
        onClose={handleDialogClose}
        heading="Create FAQ"
      />
    </>
  );
};

export default ButtonComponent;
