import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import { ThemeProvider, createTheme } from '@mui/material';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/data')
      .then(response => response.json())
      .then(data => {
        console.log(data); 
        setData(data);
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