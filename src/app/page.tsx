import Link from "next/link";
import Carousel from "@/components/carousel/Carousel";
import { list } from "@vercel/blob";
import VideoPlayer from "@/components/video-player/VideoPlayer";
import VideoPlayerWithControls from "@/components/video-player/VideoPlayerWithControls";
import { DialogPreview } from "@/components/ww-dialog/DialogPreview";

const images = [
  {
    src: "weweb/main.png",
    alt: "Manage your app logic and data from a single place",
  },
  {
    src: "weweb/workflows.png",
    alt: "Build your logic and automation with the workflow editor",
  },
  // {
  //   src: "weweb/icons.png",
  //   alt: "Browse and use the most popular icon libraries",
  // },
  {
    src: "weweb/edition-panel.png",
    alt: "Create states, components or edit your elements visually",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="max-w-2xl mx-auto">
        <div className="container mx-auto flex flex-col justify-start items-center text-center mt-[64px] pb-[240px]">
          <h1 className="mb-4">
            A design engineer with the goal of building functional and beautiful
            experiences.
          </h1>

          <span className="px-8 font-mono text-xs uppercase text-secondary">
            Previously at{" "}
            <a
              href="https://weweb.io"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              weweb
            </a>{" "}
            ,{" "}
            <a
              href="https://akkio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              akkio
            </a>{" "}
            and a world-renowned bank.
          </span>

          {/* <div className="flex gap-2">
            <a
              href="https://calendly.com/lluka-ivanovic/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-neutral-900 text-white px-3 py-0.5 rounded-full hover:bg-neutral-700 hover:text-neutral-300 transition-colors"
            >
              Book a call
            </a>
            <button
              id="emailButton"
              className="rounded-full text-neutral-400 px-3 cursor-pointer hover:bg-neutral-900 hover:text-neutral-300 transition-colors"
            >
              Copy email
            </button>
          </div> */}
        </div>
      </section>

      <section className="max-w-4xl mx-auto">
        <div className="container flex flex-row items-center justify-between pb-[24px]">
          <div className="rounded-md flex flex-row items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 16 16"
              className="rounded-sm overflow-hidden text-neutral-800"
            >
              <path fill="currentColor" d="M0 0h16v16H0z" />
              <path
                fill="white"
                d="M9.746 9.473H6.291a.117.117 0 0 0-.12.115v2.294c0 .063.054.115.12.115h5.707L9.746 9.473Z"
              />
              <path
                fill="white"
                d="M9.746 6.585v2.89l2.252 2.524V6.585a.117.117 0 0 0-.12-.115H9.867a.117.117 0 0 0-.12.115ZM6.25 9.414v-2.89L3.998 4v5.414c0 .064.054.115.12.115H6.13a.117.117 0 0 0 .119-.115Z"
              />
              <path
                fill="white"
                d="M6.211 6.632h3.4c.083 0 .15-.054.15-.12V4.12c0-.066-.067-.12-.15-.12H4.003l2.21 2.632Z"
              />
            </svg>
            weweb
          </div>
          <span className="text-secondary text-xs font-mono uppercase">
            Founding Designer · 2022 - 2025
          </span>
        </div>

        <div className=" pb-[240px] flex flex-col gap-[120px]">
          <div>
            <Carousel images={images} />
          </div>

          <div>
            <div className="rounded-md overflow-hidden">
              <VideoComponent fileName="ww-ai" aspectRatio="16/10" />
            </div>

            <div className="mt-4 font-mono text-xs uppercase text-secondary text-center">
              AI chatbot that helps you build web applications
            </div>
          </div>

          <div>
            <div className="rounded-md overflow-hidden">
              <DialogPreview />
            </div>
            <div className="mt-4 font-mono text-xs uppercase text-secondary text-center">
              dialog, one of 50+ components available in the toolkit
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto pb-[240px]">
        <div className="container flex flex-row items-center justify-between pb-6">
          <div className="rounded-md flex flex-row items-center justify-center gap-2">
            <img
              src="/akk-logo.png"
              alt="Akkio"
              className="w-6 h-6 rounded-sm overflow-hidden"
            />
            Akkio
          </div>
          <span className="text-neutral-400 text-sm">Product Designer</span>
        </div>

        <div className="rounded-xl overflow-hidden aspect-[16/9]">
          <img
            src="/akk.png"
            alt="Weweb"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </div>
  );
}

async function VideoComponent({
  fileName,
  aspectRatio,
}: {
  fileName: string;
  aspectRatio: string;
}) {
  return <VideoPlayer url={fileName} aspectRatio={aspectRatio} />;
}

async function VideoComponentWithControls({ fileName }: { fileName: string }) {
  return <VideoPlayerWithControls url={fileName} aspectRatio="16/10" />;
}
