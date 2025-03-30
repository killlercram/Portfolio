import { useState } from "react";
import styles from "./App.module.css";
import { LoadingScreen } from "./components/LoadingScreen";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  //For showing if we are still loading or not
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    /* <div className={`${styles.App} min-h-screen`}>*/
    <div className={`${styles.App}`}>
      {/* Showing the loading Screen untill the screen is loaded */}
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      {/* Fadding Transition effect after the loading is finished */}
      <div
        className={` transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } `}
      >
        
      <Navbar/>

      </div>
    </div>
  );
}
export default App;
