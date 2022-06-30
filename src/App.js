import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/Home/Home";
import "./App.css"
import { themeContext } from "./contexts/themeContext";
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false)
  const className = isDark ? 'dark' : 'light'
  return (
    <div id="app" className={className}>
      <themeContext.Provider value={{ isDark }}>
        <Header switchTheme={() => setIsDark(!isDark)} />
        <Home />
        <Footer />
      </themeContext.Provider>
    </div>
  );
}

export default App;
