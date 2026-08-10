import { useQuery } from "@tanstack/react-query";

function App() {

 const {}= useQuery({
  queryKey:["users"],
  queryFn:async()=>{
    const response = await axios
  }
 })

  return (
    <>
      <h1>
        Hello world!
      </h1>

  
    </>
  );
}

export default App;