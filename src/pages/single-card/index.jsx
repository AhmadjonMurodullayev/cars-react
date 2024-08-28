import { useParams } from "react-router-dom"
const index = () => {
    const {id} = useParams()

  return (
    <div>
        <h2>ID:{id}</h2>
        <h1>Singel card</h1>
    </div>
  )
}

export default index