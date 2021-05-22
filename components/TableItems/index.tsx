import styles from './styles.module.scss'
import json from '../../data.json'
import { useContext, useState } from 'react'
import { MonthContext } from '../../contexts/MonthContext'

interface ItemsProps {
  date: string;
  price: number;
  description: string;
  category: string;
}

export function TableItems() {
  const {date} = useContext(MonthContext)
  const [isActiveIncomeEdit, setIsActiveIncomeEdit] = useState<boolean>(false)
  const [isActiveExpenseEdit, setIsActiveExpenseEdit] = useState<boolean>(false)
  
  const [incomeItem, setIncomeItem] = useState<ItemsProps>({
    date: '',
    price: 0,
    description: '',
    category: ''
  })
  const [expenseItem, setExpenseItem] = useState<ItemsProps>({
    date: '',
    price: 0,
    description: '',
    category: ''
  })

  function handleIncomeitem(e) {
    setIncomeItem({
      date: e.date,
      price: e.price,
      description: e.description,
      category: e.category
    })
    setIsActiveIncomeEdit(true)
  }

  function handleExpenseitem(e) {
    setExpenseItem({
      date: e.date,
      price: e.price,
      description: e.description,
      category: e.category
    })
    setIsActiveExpenseEdit(true)
  }

  return (
    <section className={styles.container}>
      <div style={{width: '100%'}}>
        <h1>Renda</h1>
        <div className={styles.infoContainer}>
          <p>Real: R${'10'}</p>
          <p>Meta: R${'10'}</p>
        </div>
        <div className={styles.tableContainer}>
          {isActiveIncomeEdit ? (
            <div className={styles.containerItems}>
              <button className={styles.previousButton} onClick={() => setIsActiveIncomeEdit(false)}>{'<-'} Voltar</button>
              <h2>Painel de edição</h2>
              <div className={styles.formEdit}>
                <label htmlFor="">Data:</label>
                <input type="date" defaultValue={incomeItem.date}></input>

                <label htmlFor="">Preço:</label>
                <input type="number" defaultValue={incomeItem.price}></input>

                <label htmlFor="">Descrição:</label>
                <input type="text" defaultValue={incomeItem.description}></input>

                <label htmlFor="">Categoria:</label>
                <input type="text" defaultValue={incomeItem.category}></input>
              </div>
              <div className={styles.buttonsContainer}>
                <button className={styles.deleteButton}>Excluir</button>
                <button className={styles.editButton}>Confirmar edição</button>
              </div>
            </div>
          ) : 
            json[date.month]?.income.length === 0 || json[date.month]?.income === undefined  ?
              <div>
                <table>
                  <thead>
                    <tr>
                      <th>Data</th>
                      <th style={{ minWidth: '80px'}}>Preço</th>
                      <th>Descrição</th>
                      <th>Categoria</th>
                    </tr>
                  </thead>
                </table>
                <p className={styles.withoutData}>Ainda não há dados aqui</p>
              </div> :
              <table>
                <thead>
                  <tr>
                    <th>Data</th>
                    <th style={{ minWidth: '80px'}}>Preço</th>
                    <th>Descrição</th>
                    <th>Categoria</th>
                  </tr>
                  
                </thead>
                <tbody>
                  {json[date.month]?.income?.map((e, key: number )=> {
                    return (
                      <tr onClick={() => handleIncomeitem(e)} key={key}>
                        <td>{e.date}</td>
                        <td>R${e.price}</td>
                        <td>{e.description}</td>
                        <td>{e.category}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
          }
        </div>
      </div>

      <div style={{width: '100%'}}>
        <h1>Despesa</h1>
        <div className={styles.infoContainer}>
          <p>Real: R${'10'}</p>
          <p>Meta: R${'10'}</p>
        </div>
        <div className={styles.tableContainer}>
          {isActiveExpenseEdit ? (
              <div className={styles.containerItems}>
              <button className={styles.previousButton} onClick={() => setIsActiveExpenseEdit(false)}>{'<-'} Voltar</button>
              <h2>Painel de edição</h2>
              <div className={styles.formEdit}>
                <label htmlFor="">Data:</label>
                <input type="date" defaultValue={expenseItem.date}></input>

                <label htmlFor="">Preço:</label>
                <input type="number" defaultValue={expenseItem.price}></input>

                <label htmlFor="">Descrição:</label>
                <input type="text" defaultValue={expenseItem.description}></input>

                <label htmlFor="">Categoria:</label>
                <input type="text" defaultValue={expenseItem.category}></input>
              </div>
              <div className={styles.buttonsContainer}>
                <button className={styles.deleteButton}>Excluir</button>
                <button className={styles.editButton}>Confirmar edição</button>
              </div>
            </div>
          ) :
            json[date.month]?.expense.length === 0 || json[date.month]?.expense === undefined  ?
            <div>
            <table>
              <thead>
                <tr>
                  <th>Data</th>
                  <th style={{ minWidth: '80px'}}>Preço</th>
                  <th>Descrição</th>
                  <th>Categoria</th>
                </tr>
              </thead>
            </table>
            <p className={styles.withoutData}>Ainda não há dados aqui</p>
            </div> :
            <table>
              <thead>
                <tr>
                  <th>Data</th>
                  <th style={{ minWidth: '60px'}}>Preço</th>
                  <th>Descrição</th>
                  <th>Categoria</th>
                </tr>
                
              </thead>
              <tbody>
                {json[date.month]?.expense?.map((e, key)=> {
                  return (
                    <tr onClick={() => handleExpenseitem(e)} key={key}>
                      <td>{e.date}</td>
                      <td>R${e.price}</td>
                      <td>{e.description}</td>
                      <td>{e.category}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table> 
          }
          
        </div>
      </div>
    </section>
  )
}