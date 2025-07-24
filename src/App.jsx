import Button from '@components/Button/Button';
import Footer from '@components/Footer/Footer';
import Header from '@components/Header/header';
import MainLayout from '@components/Layout/Layout';
import '@styles/main.scss';

function App() {
  return (
    <>
      <MainLayout>
        <Header />
        <Button />
        <Footer />
      </MainLayout>
    </>
  );
}

export default App;
