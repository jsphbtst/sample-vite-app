import { useParams } from "react-router-dom"

const UserAboutPage = () => {
  const params = useParams()

  return (
    <div>
      <h1>About page for user {params.userId}</h1>
    </div>
  )
}

export default UserAboutPage