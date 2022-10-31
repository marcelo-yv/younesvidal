import React from 'react';

const About = () => {
    return (
        <>
            <article className=" aboutMargin container-fluid">
                <p className="container-fluid"><b>Don JORGE - Tienda de Vinos,</b> es el resultado de la apuesta por
                    el mundo y la cultura
                    del vino que venimos
                    realizando desde hace años, cuando comenzamos con un pequeño emprendimiento y siguiendo la tradición
                    familiar, decidimos unir definitivamente nuestras vidas a este mundo, tratando de empaparnos lo máximo
                    posible en él, e intentar transmitir así en nuestra actividad diaria, lo que verdaderamente significa para
                    nosotros.</p>
                <p className="container-fluid">No pretendemos otra cosa que tratar de aportar nuestro granito de arena en la difusión del conocimiento sobre el
                    maravilloso mundo del vino, que es nuestra razón de ser, y dar a conocer nuestra actividad.</p>
                <div className="text-center">
                    <img className="imagenAbout" src='https://firebasestorage.googleapis.com/v0/b/younesvidal-5143f.appspot.com/o/logo.jpeg?alt=media&token=2c3f9925-f746-4cbc-b342-029c244a1e21' />
                </div>
            </article>

        </>
    );
}

export default About;
