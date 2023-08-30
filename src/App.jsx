import { useState,useEffect } from 'react'
import Navbar from './components/Navbar';
import './App.css'
import Agent from './components/Agent';
import AgentDetails from './components/AgentDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("https://valorant-api.com/v1/agents?isPlayableCharacter=true");
    const data = await res.json();

    if (data.data) {
      setProducts(data.data);
    }
    
    // products.forEach(agent => {
    //   console.log(products);
    // })
  }

  return (
    <Router>
      <div className='app'>
        <Navbar />
        <div className="agents">
          <Routes>
            <Route path="/" element={ 
              products.map(agent => (
                <Agent
                  displayName={agent.displayName}
                  potrait={agent.fullPortraitV2}
                  desc={agent.description}
                  role={agent.role.displayName}
                  roleIcon={agent.role.displayIcon}
                  smallpotrait={agent.displayIconSmall}
                  roleInfo={agent.role.description}
                />
              ))
            } />
            <Route path="/:agentName" element={
            <AgentDetails 
              agentjson = {products}
            />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App
