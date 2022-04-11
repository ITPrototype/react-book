import { useEffect, useState } from "react";
import Product from "../front/products/Product";
import "./ButtonUI.css"
import backgound from '../images/bookshd.jpg'
const DataS = () => {
    const[books,setBooks]=useState([]);
    const[page,setPage]=useState(1);
    const[query,setQuery]=useState("react");
    const[search,setSearch]=useState('');
    const[loading,setLoading]=useState(false)
    const getBooks = async(page = 0)=>{
        const response = await fetch(
            `https://api.itbook.store/1.0/search/${query}/${page}`
        )
        const data = await response.json();
        setBooks(data.books)
        setPage(parseInt(data.page))
        setLoading(true)
        console.log(data);
    }
    useEffect(()=>{
        getBooks(page);
    },[page,query])
    const updateSearch = e => {
        setSearch(e.target.value)
    }
    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }
    const nextPage = () =>{
        setPage(page + 1);
    }
    const prevPage = () =>{
        setPage(page - 1);
    }
    return(
        <div className="m-cont">
            <div className='big-image' style={{backgroundImage:`url(${backgound})`,backgroundSize:'cover',height:'800px'}}>
                <p className='blabla'>
                A room without books is like a body without a soul.
                <span className='storebla'>
                    Book Store
                </span>
                &mdash; Take a good book to bed with you—books do not snore. &mdash;
                </p>
            </div>
            <div className="m-cont-s">
                <form onSubmit={getSearch} className="search">
                    <input type="text" placeholder="Search..." className="search-input" value={search} onChange={updateSearch}/>
                    <button className="btn btn-outline-primary" type="submit">Search</button>
                </form>
                <Product
                    books = {books}
                />
                <div className="wind-to-top">
                    <button onClick={()=>window.scrollTo(0, 0)}><i className="fa-solid fa-angles-up"></i></button>
                </div>
                <div className="buttons">
                    <button className="btn btn-outline-primary" onClick={prevPage}><i className="fa-solid fa-angles-left"></i> Prev</button>
                    <button className="btn btn-outline-primary" onClick={nextPage}>Next <i className="fa-solid fa-angles-right"></i></button>
                </div>
            </div>
        </div>
    )
}
export default DataS;