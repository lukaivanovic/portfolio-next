import VideoPlayer from "@/components/video-player/VideoPlayer";

export default function Playground() {
  return (
    <div className="min-h-screen max-w-4xl px-3 mx-auto">
      <section className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2 mt-[64px] pb-[240px]">
        <h1 className="col-span-1 lg:col-span-2 text-center mb-[80px]">
          Playground
        </h1>

        <div className="flex flex-col gap-2">
          <VideoComponent fileName="rive" aspectRatio="16/9" />
          <VideoComponent fileName="radial" aspectRatio="5/4" />
          <VideoComponent fileName="tsushima" aspectRatio="1/1" />
        </div>
        <div className="flex flex-col gap-2">
          <VideoComponent fileName="ios-voice" aspectRatio="16/9" />
          <VideoComponent fileName="threejs" aspectRatio="16/9" />
          <VideoComponent fileName="menu" aspectRatio="5/4" />
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
