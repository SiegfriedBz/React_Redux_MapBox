import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { setFlats } from './actions/index'
import NavBar from './components/NavBar'
import FlatsList from './components/FlatsList'
import MapBox from './components/MapBox'

function App() {

  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(setFlats())
  }, [])

  const flats = useSelector(state => state.flats)

  return (
    <>
      <NavBar />
      <div className="container my-3">
        <div className="row">
          <div className="col-md-8">
            <FlatsList flats={flats} />
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
