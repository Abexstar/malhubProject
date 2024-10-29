import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import MainComp from './component/MainComp';
import SignIn from './component/SignIn';
import Login  from './component/Login';
import Payment from './component/Payment';
import NotFound from './component/NotFound';
import BookPlanM from './component/BookPlanM';
import BookPlanW from './component/BookPlanW';
import BookPlanD from './component/BookPlanD';
import BookPlanOs from './component/BookPlanOs';



function App() {
  const location = useLocation();

  return (
    <>
      <div>
           
        <Routes>
           <Route path='/' element={<SignIn />} />
           <Route path='signin' element={<SignIn/>} />
           <Route path='login' element={<Login />} />
           <Route path='login/bookplan/bookplanw' element={<BookPlanW />} />
           <Route path='login/bookplan/bookplanw/payment' element={<Payment />} />
           <Route path='login/bookplan' element={<BookPlanD />} />
           <Route path='login/bookplan/payment' element={<Payment />} />
           <Route path='login/bookplan/bookpland' element={<BookPlanD />} />
           <Route path='login/bookplan/bookpland/payment' element={<Payment />} />
           <Route path='login/bookplan/bookpland/bookplanw' element={<BookPlanW />} />
           <Route path='login/bookplan/bookpland/bookplanw/payment' element={<Payment />} />
           <Route path='login/bookplan/bookpland/bookplanw/bookplanm' element={<BookPlanM />} />
           <Route path='login/bookplan/bookplanw/bookplanm' element={<BookPlanM />} />
           <Route path='login/bookplan/bookplanw/bookplanm/payment' element={<Payment />} />
           <Route path='login/bookplan/bookpland/bookplanw/bookplanm/payment' element={<Payment />} />
           <Route path='login/bookplan/bookpland/bookplanw/bookplanm/bookplanos' element={<BookPlanOs />} />
           <Route path='login/bookplan/bookplanw/bookplanm/bookplanos' element={<BookPlanOs />} />
           <Route path='login/bookplan/bookplanw/bookplanm/bookplanos/Payment' element={<Payment />} />
           <Route path='login/bookplan/bookpland/bookplanw/bookplanm/bookplanos/payment' element={<Payment />} />
           <Route path='payment' element={<Payment />} />
           <Route path='signin/login' element={<Login />}/>
           <Route path='bookplanm' element={<BookPlanM />} />
           <Route path='bookplanw' element={<BookPlanW />} />
           <Route path='bookpland' element={<BookPlanD />} />
           <Route path='bookplanos' element={<BookPlanOs />} />
           <Route path='bookplanm/payment' element={<Payment />} />
           <Route path='signin/login/bookplanm' element={<BookPlanM />} />
           <Route path='signin/login/bookplanm/payment' element={<Payment />} />
           <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App;

