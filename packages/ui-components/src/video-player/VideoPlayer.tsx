/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import clsx from "clsx";
import Image from "next/image";
import React, { useMemo, useRef, useState } from "react";
import { Player } from "video-react";

import "video-react/dist/video-react.css";

export type VideoPlayerProps = {
  src?: string;
  thumbnail?: string;
  file?: File;
  id?: string | undefined;
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  file,
  thumbnail,
  id,
}) => {
  const videoRef = useRef<any>(null); // @TODO: fix the import if video player tests OK

  const [videoPlaying, setVideoPlaying] = useState(false);

  const playVideo = () => {
    videoRef.current?.play();
    setVideoPlaying(true);
  };

  const videoSrc = useMemo(
    () => src || URL.createObjectURL(file!),
    [src, file]
  );

  return (
    <div key={id} className="relative w-full h-[600px]">
      <Player ref={videoRef}>
        <source src={videoSrc} />
      </Player>
      {thumbnail && (
        <>
          <div
            onClick={playVideo}
            className={clsx(
              videoPlaying && "opacity-0 pointer-events-none",
              "transition-opacity cursor-pointer w-full h-full absolute inset-0"
            )}
          >
            <Image
              alt="thumbnail image"
              src={thumbnail}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div
            className={clsx(
              videoPlaying && "opacity-0 pointer-events-none",
              "transition-opacity inset-0 absolute pointer-events-none flex items-center justify-center"
            )}
            style={{
              background:
                "radial-gradient(circle, rgba(0,0,100,0) 14%, rgba(0,0,10,1) 100%)",
            }}
          >
            <Image
              alt="play button"
              src="/images/playButton.png"
              height="150"
              width="150"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default VideoPlayer;
