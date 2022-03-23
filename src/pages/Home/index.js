import './styles.css';
import AsideNav from '../../Components/AsideNav';
import Header from '../../Components/Header';

export default function Home(){
  return(
    <div className="content">
      <AsideNav/>
      <section>
        <Header/>
        <main>
          <h1>Conteúdo aqui</h1>
        </main>
      </section>
    </div>
  );
}