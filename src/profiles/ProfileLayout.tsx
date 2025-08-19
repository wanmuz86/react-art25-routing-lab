import { NavLink, Outlet, useParams } from 'react-router-dom'

const ProfileLayout = () => {
    const {userId} = useParams();
  return (
    <div>
        <h1>User Profile</h1>
        <p>Viewing profile for user with ID: {userId}</p>

        <ul>
            {/* Relative Link without / profiles/1/details and profiles/1/settings */}
            <li><NavLink to="settings">Settings</NavLink></li>
            <li><NavLink to="details">Details</NavLink></li>
        </ul>
        {/* the respective settings and details page will be shown here */}
        <Outlet/>
    </div>
  )
}

export default ProfileLayout