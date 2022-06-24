import NavBar from './components/NavBar'
import FlatsList from './components/FlatsList'
import MapBox from './components/MapBox'

function App() {

  return (
    <>
      <NavBar />
      <div className="container my-3">
        <div className="row">
          <div className="col-md-8">
            <FlatsList />
          </div>
          <div className="col-md-4">
            <MapBox />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
