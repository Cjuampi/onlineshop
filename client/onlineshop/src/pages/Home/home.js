import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DrawTable from './DrawTable/drawTable';

const Home = () =>{
    const [resultS, setResultS] = useState([])
    const allProducts = async () =>{
        let result = await axios.get(`http://localhost:3001/api/products`)
        setResultS(result.data)
    }
    const handleSubmit = (event) =>{
        event.preventDefault(); 
    }

    const printArray = () =>{
        return <DrawTable data={resultS}/>
    }

    useEffect(()=>{
        allProducts()
    },[])

/*     useEffect(()=>{
        printArray()
    },[resultS]) */


    return(
        <div>
            <form onSubmit = {handleSubmit} >
                <label > Buscar: </label>
                <input type="text" id="findword" name="findword" />
                <input type="submit" value="Enviar" />
            </form>
            <div>{printArray()}</div>
        </div>
    );   
}

export default Home;