import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AuthProvider from "./context/AuthContext";
import { QuaryProvider } from "./lib/react-quari/QuaryProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <QuaryProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </QuaryProvider>
  </BrowserRouter>
);
