import styles from './header.module.scss'
import utils from 'styles/utils.module.scss'

const header = () => {
  const classArray = [styles.header]
  return (
    <section className={classArray.join(' ')} >
      <div className={utils.container}>
        <div className={styles.title}>
          <h3>Flickrgram</h3>
        </div>
        <div className={styles.search}>
          <input placeholder="Search tags..." />
        </div>
      </div>
    </section>
  )
}

export default header
