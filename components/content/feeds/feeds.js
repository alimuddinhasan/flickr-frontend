import Feed from './feed/feed'

import styles from './feeds.module.scss'
import utils from 'styles/utils.module.scss'

const feeds = () => {
  return (
    <div className={utils.container}>
      <Feed />
    </div>
  )
}

export default feeds
