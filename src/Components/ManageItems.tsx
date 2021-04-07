import styles from '../styles/components/ManageItems.module.css'

export function ManageItems() {
  const curr = new Date();
  const date = curr.toISOString().substr(0,10);

  return (
    <div className={styles.container}>
      <h1>Add</h1>
      <div className={styles.formContainer}>
        <form action="" onSubmit={e => { e.preventDefault(); }}>
          <input type="date" title="Date" defaultValue={date}  pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"/>
          <input type="number" title="Price" placeholder="Price"/>
          <input type="text" title="Description" maxLength={20} placeholder="Description"/>
          <input type="" title="Category" placeholder="Category"/>
          <div className={styles.buttons}>
            <button type='submit'>Income</button>
            <button type='submit'>Expense</button>
          </div>
        </form>
      </div>
    </div>
  )
}