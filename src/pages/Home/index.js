import './styles.css';
import AsideNav from '../../Components/AsideNav';
import Header from '../../Components/Header';
import Card from '../../Components/common/Card';

export default function Home(){
  return(
    <div className="content">
      <AsideNav/>
      <section>
        <Header/>
        <main>
          <section>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </section>
        </main>
      </section>
    </div>
  );
}