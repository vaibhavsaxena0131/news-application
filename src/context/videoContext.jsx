// VideoProvider.js
import React, { createContext, useState } from "react";

// Create the context
const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [activeVideoId, setActiveVideoId] = useState(null);

  return (
    <VideoContext.Provider value={{ activeVideoId, setActiveVideoId }}>
      {children}
    </VideoContext.Provider>
  );
};

// Export the context itself for use in other files
export { VideoContext };
