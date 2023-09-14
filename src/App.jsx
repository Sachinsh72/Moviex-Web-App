import { useEffect } from 'react'
import './App.css'
import { fetchDataFromApi } from './utils/api'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration } from './store/homeSlice'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Detail from './pages/Details/Detail'
import SearchResult from './pages/SearchResult/SearchResult'
import Explore from './pages/Explore/Explore'
import PageNotFound from './pages/404/PageNotFound'



function App() {

  const dispatch = useDispatch();
  const {url}  = useSelector((state) => state.home);
  console.log(url);

  useEffect(() => {
    fetchAppiConfig();
  },  []);

  const fetchAppiConfig = () =>{
    fetchDataFromApi('/movie/popular')
    .then((res) => {
      console.log(res);

      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
    };


      dispatch(getApiConfiguration(url))
    })
  }


  return (
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/:mediaType/:id" element={<Detail />} />
          <Route path="/search/:query" element={<SearchResult />} />
          <Route path="/explore/:mediaType" element={<Explore />} />
          <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
