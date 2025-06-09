import Link from "next/link";
import Carousel from "@/components/carousel/Carousel";
import { list } from "@vercel/blob";
import VideoPlayer from "@/components/video-player/VideoPlayer";
import VideoPlayerWithControls from "@/components/video-player/VideoPlayerWithControls";

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
      <section className="max-w-lg mx-auto">
        <div className="container mx-auto flex flex-col justify-center items-center pt-[180px] pb-[240px] text-center">
          <h1 className="mb-6">
            Luka is a design engineer who wants to craft functional and
            beautiful experiences.
          </h1>

          <p className="mb-6 text-neutral-700">
            Previously founding designer at{" "}
            <a
              href="https://weweb.io"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              weweb
            </a>{" "}
            , a web app builder and working with clients including
            world-renowned bank and startups like{" "}
            <a
              href="https://akkio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Akkio
            </a>
            . Currently working on improving my craft and learning new things.
          </p>

          <div className="flex gap-2">
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
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto">
        {/* Company Section */}
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
                fill="var(--color-neutral-300)"
                d="M9.746 9.473H6.291a.117.117 0 0 0-.12.115v2.294c0 .063.054.115.12.115h5.707L9.746 9.473Z"
              />
              <path
                fill="var(--color-neutral-300)"
                d="M9.746 6.585v2.89l2.252 2.524V6.585a.117.117 0 0 0-.12-.115H9.867a.117.117 0 0 0-.12.115ZM6.25 9.414v-2.89L3.998 4v5.414c0 .064.054.115.12.115H6.13a.117.117 0 0 0 .119-.115Z"
              />
              <path
                fill="var(--color-neutral-300)"
                d="M6.211 6.632h3.4c.083 0 .15-.054.15-.12V4.12c0-.066-.067-.12-.15-.12H4.003l2.21 2.632Z"
              />
            </svg>
            weweb
          </div>
          <span className="text-neutral-400 text-sm">2022 - 2025</span>
        </div>
      </section>

      <div className="max-w-4xl mx-auto">
        <Carousel images={images} />
      </div>

      <div className="mt-[80px] max-w-4xl mx-auto pb-[240px] flex flex-col gap-[80px]">
        {/* <div>
          <img
            className="rounded-md overflow-hidden mb-2"
            src="/weweb/main.png"
            alt="Weweb"
          />
          <p>{images[0].alt}</p>
        </div>

        <div className="rounded-md overflow-hidden">
          <img src="/weweb/workflows.png" alt="Weweb" />
        </div>

        <div className="rounded-md overflow-hidden">
          <img src="/weweb/edition-panel.png" alt="Weweb" />
        </div> */}

        <div className="rounded-md overflow-hidden">
          <VideoComponent fileName="ww-ai" aspectRatio="16/9" />
        </div>
      </div>
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
