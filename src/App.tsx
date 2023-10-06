import type { WidgetConfig } from '@lifi/widget';
import { LiFiWidget } from '@lifi/widget';
import React from "react";
import Logo from "../logo.png";
import '../styles/globals.css';
import { useState } from 'react';

export const widgetConfig: Partial<WidgetConfig> = {
  containerStyle: {
    border: `2px solid #21273a `,
    borderRadius: '16px',
  },
  theme: {
    palette: {
      primary: { main: '#243056' },
      secondary: { main: '#FFFFFF' },
      background: { 
        paper: '#1f2639', // bg color for cards
        default: '#0e111b', // transparent , #0e111b
        },

    },
    
    shape: {
      borderRadius: '15px',
      
    },
    typography: {
      fontFamily: "Segoe UI" ,
      
    }
    },
    appearance: 'dark',
    hiddenUI: ['appearance'],
    variant: 'expandable',
    subvariant: 'split',
};

export function App() {
  const [showDiv1, setShowDiv1] = useState(true);
  const [showDiv2, setShowDiv2] = useState(false);

  const handleButtonClick1 = () => {
    setShowDiv1(true);
    setShowDiv2(false);
  };

  const handleButtonClick2 = () => {
    setShowDiv1(false);
    setShowDiv2(true);
  };
  const headerItem = {
    padding: '10px',
    paddingLeft: '15px',
    paddingRight: '15px',
    borderRadius:' 5px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#222a3a',
    color: 'white' ,
    fontSize : '19px',
    cursor: 'pointer', 
    
  }
  const headerCss = {  height: '60px',
  display: 'flex',
  alignItems : 'center',
  paddingLeft : '50px' , 
  paddingRight: '50px',
  paddingTop: '22px' ,
  paddingBottom : '22px'
}

const logoDiv ={  display: 'flex',
alignItems: 'center',
gap: '20px'
}

const logoCss = {
  width: '190px',
  height: '60px',
  paddingRight: '20px',
  paddingLeft:'0px'
}

const ifrCss ={    border:' 2px solid #21273a' , borderRadius : '15px' ,  width: '490px' , height: '590px' , marginLeft : '35%'}


  
  return(
    <div  >

      
      <header
       style={headerCss}
  >
      <div
       style={logoDiv}>
        <img src={Logo} alt="logo" style={logoCss} />

      <div style={headerItem}
      onClick={handleButtonClick1}
      >Swap & Bridge</div>

      <div style={headerItem} onClick={handleButtonClick2}>Buy Crypto</div>
      
      </div>
    </header>
    {showDiv1 && <LiFiWidget config={widgetConfig} integrator="vite-example" />}
      {showDiv2 && <iframe  style={ifrCss}
       allow="usb; ethereum; clipboard-write" loading="lazy"  title="Buy Crypto widget" src="https://global.transak.com/" ></iframe>}
      
      </div>
    

   
  )
  
}
