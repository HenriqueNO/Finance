import styles from '../styles/components/InfoMonth.module.css'

export function InfoMonth() {
  return (
      <header className={styles.container}>
        <div className={styles.monthSelector}>
          <h1>Month</h1>
          <div>
            <button>
              <span>&#8678;</span>
            </button>
            <p>{'April'}</p>
            <button>
              <span>&#8680;</span>
            </button>
          </div>
        </div>

        <div className={styles.tableIndex}>
          <div>
            <strong>
              Real income: R${'1000,00'}
            </strong>
            <strong>
              Goal income: R${'300,00'}
            </strong>
          </div>

          <div>
            <strong>
              Real expense: R${'1000,00'}
            </strong>
            <strong>
              Goal expense: R${'300,00'}
            </strong>
          </div>
        </div>
      </header>
  )
}