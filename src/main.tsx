
import ReactDOM from "react-dom/client";
import  { useEffect } from "react";
import "./i18n";
import "./index.css";
import App from "./App";
import AOS from "aos";
import "aos/dist/aos.css"; 


const Main = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
      offset: 200, 
    });
  }, []);

  // useEffect(() => {
  //   const timer = setTimeout(() => setLoading(false), 2000); 
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <>
     
      
          <App />
      
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<Main />);
