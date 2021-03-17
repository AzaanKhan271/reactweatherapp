import React , { useEffect, useState } from 'react';


const TempApp = () => { 
    const [city,setCity] = useState('')
    const [search,setSearch] = useState('Karachi')

    useEffect( () =>{
        const fetchApi = async () =>{
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=606a5ce9a9b7be5f103bc0a30e57f2f5`
            const response = await fetch(url)
            const resJson = await response.json()
            // console.log(resJson);
            setCity(resJson.main)
        }
        fetchApi()
    },[search] ) 
    return (
        <><div className='main_div'>
            
        <div className='box'>
        <i className="fas fa-cloud-sun-rain fa-7x"></i>
        <h1 className='mainHead'>Weather App</h1>
            <div className='inputData'>
                <input placeholder='Enter City Name' type='search' className='inputFeild' onChange= {(e)=>{
                    setSearch(e.target.value)
                }} value ={search}/>
            </div>
            {!city ? (<h2>No Data Found</h2>) : (
               <div> <div className='info'>
                <h2 className='location'>
                <i className="fas fa-street-view"></i>{search}
                </h2>
                <h1 className='temp'>
                   
                   {city.temp} Cel
    
                </h1>
                <h3 className='tempmin_max'>
             Max Temp: {city.temp_max} Cel | Min Temp :{city.temp_min} Cel
    
                </h3>
                
            </div>
            <div className='wave -one'></div>
            <div className='wave -two'></div>
            <div className='wave -three'></div></div>
            
            )}
            </div>
            </div>
        </>
    )
    }
    
    
    
export default TempApp;