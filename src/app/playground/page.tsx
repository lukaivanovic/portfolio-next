import VideoPlayer from "@/components/video-player/VideoPlayer";

export default function Playground() {
  return (
    <div className="min-h-screen">
      <section className="mx-auto grid grid-cols-3 gap-2 mt-[200px] pb-[200px] px-8">
        <h1 className="col-span-3 text-center mb-8">Playground</h1>

        <div className="flex flex-col gap-2">
          <VideoComponent fileName="rive" aspectRatio="16/9" />
          <VideoComponent fileName="radial" aspectRatio="5/4" />
        </div>
        <div className="flex flex-col gap-2">
          <VideoComponent fileName="ios-voice" aspectRatio="16/9" />
          <VideoComponent fileName="threejs" aspectRatio="16/9" />
        </div>
        <div className="flex flex-col gap-2">
          <VideoComponent fileName="tsushima" aspectRatio="1/1" />
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
