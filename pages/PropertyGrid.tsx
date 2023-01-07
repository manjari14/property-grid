import React from 'react'


const PropertyGrid = ({data}) => {
  return (
    <div>
        <div className="Card">
        <img className='url' src={'https://panel.wedu.ca/storage/'+data.ImageUrl}/>
          <div className="card-body">
       <h5 className="card-title">{data.id} - {data.City} ({data.County})</h5>
         <p className="card-text">{data.Ad_text}</p>
       <b>{data.StandardAddress}</b>
        <h4>{data.BedroomsTotal}Bed | {data.BathroomsFull}Bath | {data.Sqft}</h4>
   
      </div>
     </div>

       </div>
  )
}

export default PropertyGrid