import React from 'react'
import FlatCard from './FlatCard'

const FlatsList = ({ flats }) => {
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
