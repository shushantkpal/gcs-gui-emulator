import logo from './logo.svg';
import './App.css';
import TwoColumnLayout from './ParentLayout/twoColumnLayout';
import './css/style.css'
import Header from './ParentLayout/header';
function App() {
  return (
    <div>
      <Header />
      <div className="style">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <TwoColumnLayout />
      </div>
    </div>
  );
}

export default App;
