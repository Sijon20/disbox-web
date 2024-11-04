"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FileFilterProps {
  value: string;
  onChange: (value: string) => void;
}

export function FileFilter({ value, onChange }: FileFilterProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Filter files" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Files</SelectItem>
        <SelectItem value="images">Images</SelectItem>
        <SelectItem value="documents">Documents</SelectItem>
        <SelectItem value="videos">Videos</SelectItem>
        <SelectItem value="others">Others</SelectItem>
      </SelectContent>
    </Select>
  );
}