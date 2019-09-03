import React from 'react';
import './App.css';
import HelloWorld from "./components/hello-world/HelloWorld";
import Layout from "./components/containers/layout/Layout";
import BurgerBuilder from "./components/containers/BurgerBuilder";

function App() {
  return (
    <div className="App">

        <Layout>
            <HelloWorld/>
            <BurgerBuilder/>
        </Layout>

    </div>
  );
}

export default App;
