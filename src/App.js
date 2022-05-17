import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Addbooks from './Component/Addbooks';
import Search from './Component/Search';

function App() {
  return (
    <div >
      <Addbooks/>
      <Search/>
    </div>
  );
}

export default App;
