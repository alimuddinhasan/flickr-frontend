import { Form } from 'react-bootstrap'

import styles from './header.module.scss'
import utils from 'styles/utils.module.scss'

const header = () => {
  return (
    <section className={styles.header} >
      <div className={[utils.container, styles.container].join(' ')}>
        <div className={styles.title}>
          <h3>Flickrgram</h3>
          <p>by Alimuddin Hasan</p>
        </div>
        <div className={styles.search}>
          {/* <input placeholder="Search tags..." /> */}
          <Form.Control size="sm" type="text" placeholder="Search tags..." />
        </div>
      </div>
    </section>
  )
}

export default header
