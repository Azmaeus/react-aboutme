import './Header.css';
import profile_photo from '../profile-photo.webp';

function Header () {
  return (
    <header className="App-header">
      <img src={profile_photo} className="App-profile-photo" alt="profile" />
        <h1>Eric F. Olsen</h1>
        <p className="App-header-occupation">Software Engineer</p>
      </header>
  );
}

export default Header;
