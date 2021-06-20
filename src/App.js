import logo from './logo.svg';
import './App.css';
import './useAnyKeyToRender';
import { useEffect } from 'react';

function App() {
  useAnyKeyToRender();

  useEffect(() => {
    console.log("fresh render");
  });

  

}

export default App;
