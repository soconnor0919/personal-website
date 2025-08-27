"use client";

import { useRef, useState } from "react";
import { Card, CardContent } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

interface AccessibleVideoProps {
  src: string;
  poster?: string;
  posterAlt?: string;
  captionSrc?: string;
  title: string;
  description: string;
  transcript?: string;
}

export function AccessibleVideo({
  src,
  poster,
  posterAlt,
  captionSrc,
  title,
  description,
  transcript,
}: AccessibleVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [captionsEnabled, setCaptionsEnabled] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (playing) {
        videoRef.current.pause();
      } else {
        void videoRef.current.play();
      }
      setPlaying(!playing);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  const toggleCaptions = () => {
    if (videoRef.current && videoRef.current.textTracks.length > 0) {
      const track = videoRef.current.textTracks[0];
      if (track) {
        track.mode = captionsEnabled ? "hidden" : "showing";
        setCaptionsEnabled(!captionsEnabled);
      }
    }
  };

  return (
    <div className="space-y-4">
      <div aria-labelledby="video-title" aria-describedby="video-description">
        <h2 id="video-title" className="sr-only">
          {title}
        </h2>
        <p id="video-description" className="sr-only">
          {description}
        </p>
      </div>

      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="relative aspect-video w-full">
            <video
              ref={videoRef}
              className="h-full w-full"
              poster={poster}
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              controls
              src={src}
              aria-label={title}
              title={posterAlt || title}
            >
              {captionSrc && (
                <track
                  kind="captions"
                  src={captionSrc}
                  label="English"
                  srcLang="en"
                  default={captionsEnabled}
                />
              )}
              Your browser does not support the video tag.
            </video>
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <Button
            onClick={togglePlay}
            aria-label={playing ? "Pause video" : "Play video"}
            variant="outline"
            size="sm"
          >
            {playing ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
            <span className="ml-2">{playing ? "Pause" : "Play"}</span>
          </Button>

          <Button
            onClick={toggleMute}
            aria-label={muted ? "Unmute video" : "Mute video"}
            variant="outline"
            size="sm"
          >
            {muted ? (
              <VolumeX className="h-4 w-4" />
            ) : (
              <Volume2 className="h-4 w-4" />
            )}
            <span className="ml-2">{muted ? "Unmute" : "Mute"}</span>
          </Button>
        </div>

        {captionSrc && (
          <Button
            onClick={toggleCaptions}
            aria-label={
              captionsEnabled ? "Turn off captions" : "Turn on captions"
            }
            variant="outline"
            size="sm"
          >
            <span>{captionsEnabled ? "Captions On" : "Captions Off"}</span>
          </Button>
        )}
      </div>

      {transcript && (
        <details className="mt-4">
          <summary className="cursor-pointer font-medium text-primary">
            View Full Transcript
          </summary>
          <div className="mt-2 rounded-md bg-muted p-4">
            <div className="prose prose-sm dark:prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: transcript }} />
            </div>
          </div>
        </details>
      )}
    </div>
  );
}
