import React from 'react'
import './pagination.css'

const Pagination = ({prodXPag, totalProd, paginar}) =>{
    const numPag = [];

    for (let i = 1; i <= Math.ceil(totalProd / prodXPag); i++) {
        numPag.push(i);
    }
    return(
        <nav>
        <ul >
          {numPag.map(num => (
            <li key={num}>
              <a onClick={() => paginar(num)} href='#' >
                {num}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
}

export default Pagination;