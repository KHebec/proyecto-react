import "./about.css"



const Aboutus = () => {
  return (
    <section className='about-container'> 
      <img className='about-img' src='https://www.drinksco.es/blog/assets/uploads/sites/2/2020/03/bes-liquor-brand-world-1024x683.jpg' alt='imagen'/>

<div className="about-texto">

      <h2>Sobre nosotros</h2>
      <p>Spirits es una empresa que comercializa bebidas blancas desde 2022</p>

      <p>Nuestra misión es brindar una experiencia única que permita a nuestro cliente disfrutar de las bebidas con todos sus sentidos.</p>

      <p>Para ello nos ocupamos de:</p>
      
      <ul>
        <li>Ofrecer las mejores marcas y productos del mercado</li>
        <li>Brindar asesoramiento para obtener lo que se desea</li>
        <li>Tener una experiencia de compra sencilla y segura</li>
        <li>Disposición permanente a las sugerencias de nuestros clientes</li>
      </ul>

    </div>
   </section>
  )
  
}

export default Aboutus