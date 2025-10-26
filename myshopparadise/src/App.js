import logo from './logo.svg';
import './App.css';
import Content from './componts/contents';
import { useEffect } from 'react';

function App() {

  useEffect(()=>{

      fetch("http://localhost:3000/").then((res ,req)=>{console})


  } )
  return (
    <div className="App" style={{width:"100%"}}>
          <Content></Content>

    </div>
  );
}

export default App;
