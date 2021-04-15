import { GetServerSideProps } from "next"
import { getSession, useSession } from "next-auth/client"
import { InfoMonth } from "../Components/InfoMonth"
import { ManageItems} from "../Components/ManageItems"
import { TableItems } from "../Components/TableItems"
import { TableProvider } from "../contexts/TableContext"
import styles from "../styles/pages/Home.module.css"
import { connectDatabase } from "./api/_connectDatabase"

interface HomeProps {
  data: {
    income: Array<{
      date: string,
      price: number,
      description: string,
      category: string
    }>;

    expense: Array<{
      date: string,
      price: number,
      description: string,
      category: string
    }>;
  }
}

export default function Home(props : HomeProps) {
  const [session, loading] = useSession()

  if (loading) {
    return <h1>Carregando...</h1>
  }

  if(session) {
    return (
      <div className={styles.container}>
        <div>
        <TableProvider props={props}>
          <InfoMonth />
          <TableItems />
          <ManageItems />
        </TableProvider>
        </div>
      </div>
    )
  } else {
    return <h1>Você não esta logado</h1>
  }
}

export const getServerSideProps : GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx)
  
  const db = await connectDatabase(process.env.MONGODB_URI)
  const collection = db.collection('data')
  
  if(!session) {
    return {
      redirect: {
        destination: "/"
      },
      notFound: true,
    }
  }
  const document = await collection.findOne({name: session.user.name})
  
  if (!document) {
    await collection.insertOne({
      name: session.user.name,
      email: session.user.email,
      image: session.user.image
    })
  }

  const data = JSON.parse(JSON.stringify(await collection.findOne(
    {name: session.user.name},
    {projection: {
      _id: 0,
      name: 0,
      email: 0,
      image: 0,
    }}
  )))


  ctx.res.setHeader("Cache-Control", "s-manage=30, stale-while-revalidate")
  return {
    props: {
      data
    }
  }
}