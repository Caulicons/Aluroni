import classNames from 'classnames';
import Footer from 'components/Footer';
import Menu from 'components/Menu';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const PaginaPadrao = lazy(() => import('components/PaginaPadrao'));
const Cardapio = lazy(() => import('pages/Cardapio'));
const Inicio = lazy(() => import('pages/Inicio'));
const NotFound = lazy(() => import('pages/NotFound'));
const Prato = lazy(() => import('pages/Prato'));
const Sobre = lazy(() => import('pages/Sobre'));

export default function AppRouter() {

  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <main className={classNames({
      'container': true,
      'containerDark': darkMode
    })}>
      <Router>
        <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
        <Suspense fallback={<h1>Carregando...</h1>}>
          <Routes>
            <Route path='/' element={<PaginaPadrao />} >
              <Route index element={<Inicio />} />
              <Route path='cardapio' element={<Cardapio />} />
              <Route path='sobre' element={<Sobre />} />
            </Route>
            <Route path='prato/:id' element={<Prato />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </main >
  );
}