import SubstanceCalculator from "@/components/SubstanceCalculator";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-24 p-6 md:p-24 bg-white dark:bg-black relative">
      <div className="absolute top-6 right-6">
        <ThemeToggle />
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex flex-col gap-4 mb-12">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 bg-clip-text text-transparent mb-4">
            CanUMix
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-lg mx-auto">
            Check interactions between substances before you combine them. 
            <br/>
            <span className="text-sm opacity-75">Stay safe, stay informed.</span>
          </p>
        </div>
      </div>

      <SubstanceCalculator />
    </main>
  );
}
