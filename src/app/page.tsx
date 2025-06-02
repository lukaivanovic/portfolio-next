import Link from "next/link";
import Carousel from "@/components/carousel/Carousel";
import { list } from "@vercel/blob";
import VideoPlayer from "@/components/VideoPlayer";
import VideoPlayerWithControls from "@/components/VideoPlayerWithControls";

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
    <div className="min-h-screen">
      {/* Navigation */}
      <section className=" max-w-2xl mx-auto">
        <div className="container mx-auto flex items-start justify-between text-primary mt-6">
          <Link
            href="/"
            className="text-primary flex flex-row items-center gap-2"
          >
            / Index
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

      {/* Hero */}
      <section className=" max-w-2xl mx-auto">
        <div className="container mx-auto flex flex-col justify-center pt-[180px] pb-[240px]">
          <h1 className="mb-6">
            Hey, I'm Luka, a product-oriented design engineer.
          </h1>

          <p className="mb-6 mr-4">
            Most recently, I've spent three years at{" "}
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
          <p className="mb-10 mr-4">
            Currently working on improving my craft and learning new things.
            Open to new role inquiries.
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

      <section className=" max-w-2xl mx-auto">
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

        <div>
          <Carousel images={images} />
        </div>

        <div className="mt-[80px]">
          <div className="rounded-md overflow-hidden">
            <VideoComponentWithControls fileName="ww-ai2-f03z4HoaX5elLRvO6heEcBLVF0I2TQ.mov" />
          </div>
          AI chat
        </div>
      </section>

      {/* Playground Section */}
      <section className="pb-[200px] max-w-[1440px] mx-auto grid grid-cols-3 gap-4 mt-[200px]">
        <h1 className="col-span-3 text-center mb-8">Playground</h1>

        <div className="flex flex-col gap-4">
          <VideoComponent fileName="rive-85tMyJUmJSpjRMkb92XjKmM4DmpBSx.mp4" />
          <VideoComponent fileName="Radial-vMSxqhpEkaOUWTvw49xTu6pATe3ung.mp4" />
        </div>
        <div className="flex flex-col gap-4">
          <VideoComponent fileName="audio-ios-gswdQVvr0ybJjdc8wAHXVaEFCJI496.mp4" />
          <VideoComponent fileName="threejs-akqYsQvzXfgT2ojk1E1duSUnSU88vj.mp4" />
        </div>
        <div className="flex flex-col gap-4">
          <VideoComponent fileName="tsushima-0wnWLPGPxsUiKhzdE89BZRrC5A59YL.mp4" />
          <VideoComponent fileName="menu-jEIIKGiyXywx0w281iZHE4ywEzyyif.mp4" />
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

  return <VideoPlayer url={url} />;
}

async function VideoComponentWithControls({ fileName }: { fileName: string }) {
  const { blobs } = await list({
    prefix: fileName,
    limit: 1,
  });
  const { url } = blobs[0];

  return <VideoPlayerWithControls url={url} />;
}
