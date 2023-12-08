import './App.css';
import React, {useState} from 'react';
function App() {
  const color = ['red', 'yellow', 'green', 'blue'];
  const socket = new WebSocket('ws://localhost:8080');
  const sendColorChange = (selectedColor) => {
    if (socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify({ type: 'colorChange', color: selectedColor }));
    }
  };
  
  const [currentColor, setCurrentColor] = useState(0);
  const handleClicked = (index) => {
    setCurrentColor(index);
    sendColorChange(color[index]);
}
  return (
    <div className="App">
      <h1>Side 1</h1>
      <div className="Btgrp">
        <div className="Bt bt1" onClick={() => handleClicked(0)}></div>
        <div className="Bt bt2" onClick={() => handleClicked(1)}></div>
        <div className="Bt bt3" onClick={() => handleClicked(2)}></div>
        <div className="Bt bt4" onClick={() => handleClicked(3)}></div>
      </div>

      <div className="main-box" style={{ backgroundColor: color[currentColor] }}>

      </div>
      
    </div>
  );
}

export default App;

