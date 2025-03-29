
import { useState } from 'react';
import  styles from './App.module.css';
import { LoadingScreen } from './components/LoadingScreen';
import "./index.css";


function App() {
  //For showing if we are still loading or not
const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className={`${styles.App} min-h-screen`}>
    {!isLoaded && <LoadingScreen onComplete = {() => setIsLoaded(true)}/>}{" "}
      <div className = {` transition-opacity duration-700 ${isLoaded ? "opacity-100": "opacity-0"} bg-black` } ></div>
     
    </div>
  )
}
export default App
