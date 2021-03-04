import Feed from './feed/feed'

import styles from './feeds.module.scss'
import utils from 'styles/utils.module.scss'

const feeds = () => {
  return (
    <section className={styles.feeds}>
      <div className={[utils.container, styles.container].join(' ')}>
        <Feed />
        <Feed />
      </div>
    </section>
  )
}

export default feeds
