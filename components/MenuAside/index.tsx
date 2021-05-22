import styles from './styles.module.scss'
import Link from 'next/link'

export function MenuAside() {
  return (
    <aside className={styles.menuContainer}>
      <label className={styles.buttonMenu}>Menu</label>
      <div>
        <button>+</button>
        <button>Grafico</button>
        <button>Meta</button>
        <Link href="/carteira">
          <button>Carteira</button>
        </Link>
        <button>Accont</button>
      </div>
    </aside>
  )
}