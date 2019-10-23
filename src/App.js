import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
//import Icon from '@material-ui/core/Icon';
import MaterialTable from 'material-table';
//import MaterialTableDemo from './components/MaterialTableDemo';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import NavBar2 from './components/NavBar2'

class App extends Component {

 constructor(props){
   super(props); 
    this.state = {

      

   data: {},
    isLoading : true
  };
 }

componentDidMount() {
  console.log("Composant avant premier affichage")
  var url = "http://localhost:8080/api/restaurants";

	fetch(url)
		  .then(response => response.json())
      .then(data => this.setState({ data:data.data, isLoading: false}));
}

render() {
  const {data,isLoading} = this.state;
  console.log(data);
  console.log(isLoading);

  var restau = [];
  var test = [];

  var restau_street = [];
  var restau_name = [];
  var restau_cuisine = [];

  var tableau = [];

  //  console.log(element);

  /*const [state, setState] = React.useState({
    columns : [
      { title: 'Nom', field: 'name' },
      { title: 'Cuisine', field: 'cuisine' },
      { title: 'Addresse', field: 'address.street'},
      { title: 'Ville', field: 'borough'},
      
    ],

    data : [data]
  });*/
    
   


  if(!isLoading){
   data.forEach(element => {

    restau_street.push(element.address.street) ;
    restau_name.push(element.name);
    restau_cuisine.push(element.cuisine);
    restau.push(element.address.street);
    restau.push(element.name);
    restau.push(element.cuisine);
    test = [element.address.street,element.address.borough,element.cuisine,element.name]

console.log(test);

  });

  //var i = data.lenght;

    return (
//console.log({restau}),
      <div className="App">

 
    <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>Table des restaurants</h3>
          
          <br></br>
  
          <div>
         </div>
        </header>
        
 <NavBar/>   

          <Paper >
      <Table  aria-label="caption table">
        <caption>Restaurants</caption>
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Cuisine</TableCell>
            <TableCell align="center">Addresse</TableCell>
            <TableCell align="center">Ville</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {data.map(row => (
            <TableRow >
              <TableCell align="center">{row._id}</TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.address.street}</TableCell>
              <TableCell align="center">{row.borough}</TableCell>
            </TableRow>
                    ))}

        </TableBody>
      </Table>
    </Paper>
   
    <NavBar2/>   

    <MaterialTable
      title="Editable Example"
      columns={[
        { title: 'Nom', field: 'name' },
        { title: 'Cuisine', field: 'cuisine' },
        { title: 'Addresse', field: 'address.street'},
        { title: 'Ville', field: 'borough'},
        
      ]}
      data={data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [data];
              data.push(newData);
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [data];
              data[data.indexOf(oldData)] = newData;
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [data];
              data.splice(data.indexOf(oldData), 1);
            }, 600);
          }),
      }}
    />

          
               </div>

      
    );
    }
    else{
      return <div>En attente de connexion</div>
    }
  }


}

export default App;
