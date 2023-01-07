import Link from "next/link";
//import Image from "next/image";

import SearchBar from "./SearchBar";
import Grid from "./Grid";
import PropertyGrd1 from "./PropertyGrd1";





const Index = () => {
  return(
    <div>
    <div className="Head-Container">
    
     
    <nav className="Nav-Container">
   
      <ul className="menu-bar">
      <img className="src" src="https://admin.housen.ca/storage/1656930082.png"></img>
        <li className="li1">
        
        <Link  className="li3" href="/ForSale" >
         For Sale
          
        </Link>
        </li>
        
        <li className="li2">
        <Link  className="li3" href="/ForRent">
          For Rent
          </Link>
          
          </li>
          <li className="li2">
        <Link  className="li3" href="/Sell">
          Sell
        </Link>
        </li>
        <li className="li2">
        
        <Link  className="li3" href="/Blog">
          Blog
        </Link>
        </li>

      </ul>
    </nav>
    <div>
    <div className="Body-Container">
      <h1 className="text">Let's Find Your Dream Home</h1>
      <h3 className="text1">Search Active & Sold Listings, Sold Price Data, Market Stats & Daily Listings Alerts!</h3>
      
      
          </div>
      <SearchBar/>
         
      </div>
     
     
      
      </div>
       
      <Grid/>
      </div>

      
    
    
  )
}
export default Index;