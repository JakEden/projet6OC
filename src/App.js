import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Components/AppRoutes'; 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRoutes /> {/* Utilisez le composant des routes ici */}
      </BrowserRouter>
    </div>
  );
}

export default App;