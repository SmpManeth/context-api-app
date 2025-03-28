import "./App.css";
import React from "react";
import { ThemeProvider } from "./context/ThemeProvider";
import ContentComponent from "./components/ContentComponent";

function App() {
  return (
    <div>
      <ThemeProvider>
        <ContentComponent>
        </ContentComponent>
      </ThemeProvider>
    </div>
  );
}

export default App;
