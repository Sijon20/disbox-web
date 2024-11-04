import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { FileBox, Cloud, Lock, Zap, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container flex flex-col items-center justify-center space-y-8 pt-24 pb-16 md:pt-32 md:pb-24 text-center">
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Store Your Files Using <span className="text-primary">Discord</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Transform your Discord server into a powerful cloud storage solution. Fast, secure, and completely free.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button size="lg" className="gap-2" asChild>
              <Link href="/setup">
                <FileBox className="h-5 w-5" strokeWidth={1.5} />
                Get Started
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Download className="h-5 w-5" strokeWidth={1.5} />
              Download Client
            </Button>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="relative w-full max-w-5xl aspect-video rounded-lg overflow-hidden border bg-muted">
          <Image
            src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070"
            alt="Disbox Interface"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center space-y-4 p-6">
            <div className="p-3 rounded-full bg-primary/10">
              <Cloud className="h-6 w-6 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold">Unlimited Storage</h3>
            <p className="text-muted-foreground">
              Leverage Discord's infrastructure for unlimited file storage potential
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4 p-6">
            <div className="p-3 rounded-full bg-primary/10">
              <Lock className="h-6 w-6 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold">Secure & Private</h3>
            <p className="text-muted-foreground">
              Your files are encrypted and stored securely in your Discord server
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4 p-6">
            <div className="p-3 rounded-full bg-primary/10">
              <Zap className="h-6 w-6 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold">Lightning Fast</h3>
            <p className="text-muted-foreground">
              Quick uploads and downloads powered by Discord's CDN
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}