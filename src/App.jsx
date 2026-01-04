 import React from 'react'
 import Card from "./Component/CardData.jsx";
 const App = () => {
   return (
     <div className='px-4  h-screen w-screen flex flex-col gap-4 bg-black'> 
      <h1 className='mb-8 text-white text-[10vw] font-[popbold]'>POKEMON CARDS</h1>
       <Card/>
     </div>
   )
 }
 
 export default App
 