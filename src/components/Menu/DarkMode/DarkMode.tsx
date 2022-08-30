import { FiSun, FiMoon } from 'react-icons/fi';
import IDarkMode from 'types/IDarkMode';
import styles from './DarkMode.module.scss';

export default function DarkMode({ darkMode, setDarkMode }: IDarkMode) {
  const alternandoDarkMode = () => setDarkMode(!darkMode);

  return (
    darkMode ? <FiMoon size={30} onClick={() => alternandoDarkMode()} /> :
      <FiSun size={30} onClick={() => alternandoDarkMode()} />
  );
}