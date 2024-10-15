
import Herosection from './components/herosection'
import './components/assets/herosection.css'
import Header from './components/header';
import Syphax from './components/Syphax';
import Date from './components/Date';
// In your index.html or main React component file
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Good+Times&display=swap" />



function App() {
  return (
    <div className="App">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Sofia"/>

      </head>
      <Header></Header>
    <Herosection></Herosection>
    <Syphax></Syphax>
    <Date></Date>
    </div>
  );
}

export default App;
