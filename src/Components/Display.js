function Display({ userData }) {
  return (
    <div>
      <h1>{userData.name}</h1>
      <img src={userData.avatar_url} alt="profile" />
      <a href={userData.html_url} target="_blank">
        <h3>Profile page</h3>
      </a>
      {userData.location && <h3>Location: {userData.location}</h3>}
      {userData.email && <h3>Email: {userData.email}</h3>}
    </div>
  );
}

export default Display;

// We are using Conditional Rendering so that it displays only data we have. Example: If we dont have data for Email than it wont show up. We dont want empty data displaying.
// DESTRUCTURING userData
