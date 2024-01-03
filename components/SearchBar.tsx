"use client"
import React, { FormEvent } from 'react'

import { useState } from 'react'

const isValidAmazonProductUrl = (url: string) => {
  try {
    const parsedURL = new URL(url)
    const hostname = parsedURL.hostname

    if (hostname.includes('amazon')) {
      return true
    }
  } catch (error) {
    return false;
    
  }

  return false;
}

const SearchBar = () => {

  const [searchPromp, setSearchPromp] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    
    const isValidLink = isValidAmazonProductUrl(searchPromp)

    if (!isValidLink) {
      alert('Please enter a valid Amazon product link')
      return
    }

    try {
      setIsLoading(true)

      //scrape
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <form className='flex flex-wrap gap-4 mt-12' onSubmit={handleSubmit}>
    <input
        type='text'
        value={searchPromp}
        onChange={(e) => setSearchPromp(e.target.value)}
        placeholder='Enter product link'
        className='searchbar-input'
    />

    <button type='submit' className='searchbar-btn' disabled={searchPromp === ''}>
        {isLoading ? 'Loading...' : 'Search'}
    </button>
    </form>
  )
}

export default SearchBar