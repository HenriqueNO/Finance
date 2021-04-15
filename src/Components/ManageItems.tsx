import React, { useState } from "react";
import styles from "../styles/components/ManageItems.module.css"
import axios from "axios"

interface rowItemsProps {
  date: string,
  price: number,
  description: string,
  category: string,
  typeSubmit: boolean,
}

export function ManageItems() {
  const curr = new Date();
  const dateNow = curr.toISOString().substr(0,10);
  const [rowItems, setRowItems]  = useState<rowItemsProps>({
    date: dateNow,
    price: 0,
    description: "",
    category: "",
    typeSubmit: false
  })

  function submitData() {
    axios.post("/api/_data/submit", rowItems)
  }

  return (
    <div className={styles.container}>
      <h1>Add</h1>
      <div className={styles.formContainer}>
        <form action="" onSubmit={(e) => {e.preventDefault(); submitData()}}>
          
          <input type="date" title="date" defaultValue={dateNow} required
           pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
           onChange={(e) => {setRowItems({...rowItems, date: e.target.value})}}/>
          <input type="number" title="price" placeholder="Price" required
           onChange={(e) => {setRowItems({...rowItems, price: Number(e.target.value)})}}/>
          <input type="text" title="description" maxLength={20} placeholder="Description" 
           onChange={(e) => {setRowItems({...rowItems, description: e.target.value})}}/>
          <input type="" title="category" placeholder="Category" required
           onChange={(e) => {setRowItems({...rowItems, category: e.target.value})}}/>
          
          <div className={styles.buttons}>
            <button type="submit" onClick={() => {setRowItems({...rowItems, typeSubmit: false})}}>Income</button>
            <button type="submit" onClick={() => {setRowItems({...rowItems, typeSubmit: true})}}>Expense</button>
          </div>
        </form>
      </div>
    </div>
  )
}