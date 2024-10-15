import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import MainComp from './component/MainComp'
import SignIn from './component/SignIn'



function App() {
  const location = useLocation();

  const hidePath = ['']
  
  return (
    
    <>
      <div>
        {!hidePath.includes(location.pathname)}
        <Routes>
           <Route path='/' element={<MainComp />} />
           <Route path='signin' element={<SignIn />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
