import { useRouter } from "next/router"
import MainContainer from "../../components/MainContainer"
import styles from '../../styles/User.module.scss'

export default function User({user}){
  const {query} = useRouter()

  return (
    <MainContainer>
    <div className={styles.user}>
      <h1>Пользователь с id {query.id}</h1>
      <div>{user.name}</div>
    </div>
    </MainContainer>
  )
}

export async function getServerSideProps({params}){
  const response = await fetch('https://jsonplaceholder.typicode.com/users/'+params.id)
  const user = await response.json()
  return{
    props: {user},
  }
}