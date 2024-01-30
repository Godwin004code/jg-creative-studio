
import './App.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Indexpage from './pages/Indexpage';
import ProjectPage from './pages/ProjectPage';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Indexpage />} />
      <Route path="/projects" element={<ProjectPage />} />
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
