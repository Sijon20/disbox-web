"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { HardDrive, Upload, FileBox } from "lucide-react";

export function StorageStats() {
  return (
    <>
      <Card className="p-6 space-y-4">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-primary/10 rounded-lg">
            <HardDrive className="h-6 w-6 text-primary" strokeWidth={1.5} />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Storage Used</p>
            <p className="text-2xl font-bold">4.5 GB</p>
          </div>
        </div>
        <div className="space-y-2">
          <Progress value={45} />
          <p className="text-xs text-muted-foreground">45% of 10 GB used</p>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Upload className="h-6 w-6 text-primary" strokeWidth={1.5} />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Uploaded Today</p>
            <p className="text-2xl font-bold">256 MB</p>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-primary/10 rounded-lg">
            <FileBox className="h-6 w-6 text-primary" strokeWidth={1.5} />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Total Files</p>
            <p className="text-2xl font-bold">124</p>
          </div>
        </div>
      </Card>
    </>
  );
}