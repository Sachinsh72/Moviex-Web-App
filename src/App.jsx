import { useEffect } from 'react'
import './App.css'
import { fetchDataFromApi } from './utils/api'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration } from './store/homeSlice'
import Home from './pages/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {

  const dispatch = useDispatch();
  const {url}  = useSelector((state) => state.home);
  console.log(url);

  useEffect(() => {
    apiTesting();
  },  []);

  const apiTesting = () =>{
    fetchDataFromApi('/movie/popular')
    .then((res) => {
      console.log(res);
      dispatch(getApiConfiguration(res))
    })
  }


  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
