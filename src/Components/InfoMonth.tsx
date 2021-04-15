import { useContext } from 'react'
import { TableContext } from '../contexts/TableContext'
import styles from '../styles/components/InfoMonth.module.css'

export function InfoMonth() {
  const {items} = useContext(TableContext)
  var realValor = {
    realIncome: 0,
    realExpense: 0
  }

  items.income.forEach((e) => {
    realValor.realIncome += e.price
  })

  items.expense.forEach((e) => {
    realValor.realExpense += e.price
  })

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
              Real income: R${realValor.realIncome}
            </strong>
            <strong>
              Goal income: R${'300,00'}
            </strong>
          </div>

          <div>
            <strong>
              Real expense: R${realValor.realExpense}
            </strong>
            <strong>
              Goal expense: R${'300,00'}
            </strong>
          </div>
        </div>
      </header>
  )
}