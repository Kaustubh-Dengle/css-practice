import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas with paint" />
      <h1>ReactArt</h1>
      <p>A community of artists and art-lovers.</p>
    </header>
  );
}
