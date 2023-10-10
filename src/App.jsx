import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllRest from './components/AllRest/AllRest';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ViewRest from './components/ViewRest/ViewRest';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* local 3000 AllRest component */}
        <Route path='/' element={<AllRest />} />

        {/* View particular restaurents localhost:3000/view/43 */}
        <Route path='/view/:id' element={<ViewRest/>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
