import Image from "next/image";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

import { Sidbar } from "@/components/Sidbar";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidbar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-3">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a
              href="#"
              className="bg-white/10 flex items-center gap-4 group  rounded overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image
                src="/album.png"
                width={104}
                height={104}
                alt="Capa do album cor de agua"
              />
              <strong>Cor de Agua</strong>
              <button className="w-12 h-12 flex items-center justify-center pt-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/10 flex items-center gap-4 group rounded overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image
                src="/album.png"
                width={104}
                height={104}
                alt="Capa do album cor de agua"
              />
              <strong>Cor de Agua</strong>
              <button className="w-12 h-12 flex items-center justify-center pt-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/10 flex items-center gap-4 group rounded overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image
                src="/album.png"
                width={104}
                height={104}
                alt="Capa do album cor de agua"
              />
              <strong>Cor de Agua</strong>
              <button className="w-12 h-12 flex items-center justify-center pt-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/10 flex items-center gap-4 group rounded overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image
                src="/album.png"
                width={104}
                height={104}
                alt="Capa do album cor de agua"
              />
              <strong>Cor de Agua</strong>
              <button className="w-12 h-12 flex items-center justify-center pt-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/10 flex items-center gap-4 group rounded overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image
                src="/album.png"
                width={104}
                height={104}
                alt="Capa do album cor de agua"
              />
              <strong>Cor de Agua</strong>
              <button className="w-12 h-12 flex items-center justify-center pt-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/10 flex items-center gap-4 group rounded overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image
                src="/album.png"
                width={104}
                height={104}
                alt="Capa do album cor de agua"
              />
              <strong>Cor de Agua</strong>
              <button className="w-12 h-12 flex items-center justify-center pt-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-3xl mt-10">
            Made for Mouzinho Raimundo
          </h2>

          <div className="grid grid-cols-8 gap-4 mt-4">
            <a
              href="#"
              className="flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10"
            >
              <Image
                src="/album.png"
                className="w-full"
                width={120}
                height={120}
                alt="Capa do album cor de agua"
              />
              <strong className="font-semibold">Cor de Agua</strong>
              <span className="text-xs text-zinc-500">Álbum. T-Rex</span>
            </a>
            <a
              href="#"
              className="flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10"
            >
              <Image
                src="/album.png"
                className="w-full"
                width={120}
                height={120}
                alt="Capa do album cor de agua"
              />
              <strong className="font-semibold">Cor de Agua</strong>
              <span className="text-xs text-zinc-500">Álbum. T-Rex</span>
            </a>
            <a
              href="#"
              className="flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10"
            >
              <Image
                src="/album.png"
                className="w-full"
                width={120}
                height={120}
                alt="Capa do album cor de agua"
              />
              <strong className="font-semibold">Cor de Agua</strong>
              <span className="text-xs text-zinc-500">Álbum. T-Rex</span>
            </a>
            <a
              href="#"
              className="flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10"
            >
              <Image
                src="/album.png"
                className="w-full"
                width={120}
                height={120}
                alt="Capa do album cor de agua"
              />
              <strong className="font-semibold">Cor de Agua</strong>
              <span className="text-xs text-zinc-500">Álbum. T-Rex</span>
            </a>
            <a
              href="#"
              className="flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10"
            >
              <Image
                src="/album.png"
                className="w-full"
                width={120}
                height={120}
                alt="Capa do album cor de agua"
              />
              <strong className="font-semibold">Cor de Agua</strong>
              <span className="text-xs text-zinc-500">Álbum. T-Rex</span>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
