import { useState, useEffect } from 'react'
import Head from 'next/head'

import axios from 'plugins/axios'

import Header from 'components/content/header/header'
import Feeds from 'components/content/feeds/feeds'

export default function Home() {
  const [search, setSearch] = useState('')
  const [images, setImages] = useState([])
  const [isFirstLoading, setIsFirstLoading] = useState(true)

  useEffect(() => {
    if (!images.length || isFirstLoading) {
      fetchImages(search)
    }
  }, [images])

  const searchHandler = (text) => {
    setSearch(text)
    setImages([])
  }

  const fetchImages = async (search) => {
    let params = {}
    if (search) {
      params.tags = search
      params.tagmode = 'any'
    }
    try {
      const getImages = await axios.get('/images', {
        params
      })

      const { data } = getImages
      setIsFirstLoading(false)
      setImages(prevImages => [...prevImages, ...data.items])
    } catch (err) {
      console.log('SOMETHING WRONG', err)
    }
  }

  console.log('IMAGES', images)
  return (
    
    <div>
      <Head>
        <title>Flickrgram | Load Images on Your Scroll</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header onSearch={text => searchHandler(text)} />
        <Feeds images={images} />
      </main>

      <footer>
      </footer>
    </div>
  )
}
