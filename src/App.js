import React from 'react';
import './App.css';
import Layout from "./components/containers/layout/Layout";
import BurgerBuilder from "./components/containers/BurgerBuilder";

function App() {
  return (
    <div className="App">

        <Layout>
            <BurgerBuilder/>
        </Layout>

    </div>
  );
}

export default App;
