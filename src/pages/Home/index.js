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
            <Card title={"Total Caixa"} value={"R$ 7.656,72"}/>
            <Card title={"Funcionários"} value={"834"}/>
            <Card title={"Clientes Ativos"} value={"5530"}/>
            <Card title={"Total gasto"} value={"R$ 4.356,28"}/>
            <Card title={"Taxa de ocupação"} value={"57,36%"}/>
          </section>
          <section>
            <h1>Restante do conteúdo</h1>
          </section>
        </main>
      </section>
    </div>
  );
}