import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from 'react-router-dom';
import { SearchProvider } from "./context/search.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SearchProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SearchProvider>
);
