import logo from './logo.svg';
import First from './First'

const myCar={
name:"BMW",
color:"black",
year:"2020"
}


function App() {
  return (
    <div className="App">
        <First myCar={myCar}/>
    </div>
  );
}

export default App;
