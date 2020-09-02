/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  DataTable  from './dataTable';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { foods: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/food/show')
      .then(res => {
        this.setState({ foods: res.data.DATA });
        console.log(res.data.DATA);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  dataTable() {
    return this.state.foods.map((data, i) => {
      return <DataTable obj={data} key={i} />;
    });
  }

  render() {
    return (
      <div className="wrapper-users">
        <div className="container">
          <table className="table table-striped table-dark">
            <thead className="thead-dark">
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Description</td>
                <td>Picture</td>
              </tr>
            </thead>
            <tbody>
              {this.dataTable()}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header>
//         <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//           <a className="navbar-brand">React Axios Tutorial</a>
//         </nav>
//       </header>

//       <div className="container">
//         <div className="row">
//           <div className="col-md-12">
//             <p>Ini Body</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;