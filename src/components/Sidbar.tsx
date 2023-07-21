import { Home as HomeIcon, Search, Library } from "lucide-react";

export function Sidbar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full" />
        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
        <div className="w-3 h-3 bg-green-500 rounded-full" />
      </div>
      <nav className="space-y-5 mt-10">
        <a
          href=""
          className="flex items-center gap-3 text-xs font-semibold text-zinc-200"
        >
          <HomeIcon />
          Home
        </a>
        <a
          href=""
          className="flex items-center gap-3 text-xs font-semibold text-zinc-200"
        >
          <Search />
          Search
        </a>
        <a
          href=""
          className="flex items-center gap-3 text-xs font-semibold text-zinc-200"
        >
          <Library />
          Your Library
        </a>
      </nav>
      <nav className="flex flex-col gap-3 mt-6 pt-6 border-t border-zinc-800">
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Músicas Curtidas
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          This Is T-Rex
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          This Is Roddy Ricch
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          African Heat
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          This Is Justin Bieber
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          This Is KayBlack
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          This Is Post Malone
        </a>
      </nav>
    </aside>
  );
}
