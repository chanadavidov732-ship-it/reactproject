import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import NewProject from './components/NewProject';
import ProjectSingle from './components/ProjectSingle';
import UpdateProject from './components/UpdateProject'


function App() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/NewProject" element={<NewProject />} />
      <Route path="/ProjectSingle" element={<ProjectSingle />} />
      <Route path="/UpdateProject" element={<UpdateProject />} />


    </Routes>
  );
}
export default App;