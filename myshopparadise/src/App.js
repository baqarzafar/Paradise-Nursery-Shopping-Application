
import logo from './logo.svg';
import './App.css';
import Content from './componts/contents';
import { useEffect } from 'react';
import { BrowserRouter , Routes ,Route } from 'react-router-dom';
import { ProductListing } from './componts/addTocartcomponent';

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
  
 <BrowserRouter>
  
    <Routes>
      <Route path='/' element={
        <div className='App' style={{width:"100%"}}>
        <Content/>
           </div> 
        
        } ></Route>

        <Route path='/Productlisting' element={<ProductListing/>} ></Route>
        <Route path='/' element={<ProductListing/>} ></Route>
    </Routes>
 
 </BrowserRouter>
   
  );
}

export default App;
