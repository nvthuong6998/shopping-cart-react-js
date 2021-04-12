import React from 'react';
import data from './data.json';
import Products from '../src/components/Products'
import Fliter from '../src/components/Filter'

class App extends React.Component {

  constructor(props) {
    super();
    this.state = {
      products: data.products,
      size:"",
      sort:"",
    }
  }

  render(){
    return (
      <div className="grid-container">

      {/* -- Header -- */}
      
        <header>
          <a href="/">React shopping cart </a>
        </header>

      {/* ---- Body ---- */}

        <main>
          <div className="content">
            <div className="main">
              <Fliter count={this.state.products.length} />
              <Products products={this.state.products} />
            </div>
            <div className="sidebar">
              Cart Items
            </div>
          </div>
        </main>



        {/* ---- Footer ---- */}
        <footer>Nguyen Van Thuong</footer>
      </div>
    );
  }
  
}

export default App;
