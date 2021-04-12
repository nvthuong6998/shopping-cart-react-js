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

  sortProducts =(event) => {
    const sort = event.target.value;
    console.log(event.target.value);
    this.setState((state) => ({
      sort: sort,
      products: this.state.products.slice().sort((a,b) => (
        sort === "lowest" ?
        ((a.price < b.price) ? 1:-1):
        sort === "highest" ?
        ((a.price > b.price) ? 1:-1):
        ((a._id > b._id) ? 1:-1)
      ))
    }));
  }
  filterProducts = (event) => {
    console.log(event.target.value);
    if(event.target.value === ""){
      this.setState({size: event.target.value, product: data.products});
    }else{
      this.setState({
        size: event.target.value,
        products: data.products.filter((product) =>product.availableSizes.indexOf(event.target.value) >= 0),
      });
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
              <Fliter count={this.state.products.length}
                size={this.state.size}
                sort={this.state.sort}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts}
              >

              </Fliter>
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
