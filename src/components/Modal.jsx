import styles from './Modal.module.scss'

export default function Modal(props) {
    const modalState = props.toggle
    const action = props.action
  return (
    <div className={`${styles.mContainer} ${modalState ? styles.active : ''} `}>
      <div className={styles.modal}>
        Modal Content
        <div className={styles.closeBtn} onClick={action} >X</div>
      </div>
    </div>
  )
}
