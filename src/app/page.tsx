import Link from "next/link";
import Carousel from "@/components/carousel/Carousel";
import { list } from "@vercel/blob";
import VideoPlayer from "@/components/video-player/VideoPlayer";
import VideoPlayerWithControls from "@/components/video-player/VideoPlayerWithControls";
import { DialogPreview } from "@/components/ww-dialog/DialogPreview";
import Image from "next/image";
import TestStreamingVideo from "@/components/TestStreamingVideo";

const images = [
  {
    src: "weweb/main.png",
    alt: "Manage your app logic and data from a single place",
    progressColor: "white",
    dotColor: "black",
  },
  {
    src: "weweb/workflows.png",
    alt: "Build your logic and automation with the workflow editor",
    progressColor: "#ED8D36",
    dotColor: "black",
  },

  {
    src: "weweb/edition-panel.png",
    alt: "Create states, components or edit your elements visually",
    progressColor: "#8F79F1",
    dotColor: "black",
  },
  {
    fileName: "ww-ai",
    aspectRatio: "16/10",
    alt: "AI-powered features in WeWeb",
    duration: 20000, // 8 seconds - you can adjust this to match the actual video duration
    progressColor: "#F09CEB",
    dotColor: "black",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen space-y-20 lg:space-y-40 pb-[240px]">
      <section>
        <div>
          {/* <TestStreamingVideo /> */}
          <VideoComponent fileName="buena-website-dark" aspectRatio="16/9" />
        </div>
        <div className="flex flex-col gap-1 mt-6">
          <p className="text-secondary">
            Property management firm that raised $58M Series A from Google
            Ventures. Main product is a web application for property managers.
            As part of the Series A announcement, we launched a new website. I
            was responsible for the development of the website which was done in
            a 5-day sprint.
          </p>
          <a
            href="https://buena.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-link"
          >
            buena.com
          </a>
        </div>
      </section>

      <section>
        <div>
          <div>
            <Carousel images={images} />
          </div>

          {/* <div className="container flex flex-row items-center justify-between pb-[24px]">
            <div className=" flex flex-row items-center justify-center gap-2">
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
          </div> */}
          {/* 
          <div>
            <div className="overflow-hidden">
              <VideoComponent fileName="ww-ai" aspectRatio="16/10" />
            </div>
          </div> */}

          {/* <div>
            <div className="rounded-md overflow-hidden">
              <DialogPreview />
            </div>
            <div className="mt-4 font-mono text-xs uppercase text-secondary text-center">
              dialog, one of 50+ components available in the toolkit
            </div>
          </div> */}
        </div>
        <div className="grid lg:grid-cols-[120px_1fr] gap-1 mt-6">
          <a
            href="https://weweb.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary underline-link"
          >
            weweb.io
          </a>
          <p className="text-secondary">
            WeWeb is a platform for building web applications where I joined as
            the first design hire and transitioned towards design engineering in
            my 3 year tenure. I was part of most core projects and learnt a lot
            about startups and myself.
          </p>
        </div>
      </section>

      <section>
        <div className="w-full aspect-[16/9] flex justify-center items-center [&>*:first-child]:w-auto [&>*:first-child]:h-full bg-black rounded-lg">
          <VideoComponent fileName="workout-app" aspectRatio="1/1" />
        </div>
        <div className="grid lg:grid-cols-[120px_1fr_120px] gap-1 mt-6">
          <p>Gymmy</p>
          <p className="text-secondary">
            Gymmy is a hobby iOS application for tracking your workouts using
            your voice as input. Currently unreleased.
          </p>
        </div>
      </section>

      {/* <section className="max-w-4xl px-4 mx-auto pb-[240px]">
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
      </section> */}
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
