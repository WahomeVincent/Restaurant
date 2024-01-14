import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    (async() => {
      const res = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/products`)
      const resData = await res.json()
      console.log(resData);
    })()
  },[])

  return (
    <div className="App">
      <Toaster />
       <Header/>
       <main className='pt-16 bg-slate-100 min-h[calc(100vh)'>
          <Outlet /> 
       </main>
    </div>
  );
}

export default App;
