import { createContext, useContext, useState } from "react";
import { TrackType } from "../@types/TrackType";

type TrackContextType = {
  track: TrackType | null;
  setTrack: (track: TrackType | null) => void;
};

export const TrackContext = createContext<TrackContextType>({
  track: null,
  setTrack: () => {},
});

export const TrackContextProvider = ({ children }: { children: JSX.Element }) => {
  const [track, setTrack] = useState<TrackType | null>(null);
  const valueTrackContext = { track, setTrack };

  return (
    <TrackContext.Provider value={valueTrackContext}>{children}</TrackContext.Provider>
  );
};

export const useTrackContext = () => useContext(TrackContext);
