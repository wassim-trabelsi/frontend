import React from "react";
import { css } from '@emotion/css'


const headerTile = (title) => {
return (
<div className={css `display: flex;
                     justify-content: center;
                     background-color: #fff;
                     padding: 5px;
                     font-size: 1.2rem;
                     font-weight: bold;
                     text-align: center;
                     border-bottom: 1px solid #ddd;` }>
{title}
</div>
);
};

export default headerTile;