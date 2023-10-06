import { Route, Routes } from "react-router-dom";
import Landing from './Landing';
import AboutMe from './AboutMe';
import '../styles/App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/aboutMe" element={<AboutMe />}></Route>
      </Routes>
    </div>
  );
}

export default App;
