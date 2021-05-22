import { useContext } from 'react';
import { MonthContext } from '../../contexts/MonthContext';
import styles from './styles.module.scss';

export function MonthInfo() {
  const {date, monthSelected, dateSocket, handleNextMonth, handlePreviousMonth } = useContext(MonthContext)
  
  return (    
      <section className={styles.container}>
        <div>
          <h1>Mês</h1>
          <div>
            <button type="button" onClick={handlePreviousMonth}><span>&lArr;</span></button>
              <input
                type="month"
                onChange={dateSocket}
                value={`${date.year}-${('00' + date.month).slice(-2)}`}
                ref={monthSelected}
              />
            <button type="button" onClick={handleNextMonth}><span>&rArr;</span></button>
          </div>
        </div>
      </section>
  )
}