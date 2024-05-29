import MobileData from './mobile/MobileData'
import Header from './mobile/Header'
import Footer from './mobile/Footer'

function App() {

  return (
    <div className='w-5/6 mx-auto border border-orange-400 p-2'>
      <Header />
      <div className='flex flex-wrap gap-4 static'>
      <MobileData />
      </div>
      <Footer />
    </div>
  )
}

export default App
