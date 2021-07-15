import React, { useEffect, useState } from 'react'
import axios from 'axios'
/* import DrawTable from './DrawTable/drawTable'; */
import Pagination from '../../components/Pagination/pagination'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead  from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Row from './DrawTable/drawTable'

const Home = () =>{
    const [wordBoxTmp, setWordBoxTmp] = useState('')
    const [wordBox, setWordBox] = useState('')
    let [resultS, setResultS] = useState([]);
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
            setPaginaActual(1)
        }else{
            searchProduc()
        }
    },[wordBox])



    let posUltimoPro = paginaActual * productosXPag;
    let posPrimerPro = posUltimoPro - productosXPag;
    let productoActual = resultS.slice(posPrimerPro,posUltimoPro); 

    const paginacion = numPag => setPaginaActual(numPag)

    const [vfAsc, setVfAsc]=useState(false)
    const [vfDsc, setVfDsc]=useState(false)

    const ordAsc = (event) => {
        let idCampo = event.target.id
        switch(idCampo){
            case 'title':
                resultS.sort((title1,title2)=> {
                    if(title1.title < title2.title){
                        if (vfAsc){return -1}else{return 1} 
                    }else{
                        if (vfAsc){return 1}else{return -1} 
                    }});
                break;
            case 'relevance':
                resultS.sort((relevance1,relevance2)=> {
                    if(relevance1.relevance < relevance2.relevance){
                        if (vfAsc){return -1}else{return 1}
                    }else{
                        if (vfAsc){return 1}else{return -1} 
                    }});
                break;
            case 'price':
                resultS.sort((price1,price2)=> {
                    if(price1.price < price2.price){
                        if (vfAsc){return -1}else{return 1}
                    }else{
                        if (vfAsc){return 1}else{return -1} 
                    }});
                break;
            default:
        }
        setVfDsc(!vfDsc)
    }

    useEffect(()=>{
        rendeD()
        setVfAsc(!vfAsc)
    },[vfDsc])


    const handleOpenRow = async (event) =>{
        let idP = event.target.id
        console.log(idP)
         let result = await axios.get(`http://localhost:3001/api/product/${idP}`)
        console.log(result.data)
      }

    const rendeD = () => {
        posUltimoPro = paginaActual * productosXPag;
        posPrimerPro = posUltimoPro - productosXPag;
        productoActual = resultS.slice(posPrimerPro,posUltimoPro);

        return productoActual.map((row,index) => {
            return <Row key={index} data={row} open={handleOpenRow}/>
        })  
    }

    return(
        <div>
            <form onSubmit = {handleSubmit} >
                <label > Buscar: </label>
                <input type="text" id="findword" name="findword" onChange={onChangeWord}/>
                <input type="submit" value="Enviar" />
            </form>
            <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell size='small'></TableCell>
                  <TableCell onClick={ordAsc} id="title">Nombre</TableCell>
                  <TableCell onClick={ordAsc} id="relevance">Relevancia</TableCell>
                  <TableCell onClick={ordAsc} id="price">Precio</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rendeD()}
              </TableBody>
            </Table>
          </TableContainer> 
            <Pagination prodXPag={productosXPag} totalProd={resultS.length} paginar ={paginacion}/>
        </div>
    );   
}

export default Home;