
import { useState } from 'react';
import { createContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './routes/Routes';


export const themeContext =createContext(null)

function App() {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme(curr => curr === 'light' ? 'dark' : 'light')
  }
  return (
    <themeContext.Provider value={{theme, toggleTheme}}>
    <div className='' id={theme}>
     <RouterProvider router={routes}></RouterProvider>
    </div>
    </themeContext.Provider>
  );
}

export default App;
