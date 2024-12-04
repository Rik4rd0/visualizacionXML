import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import { ThemeProvider, createTheme } from '@mui/material';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://backvisualxml.onrender.com/api/data')  // Asegúrate de que la URL sea correcta
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData); 
        setData(responseData.data); 
      })
      .catch(error => console.error('Error:', error));
  }, []);

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Content data={data} />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;