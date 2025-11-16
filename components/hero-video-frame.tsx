import clsx from "clsx"

type HeroVideoFrameProps = {
  className?: string
  title?: string
}

export function HeroVideoFrame({ className, title = "Infobell brand reel" }: HeroVideoFrameProps) {
  return (
    <div
      className={clsx(
        "card-glow relative overflow-hidden rounded-2xl border border-border/60 bg-card/70 p-2 shadow-sm",
        className
      )}
    >
      <video
        src="https://res.cloudinary.com/dhqpqfw6w/video/upload/v1763311660/infobell_logo_video_wfhxjq.mp4"
        title={title}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="w-full rounded-xl"
      />
    </div>
  )
}
