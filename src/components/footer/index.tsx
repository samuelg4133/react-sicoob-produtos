import React from "react";
import {FaFacebook, FaInstagram, FaYoutube} from "react-icons/fa";

import "./styles.css";

const Footer = ()=>{

    const facebook = "https://www.facebook.com/sicoobsertaominas4133";
    const instagram = "https://www.instagram.com/sicoobsertaominas/";
    const youtube = "https://www.youtube.com/channel/UCsvIx5AwyJ48LrnGYYH6x_Q";
    const sicoob_sertao_minas = "www.sicoobsertaominas.com.br";

    return(
        <>
            <footer className="page-footer">

                    <div className="social-media">
                    <h6>Mantenha-se conectado conosco nas nossas redes sociais!</h6>
                        <div className="links-grid">
                            <a href={facebook} title={facebook}>
                            <FaFacebook/>
                            </a>
                            <a href={instagram} title={instagram}>
                            <FaInstagram/>
                            </a>
                        <a href={youtube} title={youtube}>
                            <FaYoutube/>
                        </a>
                        </div>
                    </div>
                            <div className="pa-grid">
                                <div className="details-footer">
                                    <h2>
                                        Agências
                                        <hr/>
                                    </h2>

                                    <ul className="details-pa">
                                        <li>
                                            <h5>Buritizeiro</h5>
                                            <h6>Av. Manoel Joaquim de Melo, 520 - Centro</h6>
                                            <h6>Fone: (38) 3742-1661 e 3742-1018</h6>
                                        </li>
                                        <li>
                                            <h5>Pirapora</h5>
                                            <h6>Rua Antônio Nascimento, 179 - Centro</h6>
                                            <h6>Fone: (38) 3742-6250</h6>
                                        </li>
                                        <li>
                                            <h5>Engenheiro Navarro</h5>
                                            <h6>Praça João Paulo II, 30 - Centro</h6>
                                            <h6>Fone: (38) 3253-1059 e 3253-1670</h6>
                                        </li>
                                        <li>
                                            <h5>Várzea da Palma</h5>
                                            <h6>Rua Salvador Roberto, 1079 - Centro</h6>
                                            <h6>Fone: (38) 3731-9750 e 3731-2501</h6>
                                        </li>
                                        <li>
                                            <h5>Francico Dumont</h5>
                                            <h6>Praça Dona Carlota, 140 - Centro</h6>
                                            <h6>Fone: (38) 3733-1321 e 3733-1322</h6>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                <div className="footer-copyright">
                    <p>
                        &#9400; 2020 Copyright:
                    </p>
                    <a href= {"http://"+sicoob_sertao_minas} title={sicoob_sertao_minas} id="copyright-link">
                        {sicoob_sertao_minas}
                    </a>
                </div>
            </footer>
            </>
    );
}

export default Footer;
