import React from "react";
import { css } from "@emotion/css";
import tmdb_logo from "../assets/tmdb_logo.svg";
import ask_logo from "../assets/ask_logo.jpg";


const TopMenu = () => {
    return (
        <div>
            <header className={css`
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            position: relative;
            height: 150px;
            line-height: 150px;
            background-color: #555555;
            color: white;
            font-weight: bold;
            font-size: 1.5rem;`}>

                <img src={tmdb_logo} alt="TMDB Logo" className={css`height: 80%;
                max-width: 150px;
                margin_right: 20px;
                    vertical-align: middle;
                `} />

                AskMovies

                <img src={ask_logo} alt="ASK Logo" className={css`height: 80%;
                max-width: 150px;
                margin_right: 20px;
                    vertical-align: middle;
                `} />

            </header>
        </div>
    );
};

export default TopMenu;