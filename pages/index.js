import { useState, useEffect } from 'react'
import Head from 'next/head'

import axios from 'plugins/axios'

import Aux from 'components/hoc/hoc'
import Header from 'components/content/header/header'
import Feeds from 'components/content/feeds/feeds'

export default function Home() {
  const [search, setSearch] = useState('')
  const [images, setImages] = useState([])
  const [isFirstLoading, setIsFirstLoading] = useState(true)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (loading) {
      fetchImages(search)
    }
  }, [loading])

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  })

  const scrollHandler = (event) => {
    // If scroll reach bottom of the page
    if (!loading && window.pageYOffset >= window.document.body.clientHeight - window.document.body.clientHeight / 4) {
      console.log('WAKTUNYA LOAD BARU')
      setLoading(true)
    }
  }

  const searchHandler = (text) => {
    setSearch(text)
    setImages([])
    setLoading(true)
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
      // setIsFirstLoading(false)
      setLoading(false)
      setImages(prevImages => [...prevImages, ...data.items])
    } catch (err) {
      console.log('SOMETHING WRONG', err)
    }
  }

  console.log('IMAGES', images)

  return (
    <Aux>
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
    </Aux>
  )
}
