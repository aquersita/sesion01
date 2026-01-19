import { Suspense, useState } from 'react';
import Header from './components/Header'
import PlatesList from './components/PlatesList';
import LoadingFallback from './components/LoadingFallback';
import { fetchPlates } from './utils/api';


const App = () => {

  const [platosPromise, setPlatosPromise] = useState(() => fetchPlates())
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className='max-w-7xl mx-auto'>
      <Header/>

      <Suspense fallback={<LoadingFallback message="Cocinando platos para ti..." />}>
        <PlatesList platesPromise={platosPromise} />
      </Suspense>

      </div>
    </div>
  )
  
}

export default App