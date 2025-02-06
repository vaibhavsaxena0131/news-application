import React from "react";
import ImageElement from "@/components/ImageElement";
import VideoPlayer from "@/components/videoPlayer/videoPlayer.index";
import { VideoProvider } from "@/context/videoContext";

const MediaDisplay = ({
  mediaType = "image",
  source,
  altText,
  className = "",
}) => {
  return (
    <div>
      {mediaType === "image" ? (
        <ImageElement
          src={source}
          alt={altText || "Image"}
          className={className}
        />
      ) : mediaType === "video" ? (
        <VideoProvider>
          <VideoPlayer src={source} className={className} />
        </VideoProvider>
      ) : (
        <p>Unsupported media type.</p>
      )}
    </div>
  );
};

export default MediaDisplay;
