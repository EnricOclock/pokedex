import { useState } from 'react';
import Home from './pages/Home';
import MenuBar from './components/MenuBar';
import { Routes, Route } from 'react-router-dom';
import Teams from './pages/Teams';
import { Drawer } from './components/Drawer';




export default function App() {

  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">

      <header className='sticky z-50 top-0'>
      <MenuBar onProfileClick={() => 
        setIsProfileOpen(true)}/>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/teams" element={<Teams/>}/>
        </Routes>

        <Drawer open={isProfileOpen} onOpenChange={setIsProfileOpen} side="right"/>
        
     </main>
    </div>
  )
}

