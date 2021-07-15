import React, { useEffect, useState} from 'react'
import './covid.css';

const Covid = () =>{

const [data,setData] = useState([]); 

const getCovidData = async ()=>{
try{
    const res= await fetch('https://api.covid19india.org/data.json');
    const actualData= await res.json();
    console.log(actualData.statewise[0]);
    setData(actualData.statewise[0]);
}
catch(err){
    console.log(err);
}

}

useEffect(() =>{
    getCovidData();
},[]);


  return (
    <>
    <section>
   
   
      <div className="container8">
      <center> <h1>LIVE</h1></center>
    <center><h1 id="con8">COVID-19 CORONAVIRUS TRACKER</h1></center>
    <div className="row">
        <div className="co1">
            <h4>Our Country</h4>
            <p>India</p>
        </div>
        <div className="co2">
            <h4>Total Recover</h4>
            <p>{data.recovered}</p>
        </div>
        <div className="co3">
            <h4>Total Confirmed</h4>
            <p>{data.confirmed}</p>
        </div>

       
    </div>
    <div className="row">

        <div className="co4">
            <h4>Total Death</h4>
            <p>{data.deaths}</p>
        </div>
        <div className="co5">
            <h4>Total Active</h4>
            <p>{data.active}</p>
        </div>
        <div className="co6">
            <h4>Last Update</h4>
            <p>{data.lastupdatedtime}</p>
        </div>


       
    </div>

</div>

</section>
    
    </>
  )
}
export default Covid