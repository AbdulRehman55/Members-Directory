import React, { useState, useContext } from 'react'
import { Box } from '@mui/material'
import SearchIcon from '../../img/Search.png'
import { searchContext } from '../../context'

export default function SearchBar(): ReactNode {
    const { setValue } = useContext(searchContext)
    const [input, setInput] = useState('')
    const handleSearch = (event): any => {
        setInput(event.target.value)
    }
    const handleOnClick = (e): any => {
        e.preventDefault()
        console.log(input)
        setValue(input)
    }
    return (
        <Box className="search" onSubmit={handleOnClick} component="form">
            <img className="input-icon" src={SearchIcon} alt="SearchIcon" />
            <input
                className="input-field"
                placeholder="Search With Name"
                onChange={handleSearch}
            />
            <button className="search-btn" type="submit">
                Search
            </button>
        </Box>
    )
}
