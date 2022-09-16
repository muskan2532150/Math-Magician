import { Link } from 'react-router-dom'
import animeH from './Anime';
import { useEffect } from 'react';

function Header() {

  useEffect(() => {
    const textWrapper = document.querySelector('.ml2');
    animeH(textWrapper);
  }, [])

  return (
    <>
      <nav>
        <div className="heading">
          <h1 className="ml2">MATH MAGICIANS</h1>
        </div>
        <ul>
          <li> <Link to='/'> Home</Link></li>
          <li><Link to='/calculator'>Calculator</Link></li>
          <li><Link to='/quotes'>Quotes</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
