import profile_photo from '../profile-photo.jpg';

function Header () {
  return (
    <header className="App-header">
      <img src={profile_photo} className="App-profile-photo" alt="profile photo" />
        <h1>Eric F. Olsen</h1>
        <h3>Software Engineer</h3>
      </header>
  );
}

export default Header;
