import React from 'react'
import Navbar from './component/Navbar';
import Header from './component/Header';



const App=()=> {
  return(<>
      <div className="container-fluid">
        <Header></Header>
        <Navbar></Navbar>
        
      </div>
  </>)
}
export default App;