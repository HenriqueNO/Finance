import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import styles from './styles.module.scss'

export function Header() {
  const currentDate = format(new Date(), 'EEEEEEE, d MMMM', { locale: ptBR })

  return (
    <header className={styles.container}>
      <h1>Finance</h1>
      <p>Construa os três pilares, organizando sua vida financeira.</p>
      <span>{currentDate}</span>
    </header>
  )
}