import React,{ useState } from 'react';
import Home from './pages/Home';
import MenuBar from './components/MenuBar';
import { Routes, Route } from 'react-router-dom';
import Teams from './pages/Teams';
import { Drawer } from './components/Drawer';




export default function App() {

  const [isProfileOpen, setIsProfileOpen] = useState(false);

  console.log("Etat isProfileOpen: ", isProfileOpen)

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <MenuBar onProfileClick={() => {console.log('click sur Profle');
        setIsProfileOpen(true)}}/>
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
