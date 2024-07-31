import './App.css';
import Upper from './Upper';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
import SearchPage from './SearchPage';
 // Ensure the casing matches Header.js
 import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className="app">
      <Router>
         <Routes>
         <Route path='/search/:searchTerm' element={
          <>
            <Upper/>
            <div className='app_page'>
                 <Sidebar/>
                  <SearchPage/>
               </div>
           </>
         }/>
           <Route path='/' element={
            <>
            <Upper/>
            
              <div className='app_page'>
                 <Sidebar/>
                  <RecommendedVideos/>
               </div>
            </>
           }/>
         
        
         </Routes>


      </Router>
      

    </div>
  );
}

export default App;
