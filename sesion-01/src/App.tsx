import React from 'react'
import Header from './components/Header'
import Saludo from './components/Saludo'
import Tarjeta from './components/Tarjeta'

const App = () => {
  return (
    <div className='min-h-screen bg-gray-100'>
      <Header/>
      <main className='container mx-auto p-4'>
        <Saludo nombre= "pepe" edad={34}/>
        <Saludo/>
        <Saludo nombre= "carla" edad={24}/>
        <div className='mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          <Tarjeta 
          title='React' 
          description='Lenguaje React' 
          urlImage='https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=400' />
          <Tarjeta 
          title='React' 
          description='Lenguaje React' 
          urlImage='https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=400' />
          <Tarjeta 
          title='React' 
          description='Lenguaje React' 
          urlImage='https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=400' />
          <Tarjeta 
          title='React' 
          description='Lenguaje React' 
          urlImage='https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=400'
          favorite={true}/>
        </div>
      </main>
    </div>
  )
}

export default App