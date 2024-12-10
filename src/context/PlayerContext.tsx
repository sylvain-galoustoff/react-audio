import { createContext, useContext, useState } from "react";

type PlayerContextType = {
  isPlaying: boolean;
  setIsPlaying: (playState: boolean) => void;
};

export const PlayerContext = createContext<PlayerContextType>({
  isPlaying: false,
  setIsPlaying: () => {},
});

export const PlayerContextProvider = ({ children }: { children: JSX.Element }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const valuePlayerContext = { isPlaying, setIsPlaying };

  return (
    <PlayerContext.Provider value={valuePlayerContext}>{children}</PlayerContext.Provider>
  );
};

export const usePlayerContext = () => useContext(PlayerContext);
