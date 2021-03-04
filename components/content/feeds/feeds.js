import Feed from './feed/feed'

import styles from './feeds.module.scss'
import utils from 'styles/utils.module.scss'

const feeds = () => {
  return (
    <section>
      <div className={utils.container}>
        <Feed />
      </div>
    </section>
  )
}

export default feeds
