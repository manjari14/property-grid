import React, { useState, useEffect, Component } from "react";
import Card from './Card'
//import { MockData } from './MockData'
import { Body } from './Body'
import { json } from "stream/consumers";
import Helper from "../Helper";
import { get } from "https";
//import PropertyGrid from "./PropertyGrid";
import PropertyGrd1 from "./PropertyGrd1";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Grid = ()=>{
  const [bodyData ,setBodyData] = useState([]);
  async function getCard(){
    let url ="http://34.130.143.118:81/services/search/listings";
 let method="POST";
 let body={
  
  "search": "toronto",
  "propertyType": null,
  "propertySubType": [],
  "basement": [],
  "features": [],
  "priceMin": null,
  "priceMax": null,
  "beds": null,
  "baths": null,
  "status": "Sale",
  "sortBy": null,
  "currPage": "1",
  "dom": null,
  "sqft": "3000",
  "shape": "",
  "currPathQuery": null,
  "zoom": 12,
  "currBounds": "",
  "community": [],
  "listingStatus": "Active"
}
  let res = await Helper.getApiResponse(url,method,body,{}) 
  //console.log(res)
   setBodyData(res)
   }
  useEffect(() => {
    getCard();
  }, []);
console.log(bodyData);
  return (
    <Container className="Container">
    
     
      {bodyData?.alldata?.map((item)=>{
          console.log("im running",item)
            return(
                //<Card data={item}/>
                <PropertyGrd1 data={item}/>
                )
        })}
       
       
        </Container>
        
  
  )
      }


export default Grid