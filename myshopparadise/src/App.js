import logo from './logo.svg';
import './App.css';
import Content from './componts/contents';
import { useEffect } from 'react';

function App() {
    
  async function data(params) {
    
   fetch('http://localhost:3000/data')
    .then(response => response.json())
     
    .catch(error => console.error('Error:', error));
  }

  useEffect(()=>{
    data()
  }   )
  return (
    <div className="App" style={{width:"100%"}}>
          <Content></Content>

    </div>
  );
}

export default App;
