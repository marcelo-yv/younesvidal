import React from 'react';

const Footer = () => {
    return (
        <>
            <div className=" text-center footer-estilo">
                <div className="row">
                    <div className="col-sm-3 footer-menu-aling">
                        <a className='footer-menu' href="">Home</a>
                        <a className='footer-menu' href="">Contacto</a>
                        <a className='footer-menu' href="">About</a>
                    </div>
                    <div className="col-sm-9">
                        <div className="row">
                            <div className="col-8 col-sm-6">
                                <p>Horarios de Atención</p>
                                <p><span>Lunes a Viernes:</span> 9:30 a 13:30 y 17:00hs a 22:00</p>
                                <p><span>Sabados:</span> 9:00 a 14:00</p>
                                <p>Copyright ©2020. Todos los Derechos Reservados. </p>
                            </div>
                            <div className="col-4 col-sm-6">
                                <h5>Nuestras Redes Sociales</h5>
                                <a target="_blank" href="https://www.facebook.com/pages/category/Wine-Spirits/Don-Jorge-tienda-de-vinos-100506938483657/"><img src='https://firebasestorage.googleapis.com/v0/b/younesvidal-5143f.appspot.com/o/facebook_logo.png?alt=media&token=94058c65-4044-4736-9fe8-99011a276886' alt="" /></a>
                                <a target="_blank" href="https://www.instagram.com/djorge.vinos/?utm_medium=copy_link"><img src='https://firebasestorage.googleapis.com/v0/b/younesvidal-5143f.appspot.com/o/instagram_logo.png?alt=media&token=b00b2a41-f335-485b-beaa-cdd13d9991f0' alt="" /></a>
                                <a target="_blank" href="https://api.whatsapp.com/send?phone=3813010464"><img src='https://firebasestorage.googleapis.com/v0/b/younesvidal-5143f.appspot.com/o/whatsapp_logo.png?alt=media&token=76933e3a-8e4b-4153-b20e-fe1afe8b1a29' alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}

export default Footer;
