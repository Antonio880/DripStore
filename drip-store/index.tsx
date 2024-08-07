import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Header from "./src/components/Header.tsx";
import Footer from "./src/components/Footer/Footer.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <body className="flex flex-col min-h-screen">
        <Header />
        <App />
        <Footer />
      </body>
    </BrowserRouter>
  </React.StrictMode>
);
