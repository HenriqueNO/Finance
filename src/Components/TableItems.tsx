import { useContext } from 'react'
import { TableContext } from '../contexts/TableContext'
import styles from '../styles/components/TableItems.module.css'

export function TableItems() {
  const {items} = useContext(TableContext)

  return (
    <div className={styles.container}>
      <div className={styles.incomeTable}>
        <h2>Income</h2>
        <div className={styles.index}>
            <label>Date</label>
            <label>Price</label>
            <label>Description</label>
            <label>Category</label>
        </div>

        <div className={styles.items}> 
          {items.income.map((e, i) => {
            return(
              <div key={i}>
                <p>{e.date}</p>
                <p>{e.price}</p>
                <p>{e.description}</p>
                <p>{e.category}</p>
              </div>
            )
          })}
        </div>
      </div>

      <div className={styles.expenseTable}>
        <h2>Expense</h2>
        <div className={styles.index}>
          <label>Date</label>
          <label>Price</label>
          <label>Description</label>
          <label>Category</label>
        </div>

        <div className={styles.items}>
        {items.expense.map((e, i) => {
            return(
              <div key={i}>
                <p>{e.date}</p>
                <p>{e.price}</p>
                <p>{e.description}</p>
                <p>{e.category}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}