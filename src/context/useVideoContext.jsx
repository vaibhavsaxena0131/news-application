import { useContext } from "react";
import { VideoContext } from "./videoContext";

export const useVideoContext = () => {
  return useContext(VideoContext);
};
