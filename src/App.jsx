import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import SignIn from './pages/Sign/Sign_in';
import SignUp from './pages/Sign/Sign_up';
import Search from './pages/search';
import Apitest from './pages/apitest';
import FestivalList from './pages/FestivalList';
import List from './pages/List';
import FestivalPlus from './pages/FestivalPlus'
import TravelAssistant from './pages/TravelAssistant';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/Search' element={<Search />} />
        <Route path='/Apitest' element={<Apitest />} />
        <Route path='/FestivalList' element={<FestivalList />} />
        <Route path='/List' element={<List />} />
        <Route path='/festivalList/:id' element={<FestivalPlus />} />
        <Route path='/TravelAssistant' element={<TravelAssistant />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import { Map } from "react-kakao-maps-sdk";

// export default function KakaoMap(){
//   return (
//     <Map // 지도를 표시할 Container
//       center={{
//         // 지도의 중심좌표
//         lat: 33.450701,
//         lng: 126.570667,
//       }}
//       style={{
//         // 지도의 크기
//         width: "100%",
//         height: "450px",
//       }}
//       level={3} // 지도의 확대 레벨
//     />
//   );
// }
