import { useParams } from "react-router-dom"

const UserByIdPage = () => {
  const params = useParams()
  console.log("params", params)

  return (
    <div>
      <h1>User ID: {params.userId}</h1>
    </div>
  )
}

export default UserByIdPage