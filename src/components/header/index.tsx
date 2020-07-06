import React from "react";
import {useHistory} from "react-router-dom";
import {MdDashboard, MdTimeline, MdMenu,MdMovieFilter, MdSwapHoriz} from "react-icons/md";

import "./styles.css";

const Header = () => {

    const history = useHistory();
    let i = 0;


    function handleOpenNav() {
        const sidenav = document.getElementById("mySidenav");
        // @ts-ignore
        sidenav.style.width = "240px";
    }

    function handleCloseNav() {
        const sidenav = document.getElementById("mySidenav");
        // @ts-ignore
        sidenav.style.width = "0";
    }

    function handleRoadToHome() {
        if (i === 0) {
            i=1;
            const elem = document.getElementById("bar");
            let width = 0;
            const id = setInterval(() => {
                if (width >= 100) {
                    clearInterval(id);
                    i = 0;
                    // @ts-ignore
                    elem.style.width = 0 + "%";
                } else {
                    width++;
                    // @ts-ignore
                    elem.style.width = width + "%";
                }
            }, 10);
        }
        history.push("/");
    }

    return (
        <>
            <header>
                <div id="mySidenav" className="sidenav">
                    <a href="javascript:void(0)" className="close-btn" onClick={handleCloseNav}>&times;</a>
                    <a href="#">Abrir Solicitações <MdSwapHoriz className="icon-link"/>
                        <hr/></a>
                    <a href="#">Solicitações Feitas<MdSwapHoriz className="icon-link"/>
                        <hr/></a>
                    <a href="#">Meus Resultados <MdTimeline className="icon-link"/>
                        <hr/></a>
                    <a href="#">Resultados da Coop<MdDashboard className="icon-link"/> <hr/></a>
                    <a href="#">Artes <MdMovieFilter className="icon-link"/>
                        <hr/></a>
                </div>
                <div className="tool-bar">
                    <MdMenu className="menu-btn" onClick={handleOpenNav}></MdMenu>
                    <div className="logo-button" onClick={handleRoadToHome}>
                        <span id="title" title="Sicoob Produtos">Sicoob Produtos</span>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
