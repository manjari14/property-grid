import React from 'react'

const Card = ({data}) => {
     console.log(data)

  return (
    <div className='wrapper'>
      <div className='Card'>
      <img className='url' src={'https://panel.wedu.ca/storage/'+data.ImageUrl}/>
        <p>{data.Ad_text}</p>
        <h5>{data.id} - {data.City} ({data.County})</h5>
        
        <b>{data.StandardAddress}</b>
        <h4>{data.BedroomsTotal}Bed | {data.BathroomsFull}Bath | {data.Sqft}</h4>

       
          

      </div>
     </div>
  )
}

export default Card