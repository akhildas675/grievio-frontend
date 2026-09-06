import { useEffect } from "react";
import { api } from "./config/api";


function App() {

  useEffect(()=>{
    const testApiConnection = async ()=>{
      try {
        const response = await api.get("/health")

        console.log("API Response....",response.data)
      } catch (error) {
        console.error("API Connection Failed:",error)
      }
    }
    void testApiConnection()
  },[])


  return (
    <>
      <h1>
        Hello world!
      </h1>

  
    </>
  );
}

export default App;