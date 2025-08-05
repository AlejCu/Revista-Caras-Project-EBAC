import { TestimonialsSection } from './testimonialsStyles';

//FontAwesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


import useAutoScroll from '../../hooks/useAutoScroll';


// Variable with the testimonials data
const testimonialsData = [
    {
      name: "María López",
      content: "¡Me encanta recibir el newsletter cada semana! Siempre me mantiene al tanto de las últimas noticias y tendencias. Es una excelente manera de estar actualizada sin tener que buscar información por mi cuenta. ¡Totalmente recomendado!",
    },
    {
      name: "Juan Pérez",
      content: "Desde que me suscribí al newsletter, he descubierto tantos recursos útiles que nunca hubiera encontrado por mi cuenta. Me encanta la variedad de temas que cubre y la calidad de los contenidos. Definitivamente ha agregado mucho valor a mi día a día.",
    },
    {
      name: "Sofía Gutiérrez",
      content: "¡Me encanta el newsletter! Es como tener acceso exclusivo a los secretos mejor guardados del mundo del espectáculo y las pasarelas. Siempre estoy al tanto de las últimas tendencias de moda, los chismes más jugosos de las celebridades y los consejos de estilo más útiles. ¡No puedo esperar para recibirlo cada semana!",
    },
    {
      name: "Diego Ramírez",
      content: "Como amante de la moda, el newsletter es mi salvación. Me mantiene informado sobre los eventos más importantes, las colaboraciones de diseñadores y las colecciones más destacadas de la temporada. Además, me encanta leer los detalles detrás de las alfombras rojas y los looks más icónicos de las celebridades. ¡Es mi dosis de glamour semanal!",
    },
    {
      name: "Mateo Fernández",
      content: "El newsletter es mi guía definitiva para estar a la moda. Me encanta recibir las últimas noticias sobre mis estrellas favoritas, así como los consejos de expertos en moda para mejorar mi estilo personal. Además, las recomendaciones de productos siempre son acertadas y me han ayudado a descubrir nuevas marcas y tendencias. ¡No puedo vivir sin él!",
    },
    {
      name: "Lucía Martínez",
      content: "Como fashionista y fanática del entretenimiento, el newsletter es mi lectura obligada cada semana. Me mantiene al día con todo lo que está sucediendo en el mundo de la moda, desde las últimas colecciones hasta los eventos más exclusivos. Además, los análisis de tendencias y los consejos de estilo me han ayudado a elevar mi look a otro nivel. ¡Es como tener un asistente personal de moda y farándula!",
    },
  ];



  function Testimonials() {

    const testimonialsRef = useAutoScroll(1, 20);

    const duplicatedTestimonials = [...testimonialsData, ...testimonialsData];
    
    return (

      <TestimonialsSection>

        <h1 id="testimonials-title">Testimonios</h1>

        <div className="testimonials" ref={testimonialsRef}>

          {duplicatedTestimonials.map((testimonial, index) => (

            <div key={index} className='testimonial-card'>

              <FontAwesomeIcon icon={faUser} className="user-review-icon" />

              <h2>{testimonial.name}</h2>

              <p>{testimonial.content}</p>

            </div>

          ))}

        </div>

      </TestimonialsSection>
    );

  }


export { Testimonials };