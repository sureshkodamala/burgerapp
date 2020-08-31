import React from 'react';
import Layout from './components/layouts/Layout';
import BurgerBuilder from './containers/burgerbuilder/BurgerBuilder';

function App() {
  return (
      <Layout>
        <BurgerBuilder></BurgerBuilder>
      </Layout>
  );
}

export default App;
