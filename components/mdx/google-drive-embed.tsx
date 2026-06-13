interface GoogleDriveEmbedProps {
  fileId: string;
  title?: string;
}

export function GoogleDriveEmbed({
  fileId,
  title = "Video",
}: GoogleDriveEmbedProps) {
  return (
    <div className="border-border my-6 aspect-video w-full max-w-3xl overflow-hidden rounded-xl border">
      <iframe
        src={`https://drive.google.com/file/d/${fileId}/preview`}
        title={title}
        allow="autoplay; fullscreen"
        allowFullScreen
        className="h-full w-full"
      />
    </div>
  );
}
