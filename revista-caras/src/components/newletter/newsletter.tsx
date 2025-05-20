import { NewsLetterSection } from './newsletterStyles';

import { ChangeEvent, useState, FormEvent } from 'react';

function Newsletter() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [validationMessage, setValidationMessage] = useState('');
    const [isValid, setIsValid] = useState(false);

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
      };

      const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
        if (event.target.value.includes('@') && event.target.value.includes('.')) {
          setValidationMessage('Correo válido');
          setIsValid(true);
        } else {
          setValidationMessage('Introduce un correo válido');
          setIsValid(false);
        }
      };

      const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (email.includes('@') && email.includes('.') && name.trim() !== '') {
          setValidationMessage('¡Gracias por suscribirte!');
          setIsValid(true);
        } else {
          setValidationMessage('Introduce un correo válido y un nombre');
          setIsValid(false);
        }
      };

  return (
    <NewsLetterSection>

        <section className="newsletter-text">

            <h1>Subscribete a nuestro newsletter</h1>

            <p>Mantente al tanto de las ultimas tendencias de moda y las mejores noticias del mundo del entretenimiento ¡Suscríbete ahora para recibir las últimas noticias, tendencias y consejos directamente en tu bandeja de entrada!</p>

        </section>

        <section className="newsletter-main-container">

            <div className="newsletter-img-container">

                <img src="/media/caras-cover-newsletter.png"  alt="Portada de la revista Caras" id="newsletter-img"/>

            </div>


            <div className="newsletter-form">

                <h1>Newsletter</h1>

                <form onSubmit={handleSubmit}>

                    <fieldset>

                        <label htmlFor="name-subs">Nombre:</label>
                        <input 
                        type="text" 
                        name="name-subs" 
                        id="nameSubs" 
                        value={name} 
                        onChange={handleNameChange}/>
                        

                        <label htmlFor="email-subs">Correo:</label>
                        <input 
                        type="email" 
                        name="email-subs" 
                        id="emailSubs" 
                        value={email} 
                        onChange={handleEmailChange}/>

                        <span 
                        className={isValid ? 'newsletter__valid' : 'newsletter__not-valid'} 
                        id="newsletter__validation">

                            {validationMessage}

                        </span>

                        <input type="submit" value="Enviar" id="submitButton"></input>

                    </fieldset>
                
                </form>

            </div>

        </section>

    </NewsLetterSection>
  );
}


export { Newsletter };