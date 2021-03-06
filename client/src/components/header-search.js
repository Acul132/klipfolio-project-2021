import React, {useState, useEffect, useRef} from 'react'
import styled from 'styled-components'
import HeaderSearchResults from 'components/header-search-results'
import { useSearchOptions } from 'hooks/use-search-options'
 
const SearchContainer = styled.div`
  border: 1px solid #cccccc;
  border-radius: 4px;
  padding: 2px;
  display: flex;
  position: relative;
  max-width: 40rem;
  width: 100%;
`

const SearchInput = styled.input`
  border: none;
  flex-grow: 1;
  padding: 10px;
  font-size: 1rem;
  font-weight: bold;
`

const SearchButton = styled.button`
  color: white;
  background-color: #5472B7;
  border: none;
  border-radius: 4px;
  padding: 5px 15px;
  font-weight: bold;
  font-size: 1rem;

  :hover {
    cursor: pointer;
  }
`

const HeaderSearch = () => {
  const {isLoading, data, error } = useSearchOptions()
  const [activeFilters, setActiveFilters] = useState([])
  const [results, setResults] = useState([])
  const [search, setSearch] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef()
  
  const refineSearch = () => {
    //Handle cases where data does not exist yet or an error has occured
    if (isLoading || !data?.options || error || search === null) {
      return;
    }

    setResults(data.options.filter(option => {
      //Filter the current search results based on active filters and input text
      if(activeFilters.length > 0) {
        return option.title.toLowerCase().includes(search.toLowerCase()) && activeFilters.includes(option.category)
      } else {
        return option.title.toLowerCase().includes(search.toLowerCase())
      }
    }))
  }
  
  const filter = (filter) => {
    //Toggle the two filters on and off
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter(f => f !== filter))
    } else {
      setActiveFilters([...activeFilters, filter])
    }
    
  }

  const onChange = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    refineSearch()
  }, [search, data, activeFilters, refineSearch])

  //Set isOpen to false if the document is clicked with cursor NOT over the search
  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsOpen(false)
    }
  }

  const startSearch = () => {
    if(!isOpen) {
      setIsOpen(true)
      setSearch('') //Important to set search here in order to refine the search upon initial click
    }
  }

  useEffect(() => {
    //Adding event listener (and cleanup) to be used in order to close the search results
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <SearchContainer ref={ref}>
      <SearchInput placeholder={isLoading ? "Loading..." : "Search..."} disabled={isLoading} onChange={onChange} onClick={startSearch}/>
      <SearchButton>Search</SearchButton>
      {error && <p>Error loading search</p>}
      {isOpen && <HeaderSearchResults results={results} activeFilters={activeFilters} filter={filter}/>}
    </SearchContainer>
  )
}

export default HeaderSearch