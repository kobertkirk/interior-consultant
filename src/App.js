import './App.css';
import Header2 from './components/Header2';
import Header from './components/Header';
import React from 'react';
import Content from './components/Content';
import Footer from './components/Footer';

export default function App() {
  const [dimensions, setDimensions] = React.useState(window.innerWidth);

  const handleResize = () => {
      setDimensions(window.innerWidth);
    }

  React.useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  return (
    <div className="flex flex-col">
      {dimensions > 980 ? 
        <Header />
        :
        <Header2 />
      }
      <div className="flex-col flex items-center">
      <Content />
      <Footer/>
      </div>
    </div>
  )
}
/* npm install @mui/icons-material @mui/material @emotion/styled @emotion/react */