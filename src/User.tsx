import { useParams } from 'react-router-dom'
const User = () => {

    // Retrieve the userId from useParams hook / from the URL 
    const {userId} = useParams();
  return (
    <div>
        <h2>User Page</h2>
        <p>Viewing details for user with Id: {userId}</p>
    </div>
  )
}

export default User