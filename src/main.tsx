import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./routes/App.tsx";
import { BrowserRouter } from "react-router-dom";
import { TrackContextProvider } from "./context/TrackContext.tsx";
import { PlayerContextProvider } from "./context/PlayerContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <TrackContextProvider>
        <PlayerContextProvider>
          <App />
        </PlayerContextProvider>
      </TrackContextProvider>
    </BrowserRouter>
  </StrictMode>
);
