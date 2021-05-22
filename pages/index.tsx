import Head from 'next/head';
import { MonthInfo } from '../components/MonthInfo';
import { TableItems } from '../components/TableItems';
import { AppendItems } from '../components/AppendItems';
import styles from './home.module.scss';
import { MonthProvider } from '../contexts/MonthContext';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Finance</title>
      </Head>
      <div>
        <MonthProvider>
          <MonthInfo />
          <TableItems />
          <AppendItems />
        </MonthProvider>
      </div>
    </div>
  )
}
