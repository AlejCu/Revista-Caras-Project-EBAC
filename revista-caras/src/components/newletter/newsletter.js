function Newsletter() {
  return (
    <article id="newsletter-section">

        <section class="newsletter-text">

            <h1>Subscribete a nuestro newsletter</h1>

            <p>Mantente al tanto de las ultimas tendencias de moda y las mejores noticias del mundo del entretenimiento ¡Suscríbete ahora para recibir las últimas noticias, tendencias y consejos directamente en tu bandeja de entrada!</p>

        </section>

        <section class="newsletter-main-container">

            <div class="newsletter-img-container">

                <img src="media/caras-cover-newsletter.png" alt="Portada de la revista Caras" id="newsletter-img"/>

            </div>


            <div class="newsletter-form">

                <h1>Newsletter</h1>

                <form action="/EBAC-Proyecto-CARAS/index.html">

                    <fieldset>

                        <label for="name-subs">Nombre:</label>
                        <input type="text" name="name-subs" id="nameSubs"></input>

                        <label for="email-subs">Correo:</label>
                        <input type="email" name="email-subs" id="emailSubs"></input>

                        <span class="newsletter__valid" id="newsletter__validation"></span>

                        <input type="submit" value="Enviar" id="submitButton"></input>

                    </fieldset>
                
                </form>

            </div>

        </section>

    </article>
  );
}


export { Newsletter };