"use client";

import React, { useState } from "react";
import { DirectoryMegaMenu } from "@/components/DirectoryMegaMenu";
import { ConsultationModal } from "@/components/ConsultationModal";

export default function MenuPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      <DirectoryMegaMenu
        onOpenConsultation={() => setModalOpen(true)}
      />

      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultTrack="general"
      />
    </main>
  );
}
