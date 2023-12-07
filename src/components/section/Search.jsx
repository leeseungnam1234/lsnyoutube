import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Search = () => {
    const [searchKeyword,setSearchKeyword] = useState
    const navigate = useNavigate();

    const handleSearch=()=>{
        console.log(searchKeyword)
        if(searchKeyword){
            navigate(`/search/${searchKeyword}`)
            setSearchKeyword('')
        }
    }

    return (
        <div id='search'>
            <div className='search_inner'>
                <label htmlFor="searchInput">
                    <span className='ir'>검색</span>
                </label>
                <input 
                type="text"
                id='searchInput'
                placeholder='검색어를 입력해주세용'
                autoComplete='off'
                className='search_input'
                onChange={e=>setSearchKeyword(e.target.value)}
                onKeyDown={e=>{
                    if(e.key === 'Enter'){
                        handleSearch()
                    }
                }}
                />
            </div>
        </div>
    )
}

export default Search