import React from 'react'
import Grid from './Grid'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PropertyGrd1 = ({data}) => {
  return (
    <Col>
        <Card className='Card'>
             <Card.Img className='url' variant="top" src={'https://panel.wedu.ca/storage/'+data.ImageUrl} />
                  <Card.Body>
                      <Card.Title>{data.id} - {data.City} ({data.County})</Card.Title>
                         <Card.Text>{data.Ad_text}</Card.Text>
                            <b>{data.StandardAddress}</b>
                             <h4>{data.BedroomsTotal}Bed | {data.BathroomsFull}Bath | {data.Sqft}</h4>
                   </Card.Body>
            </Card>
   
         
   
 </Col>
  )
}

export default PropertyGrd1