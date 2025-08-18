import VideoPlayer from "@/components/video-player/VideoPlayer";

export default function Playground() {
  return (
    <div className="min-h-screen">
      <section className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2 pb-[240px]">
        <div className="flex flex-col gap-2">
          <VideoComponent fileName="rive" aspectRatio="16/9" />
          <VideoComponent
            fileName="radial"
            className="border border-neutral-100"
            aspectRatio="5/4"
          />
          <VideoComponent fileName="tsushima" aspectRatio="1/1" />
          <VideoComponent
            fileName="ios-voice"
            className="border border-neutral-100"
            aspectRatio="16/9"
          />
        </div>
        <div className="flex flex-col gap-2">
          <VideoComponent
            fileName="buena-sidebar-icons"
            className="border border-neutral-100"
            aspectRatio="1/1"
          />
          <VideoComponent fileName="material-maker-1" aspectRatio="1/1" />
          <VideoComponent
            fileName="menu"
            className="border border-neutral-100"
            aspectRatio="5/4"
          />

          <VideoComponent fileName="threejs" aspectRatio="16/9" />
        </div>
      </section>
    </div>
  );
}

async function VideoComponent({
  fileName,
  aspectRatio,
  className,
}: {
  fileName: string;
  aspectRatio: string;
  className?: string;
}) {
  return (
    <VideoPlayer
      className={className}
      url={fileName}
      aspectRatio={aspectRatio}
    />
  );
}
