import { useParams } from "react-router-dom"

const Details = () => {
    const {userId} = useParams();
  return (
    <div>
        <h2>User Details</h2>
        <p>Details for User {userId}</p>
    </div>
  )
}

export default Details