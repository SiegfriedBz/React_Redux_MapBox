import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { setFlats } from "../actions/index"
import FlatCard from './FlatCard'

const FlatsList = () => {

  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(setFlats())
  }, [])

  const flats = useSelector(state => state.flats)

  return (
    <div className="cards">
        {flats && flats.map(flat => {
        return <FlatCard key={flat.id} flat={flat} />
        })
      }
    </div>
  )
}

export default FlatsList
