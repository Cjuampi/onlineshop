import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DrawTable from './DrawTable/drawTable';
import Pagination from '../../components/Pagination/pagination'

const Home = () =>{
    const [wordBoxTmp, setWordBoxTmp] = useState('')
    const [wordBox, setWordBox] = useState('')
    const [resultS, setResultS] = useState([]);
    const [paginaActual, setPaginaActual] = useState(1);
    const [productosXPag, setProXPag] = useState(10);

    const allProducts = async () =>{
        let result = await axios.get(`http://localhost:3001/api/products`)
        setResultS(result.data)
    }

    const searchProduc = async ()=>{
        let result = await axios.get(`http://localhost:3001/api/products/${wordBox}`)
        console.log(result.data)
        setResultS(result.data)
    }

    const handleSubmit = (event) =>{
        event.preventDefault(); 
        setWordBox(wordBoxTmp)
    }

    const onChangeWord = (event)=>{
        setWordBoxTmp(event.target.value)
    }

    useEffect(()=>{
        console.log('***ejecuto useeffect***')
        allProducts()
    },[])

    useEffect(()=>{
        console.log('------EJecuto useffect2-------')
        if (wordBox){
            searchProduc()
        }else{
            allProducts() 
        }
    },[wordBox])

    const indexUltimoPro = paginaActual * productosXPag;
    const indexPrimerPro = indexUltimoPro - productosXPag;
    const productoActual = resultS.slice(indexPrimerPro,indexUltimoPro); 

    const paginacion = numPag => setPaginaActual(numPag)

    return(
        <div>
            <form onSubmit = {handleSubmit} >
                <label > Buscar: </label>
                <input type="text" id="findword" name="findword" onChange={onChangeWord}/>
                <input type="submit" value="Enviar" />
            </form>
            <DrawTable data={productoActual}/>
            <Pagination prodXPag={productosXPag} totalProd={resultS.length} paginar ={paginacion}/>
        </div>
    );   
}

export default Home;