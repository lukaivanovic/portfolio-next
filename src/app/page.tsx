import Link from "next/link";
import Carousel from "@/components/carousel/Carousel";
import { list } from "@vercel/blob";

const images = [
  {
    src: "weweb/main.png",
    alt: "Manage your app logic and data from a single place",
  },
  {
    src: "weweb/workflows.png",
    alt: "Build your logic and automation with the workflow editor",
  },
  {
    src: "weweb/icons.png",
    alt: "Browse and use the most popular icon libraries",
  },
  {
    src: "weweb/edition-panel.png",
    alt: "Create states, components or edit your elements visually",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen max-w-3xl mx-auto">
      {/* Navigation */}
      <section>
        <div className="container mx-auto flex items-start justify-between text-primary mt-6">
          <Link href="/" className="text-primary">
            Luka Ivanovic <br />
            <span className="text-secondary text-sm">Design Engineer</span>
          </Link>
          <div className="flex gap-4 text-secondary">
            <a
              className="hover:text-primary transition-colors"
              href="https://www.linkedin.com/in/ivanovicluka0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="hover:text-primary transition-colors"
              href="https://x.com/lukaivnvc"
              target="_blank"
              rel="noopener noreferrer"
            >
              X
            </a>
          </div>
        </div>
      </section>

      <VideoComponent fileName="my-video.mp4" />

      {/* Hero */}
      <section>
        <div className="container mx-auto flex flex-col justify-center pt-[180px] pb-[240px]">
          <h1 className="mb-6">
            Designer who codes with focus on product thinking
          </h1>

          <p className="mb-6 mr-4 text-neutral-300">
            Most recently spent three years at{" "}
            <a
              href="https://weweb.io"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              weweb
            </a>{" "}
            as the founding designer for a AI-powered app builder operating on
            the intersection of product, design and development. Previous
            clients include UBS and{" "}
            <a
              href="https://akkio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Akkio
            </a>
            .
          </p>
          <p className="mb-10 mr-4 text-neutral-400">
            Currently looking for something new while improving my craft and
            learning new things.
          </p>

          <div className="flex gap-2">
            <a
              href="https://calendly.com/lluka-ivanovic/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-neutral-800 text-neutral-300 px-4 py-1 rounded-full hover:bg-neutral-700 hover:text-neutral-300 transition-colors"
            >
              Book a call
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 256 256"
                className="chevron"
              >
                <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" />
              </svg>
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

      {/* Company Section */}
      <div className="container mx-auto flex flex-row items-center justify-between pb-[24px]">
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

      <div>
        <Carousel images={images} />
      </div>

      {/* Playground Section */}
      <section className="pb-[200px]">
        <div className="container mx-auto">
          <h1 className="mb-2">Playground</h1>
          <p className="mb-[80px]">
            Place where I experiment with new ideas and technologies.
          </p>

          <div className="grid grid-cols-1 gap-4">
            {/* Placeholder for Tsushima component */}
            <div className="relative aspect-[8/5] rounded-lg overflow-hidden flex flex-col bg-neutral-800">
              <div className="w-full h-full flex-grow flex items-center justify-center">
                {/* Tsushima component will go here */}
              </div>
              <div className="absolute bottom-2 left-2 text-white opacity-50">
                Dissolve Effect
              </div>
              <div className="absolute bottom-2 right-2 text-white flex items-center gap-2 opacity-50">
                three.js
              </div>
            </div>

            {/* Placeholder for AiToggle component */}
            <div className="aspect-[8/5] bg-neutral-800 rounded-lg overflow-hidden relative text-black">
              <div className="w-full h-full flex items-center justify-center">
                {/* AiToggle component will go here */}
              </div>
              <div className="absolute bottom-2 left-2 text-white opacity-50">
                Radial Menu
              </div>
              <div className="absolute bottom-2 right-2 flex items-center gap-2 text-white opacity-50">
                Vue
              </div>
            </div>

            {/* Placeholder for RadialMenu component */}
            <div className="aspect-[8/5] bg-neutral-900 rounded-lg overflow-hidden relative">
              <div className="w-full h-full flex items-center justify-center">
                {/* RadialMenu component will go here */}
              </div>
              <div className="absolute bottom-2 left-2 text-white opacity-50">
                Radial Menu
              </div>
              <div className="absolute bottom-2 right-2 flex items-center gap-2 text-white opacity-50">
                React
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

async function VideoComponent({ fileName }: { fileName: string }) {
  const { blobs } = await list({
    prefix: fileName,
    limit: 1,
  });
  const { url } = blobs[0];

  return (
    <video controls preload="none" aria-label="Video player">
      <source src={url} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
