"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Webhook, ArrowRight, Copy, Check } from "lucide-react";
import { toast } from "sonner";
import { Navbar } from "@/components/navbar";
import { useRouter } from "next/navigation";

export default function SetupPage() {
  const [webhook, setWebhook] = useState("");
  const [copied, setCopied] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!webhook) {
      toast.error("Please enter a webhook URL");
      return;
    }
    // Here you would typically validate and store the webhook
    toast.success("Webhook configured successfully");
    router.push("/dashboard");
  };

  const copyCommand = () => {
    navigator.clipboard.writeText("/webhook");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast.success("Command copied to clipboard");
  };

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      
      <div className="flex-1 container max-w-4xl pt-24 pb-16">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Set Up Your Storage
            </h1>
            <p className="text-muted-foreground">
              Configure your Discord webhook to start using Disbox for file storage.
            </p>
          </div>

          <div className="grid gap-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">1. Create a Webhook</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Webhook className="h-6 w-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <div className="space-y-1.5">
                    <p className="font-medium">In your Discord server:</p>
                    <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                      <li>Right-click on a channel</li>
                      <li>Select "Edit Channel"</li>
                      <li>Click "Integrations"</li>
                      <li>Click "Create Webhook"</li>
                      <li>Name it "Disbox Storage"</li>
                      <li>Copy the webhook URL</li>
                    </ol>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    className="gap-2"
                    onClick={copyCommand}
                  >
                    {copied ? (
                      <Check className="h-4 w-4" strokeWidth={1.5} />
                    ) : (
                      <Copy className="h-4 w-4" strokeWidth={1.5} />
                    )}
                    Copy Discord Command
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">
                2. Configure Your Webhook
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Input
                    type="url"
                    placeholder="https://discord.com/api/webhooks/..."
                    value={webhook}
                    onChange={(e) => setWebhook(e.target.value)}
                    className="w-full"
                  />
                  <p className="text-sm text-muted-foreground">
                    Your webhook URL will be encrypted and stored securely.
                  </p>
                </div>
                <Button type="submit" className="w-full gap-2">
                  Complete Setup
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}