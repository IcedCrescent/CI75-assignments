import logo from './logo.svg';
import './App.css';
import MyForm from './components/my-form';
import { useState } from 'react';
import ListNumbers from './components/list-numbers';
import DataTable from './components/data-table';

function App() {
  // const valueTuple = useState("abc");
  // const value = valueTuple[0];
  // const setValue = valueTuple[1];
  // const [value, setValue] = useState("abc"); // tuple => [data, setData]
  // const [numbers, setNumbers] = useState([1, 2]);
  // const handleChange = (ev) => {
  //   setValue(ev.target.value);
  // };

  const [userData, setUserData] = useState([]);

  const handleFormData = (data) => {
    console.log("Parent receive data");
    console.log(data);
    setUserData([data, ...userData]); 
  }
  return (
    <div className="App">
      
      {/* Binding
      <h1>Value is : {value}</h1>

      <input type="text" value={value}  onChange={(ev) => handleChange(ev)}/>
      <ListNumbers numbers={null}/>
      <button onClick={(ev) => {
        console.log(value);
      }}>Click me</button> */}

      <MyForm submitFormData={(data) => handleFormData(data)}/>

      <DataTable userData={userData} />
    </div>
  );
}

export default App;
