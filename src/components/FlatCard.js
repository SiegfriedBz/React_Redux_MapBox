import { useDispatch } from 'react-redux'
import { selectFlat } from "../actions/index"

const FlatCard = ({flat}) => {

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(selectFlat(flat))
  }

  return (
    <div className="card card-category">
      <img src={flat.imgURL} className="card-img-top p-1 rounded-4" alt="..."/>
      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-center">
          <div className="fs-6">{flat.address}</div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="fs-6 fw-normal">{flat.price} CHF/day</div>
        </div>
      </div>
      <button onClick={handleClick} className='btn btn-primary'>Select</button>
    </div>
  )
}

export default FlatCard
