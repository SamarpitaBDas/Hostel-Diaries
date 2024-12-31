import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'; 
import Level from './pages/Level'; 
import Level_1 from './pages/Levels/lvl_1'
import Level_2 from './pages/Levels/lvl_2'
import Level_3 from './pages/Levels/lvl_3'
import Level_4 from './pages/Levels/lvl_4'
import Level_5 from './pages/Levels/lvl_5'
import Level_6 from './pages/Levels/lvl_6'
import Level_7 from './pages/Levels/lvl_7'
import Level_8 from './pages/Levels/lvl_8'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/level" element={<Level />} />
        <Route path='/kettle' element={<Level_1/>} />
        <Route path='/kettle' element={<Level_2/>} />
        <Route path='/kettle' element={<Level_3/>} />
        <Route path='/kettle' element={<Level_4/>} />
        <Route path='/kettle' element={<Level_5/>} />
        <Route path='/kettle' element={<Level_6/>} />
        <Route path='/kettle' element={<Level_7/>} />
        <Route path='/kettle' element={<Level_8/>} />
      </Routes>
    </Router>
  );
}

export default App;
