import HomePage from './component/HomePage/HomePage';
import Menu from './component/Menu/Menu'
import { Route, Routes } from 'react-router-dom';
import LookingToBuy from './component/HomePage/SecondPage/LokkingBuySell/LookingForBuySellLeft/LookingToBuy/LookingToBuy';
import LookingToSell from './component/HomePage/SecondPage/LokkingBuySell/LookingForBuySellLeft/LookingToSell/LookingToSell';
import Nav from './component/Nav/Nav';
import Sellmachines from './component/Sellmachines/Sellmachines';
import Abouts from './component/AboutUs/Abouts';
function App() {
  return (
    <div>
    <Nav/>
       <Menu/>
       <Routes>
        <Route path='/' element={<HomePage/>}>
          <Route path='/' element={<LookingToBuy/>}/>
          <Route path='lookingtosell' element={<LookingToSell/>}/>
        </Route>
        <Route path='sellmachines' element={<Sellmachines/>}/>
        <Route path='aboutus' element={<Abouts/>}/>
       </Routes>
    
    </div>
  );
}

export default App;
