import { useState, useEffect } from 'react'
import Head from 'next/head'

import axios from 'plugins/axios'

import Header from 'components/content/header/header'
import Feeds from 'components/content/feeds/feeds'

export default function Home() {
  const [search, setSearch] = useState('')
  const [images, setImages] = useState([])

  useEffect(() => {
    fetchImages()
  }, [])

  const fetchImages = async () => {
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

      const newImages = [
        ...JSON.parse(JSON.stringify(images)),
        ...data.items
      ]
      
      setImages(newImages)
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
        <Header />
        <Feeds images={images} />
      </main>

      <footer>
      </footer>
    </div>
  )
}
