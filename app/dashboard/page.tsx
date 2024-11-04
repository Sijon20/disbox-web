"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { FileTable } from "@/components/file-table";
import { UploadButton } from "@/components/upload-button";
import { StorageStats } from "@/components/storage-stats";
import { FileFilter } from "@/components/file-filter";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function DashboardPage() {
  const [filter, setFilter] = useState("all");

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      
      <div className="flex-1 container py-8">
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">Manage your stored files</p>
            </div>
            <UploadButton />
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <StorageStats />
          </div>

          <Card>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Files</h2>
                <FileFilter value={filter} onChange={setFilter} />
              </div>
            </div>
            <Separator />
            <FileTable filter={filter} />
          </Card>
        </div>
      </div>
    </main>
  );
}