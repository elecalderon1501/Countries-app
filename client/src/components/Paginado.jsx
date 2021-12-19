import React from "react";



export default function Paginado({countriesPerPage, allCountries, paginado}){
    const pageNumbers = []

    for (let i=0; i<=Math.ceil(allCountries/countriesPerPage); i++){
        pageNumbers.push(i+1)
    }

    return(
        <nav>
            <ul className = 'paginado'>
                {pageNumbers && pageNumbers.map((number) => (
                    <li className='number' key={number}>
                        <a href="#/"  onClick={() => paginado(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}