import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './Menu.module.scss';
import { Link } from 'react-router-dom';
import IDarkMode from 'types/IDarkMode';
import DarkMode from './DarkMode/DarkMode';

export default function Menu({ darkMode, setDarkMode }: IDarkMode) {

  const rotas = [{
    label: 'Início',
    to: '/'
  }, {
    label: 'Cardápio',
    to: '/cardapio'
  }, {
    label: 'Sobre',
    to: '/sobre'
  }];
  return (
    <nav className={styles.menu}>
      <div >
        <Logo />
        <ul className={styles.menu__list}>
          {rotas.map((rota, index) => (
            <li key={index} className={styles.menu__link}>
              <Link to={rota.to}>
                {rota.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <DarkMode darkMode={darkMode} setDarkMode={setDarkMode}/>
    </nav>
  );
}