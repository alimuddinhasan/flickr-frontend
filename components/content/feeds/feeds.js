import Feed from './feed/feed'

import styles from './feeds.module.scss'
import utils from 'styles/utils.module.scss'

const feeds = ({ images }) => {
  const feed = images.map((image, index) => {
    const author = {
      name: 'Author',
      link: `https://www.flickr.com/people/${image.author_id}`
    }
    return <Feed key={index} image={image.media.m} title={image.title} publishedAt={image.published} author={author} />
  })
  return (
    <section className={styles.feeds}>
      <div className={[utils.container, styles.container].join(' ')}>
        {feed}
      </div>
    </section>
  )
}

export default feeds
