import Nav from './Nav.js';
import BeaPic from '../images/Bea.png';
// importa cada hoja de estilos o solo la principal con los imports en App.js¿?
// import '../styles/components/Landing.scss'

const Landing = () => {
  return <>
    <main className='main__landing'>
      <section className='landing__presentation'>
        <h2 className='landing__presentation--title'>&lt;Hello World&gt;</h2>
        <h1 className='landing__presentation--subtitle'>Bea Figueroa</h1>
        <h4 className='landing__presentation--subsubtitle'>FullStack Developer</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </section>
      <section className='landing__picture'>
        <img src={BeaPic} alt="Bea" className='landing__picture--pic' />
      </section>
      {/* el nav puede ser un componente aparte para mostrarlo en todos los apartados de mi app */}
      <Nav />
    </main>
  </>
}
export default Landing;