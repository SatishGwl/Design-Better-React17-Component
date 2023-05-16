import Header from "./Header";
// import { createContext,useState } from "react";
import Speakers from "./Speakers";
import Layout from "./Layout";


const App = ()=> {
  return (
    <Layout startingTheme="light">
    <div>
      <Header />
      <Speakers/>
     
    </div>
    </Layout>
  );
}

export default App;
