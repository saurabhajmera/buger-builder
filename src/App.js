import React from 'react';
import './App.css';
import BurgerBuilder from "./components/containers/burger-builder/BurgerBuilder";
import {Layout} from "./components/containers/layout/Layout";

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
