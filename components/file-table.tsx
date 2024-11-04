"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { 
  Download, 
  MoreVertical, 
  Trash2, 
  Share2, 
  Folder, 
  File, 
  ChevronRight 
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface FileOrFolder {
  id: string;
  name: string;
  type: string;
  size: string;
  uploadedAt: string;
  isFolder: boolean;
  parentId: string | null;
}

// Mock data - replace with actual API calls
const mockItems: FileOrFolder[] = [
  {
    id: "folder-1",
    name: "Documents",
    type: "Folder",
    size: "--",
    uploadedAt: "2024-01-15",
    isFolder: true,
    parentId: null,
  },
  {
    id: "folder-2",
    name: "Images",
    type: "Folder",
    size: "--",
    uploadedAt: "2024-01-15",
    isFolder: true,
    parentId: null,
  },
  {
    id: "1",
    name: "project-presentation.pdf",
    type: "PDF",
    size: "2.4 MB",
    uploadedAt: "2024-01-15",
    isFolder: false,
    parentId: null,
  },
  {
    id: "2",
    name: "profile-picture.png",
    type: "Image",
    size: "856 KB",
    uploadedAt: "2024-01-14",
    isFolder: false,
    parentId: null,
  },
];

interface FileTableProps {
  filter: string;
}

export function FileTable({ filter }: FileTableProps) {
  const [items, setItems] = useState(mockItems);
  const [currentFolder, setCurrentFolder] = useState<string | null>(null);
  const [breadcrumbs, setBreadcrumbs] = useState<{ id: string | null; name: string }[]>([
    { id: null, name: "Home" },
  ]);

  const filteredItems = items.filter((item) => item.parentId === currentFolder);

  const handleDownload = (fileId: string) => {
    toast.success("File download started");
  };

  const handleDelete = (itemId: string) => {
    setItems(items.filter((item) => item.id !== itemId));
    toast.success("Item deleted successfully");
  };

  const handleShare = (itemId: string) => {
    // Simulate generating a share link
    const shareLink = `https://disbox.app/share/${itemId}`;
    navigator.clipboard.writeText(shareLink);
    toast.success("Share link copied to clipboard");
  };

  const handleFolderClick = (folderId: string, folderName: string) => {
    setCurrentFolder(folderId);
    setBreadcrumbs([...breadcrumbs, { id: folderId, name: folderName }]);
  };

  const handleBreadcrumbClick = (index: number) => {
    const newBreadcrumbs = breadcrumbs.slice(0, index + 1);
    setBreadcrumbs(newBreadcrumbs);
    setCurrentFolder(newBreadcrumbs[newBreadcrumbs.length - 1].id);
  };

  return (
    <div className="space-y-4">
      {/* Breadcrumb Navigation */}
      <div className="px-6 flex items-center gap-2 text-sm text-muted-foreground">
        {breadcrumbs.map((crumb, index) => (
          <div key={index} className="flex items-center">
            {index > 0 && <ChevronRight className="h-4 w-4 mx-1" />}
            <button
              onClick={() => handleBreadcrumbClick(index)}
              className={cn(
                "hover:text-foreground transition-colors",
                index === breadcrumbs.length - 1 && "text-foreground font-medium"
              )}
            >
              {crumb.name}
            </button>
          </div>
        ))}
      </div>

      <div className="relative overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Modified</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {item.isFolder ? (
                      <Folder className="h-4 w-4 text-blue-500" strokeWidth={1.5} />
                    ) : (
                      <File className="h-4 w-4 text-gray-500" strokeWidth={1.5} />
                    )}
                    <button
                      className={cn(
                        "font-medium hover:text-primary transition-colors",
                        item.isFolder && "cursor-pointer"
                      )}
                      onClick={() => {
                        if (item.isFolder) {
                          handleFolderClick(item.id, item.name);
                        }
                      }}
                    >
                      {item.name}
                    </button>
                  </div>
                </TableCell>
                <TableCell>{item.type}</TableCell>
                <TableCell>{item.size}</TableCell>
                <TableCell>{item.uploadedAt}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {!item.isFolder && (
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDownload(item.id)}
                      >
                        <Download className="h-4 w-4" strokeWidth={1.5} />
                      </Button>
                    )}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" strokeWidth={1.5} />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleShare(item.id)}>
                          <Share2 className="h-4 w-4 mr-2" strokeWidth={1.5} />
                          Share
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem 
                          className="text-destructive"
                          onClick={() => handleDelete(item.id)}
                        >
                          <Trash2 className="h-4 w-4 mr-2" strokeWidth={1.5} />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}