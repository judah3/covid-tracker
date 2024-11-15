/* eslint-disable */
import React, { useState, useContext } from 'react'
import { TextField } from '@material-ui/core'
import { MapContext } from 'context/MapContext'

export default function SearchBar() {
  const { state: { confirmed, originalConfirmed }, dispatch, setSearchLoading } = useContext(MapContext)

  const [search, setSearch] = useState('')


  const matchThis = (item, search) => {
    return (
      item.combinedKey.match(new RegExp(search, "ig"))
    )
  };

  const handleSearchChange = (e) => {
    setSearchLoading(true)
    setSearch(e.target.value)
    var filteredData = confirmed.filter(item => {
      if (matchThis(item, e.target.value)) {
        return item;
      }
    });

    const searchedData = e.target.value.length > 0 ? filteredData : originalConfirmed;
    setTimeout(() => {
      dispatch({
        type: "set-confirmed",
        payload: {
          confirmed: searchedData
        }
      })
      setSearchLoading(false)
    }, 100);

  }

  return (
    <TextField
      label="Search country"
      className="search-bar"
      fullWidth
      value={search}
      variant="outlined"
      onChange={(e) => {
        handleSearchChange(e)
      }}
    />
  )
}
