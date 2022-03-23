import './styles.css';

export default function Card({title, value}){
  return(
    <div className='card'>
      <h6>{title}</h6>
      <h1>{value}</h1>
    </div>
  );
}