import {
  PauseIcon,
  PlayIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
} from "@heroicons/react/24/solid";
import React, { useRef, useState, useCallback, useEffect } from "react";
import "./videoPlayer.style.css";
import { useVideoContext } from "@/context/useVideoContext";

const VideoPlayer = ({ src, id, className }) => {
  const { activeVideoId, setActiveVideoId } = useVideoContext();
  const videoRef = useRef(null);
  const [state, setState] = useState({
    isPlaying: false,
    volume: 1,
    progress: 0,
    duration: 0,
    isMuted: false,
    previousVolume: 0.5,
  });

  const handlePlayPause = useCallback(() => {
    if (id && id !== activeVideoId) {
      setActiveVideoId(id);
    }
    if (videoRef.current.paused) {
      videoRef.current.play();
      setState((prevState) => ({ ...prevState, isPlaying: true }));
    } else {
      videoRef.current.pause();
      setState((prevState) => ({ ...prevState, isPlaying: false }));
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (id && id !== activeVideoId) {
      videoRef.current.pause();
      setState((prevState) => ({ ...prevState, isPlaying: false }));
    }
  }, [id, activeVideoId]);

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    videoRef.current.volume = newVolume;
    setState((prevState) => ({
      ...prevState,
      volume: newVolume,
      isMuted: newVolume === 0,
    }));
  };

  const handleMuteToggle = () => {
    setState((prevState) => {
      const isMuted = !prevState.isMuted;
      const volume = isMuted ? 0 : prevState.previousVolume;
      videoRef.current.volume = volume;
      return {
        ...prevState,
        isMuted,
        volume,
        previousVolume: isMuted ? prevState.volume : prevState.previousVolume,
      };
    });
  };

  const handleLoadedMetadata = () => {
    setState((prevState) => ({
      ...prevState,
      duration: videoRef.current.duration,
      progress: 0,
    }));
  };

  const handleProgressChange = (e) => {
    const newProgress = parseFloat(e.target.value);
    videoRef.current.currentTime = newProgress;
    setState((prevState) => ({ ...prevState, progress: newProgress }));
  };

  const updateProgress = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      progress: videoRef.current.currentTime,
    }));
  }, []);

  const handleVideoEnd = () => {
    setState((prevState) => ({ ...prevState, isPlaying: false, progress: 0 }));
    videoRef.current.currentTime = 0;
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    videoElement.addEventListener("timeupdate", updateProgress);
    return () => videoElement.removeEventListener("timeupdate", updateProgress);
  }, [updateProgress]);

  const { isPlaying, volume, progress, duration, isMuted } = state;

  const volumeBackgroundStyle = {
    background: `linear-gradient(to right, #c19064 ${volume * 100}%, #e5e7eb 0%)`,
  };

  return (
    <div
      className={`relative w-full bg-black rounded-lg overflow-hidden shadow-lg group ${className}`}
    >
      <video
        ref={videoRef}
        src={src}
        onClick={handlePlayPause}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleVideoEnd}
        className="w-full aspect-video object-cover"
      ></video>

      <button
        type="button"
        onClick={handlePlayPause}
        className={`absolute inset-0 flex items-center justify-center text-white bg-opacity-40 ${isPlaying ? "hidden" : "group-hover:flex"}`}
      >
        <span className="p-4 rounded-full bg-gray-900/50">
          {isPlaying ? (
            <PauseIcon className="h-12 w-12 text-white" />
          ) : (
            <PlayIcon className="h-12 w-12 text-white" />
          )}
        </span>
      </button>

      <div
        className={`absolute ${isPlaying ? "group-hover:flex" : ""} hidden bottom-0 left-0 right-0 flex items-center justify-between gap-2 p-3 bg-gray-900 bg-opacity-75`}
      >
        <button
          type="button"
          onClick={handlePlayPause}
          className="text-white p-1"
        >
          {isPlaying ? (
            <PauseIcon className="h-6 w-6 text-white" />
          ) : (
            <PlayIcon className="h-6 w-6 text-white" />
          )}
        </button>

        <div className="slider-container w-full">
          <input
            type="range"
            min="0"
            max={duration || 100}
            value={progress}
            onChange={handleProgressChange}
            className="slider cursor-pointer"
            style={{
              "--min": 0,
              "--max": duration || 100,
              "--val": progress + 0.6,
            }}
          />
        </div>

        <div className="flex items-center space-x-2">
          <button
            type="button"
            onClick={handleMuteToggle}
            className="text-white p-1"
          >
            {isMuted || volume === 0 ? (
              <SpeakerXMarkIcon className="h-5 w-5 text-white" />
            ) : (
              <SpeakerWaveIcon className="h-5 w-5 text-white" />
            )}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className="w-20 h-1 rounded-lg appearance-none cursor-pointer custom-thumb"
            style={volumeBackgroundStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
