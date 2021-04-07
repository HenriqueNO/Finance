import styles from '../styles/components/TableItems.module.css'

export function TableItems() {
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
          <div>
            <p>12/12/20</p>
            <p>100,00</p>
            <p>Compra</p>
            <p>Mercado</p>
          </div>
          <div>
            <p>12/12/20</p>
            <p>100,00</p>
            <p>Compra</p>
            <p>Mercado</p>
          </div>
          <div>
            <p>12/12/20</p>
            <p>100,00</p>
            <p>Compra</p>
            <p>Mercado</p>
          </div>
          <div>
            <p>12/12/20</p>
            <p>100,00</p>
            <p>Compra</p>
            <p>Mercado</p>
          </div>
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
          <div>
            <p>12/12/20</p>
            <p>100,00</p>
            <p>Compra</p>
            <p>Mercado</p>
          </div>
        </div>
      </div>
    </div>
  )
}