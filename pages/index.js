import { useState, useEffect } from 'react'
import Head from 'next/head'

import axios from 'plugins/axios'

import Header from 'components/content/header/header'
import Feeds from 'components/content/feeds/feeds'

export default function Home() {
  const [search, setSearch] = useState('')

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
      const images = await axios.get('/images', {
        params
      })

      console.log('RESULT', images)
    } catch (err) {
      console.log('SOMETHING WRONG', err)
    }
  }
  return (
    
    <div>
      <Head>
        <title>Flickrgram | Load Images on Your Scroll</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Feeds />
      </main>

      <footer>
      </footer>
    </div>
  )
}
