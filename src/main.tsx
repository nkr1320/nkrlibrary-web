import "./i18n";
import { createRoot } from "react-dom/client";
import App from "./App.lazy.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
