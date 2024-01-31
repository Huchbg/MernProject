import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        scroll-behavior: smooth;
        font-family: 'Inter', sans-serif;
        background-color: #191919;
    }


    a {
        display: inline-block;
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
    } 

    h1, h2, h3, h4, h5, span, p {
        margin: 0;
        padding: 0;
    }

    .swiper-pagination {
        bottom: -20px;
        padding-right: 30px;
    }
    .swiper-pagination-bullet{
        background-color: #3f3f3f;
    }

    .swiper-pagination-bullet-active {
    opacity: 1;
    background-color: #dea30a; /* Set the bullet color when active */
    }

   

    .swiper{
        padding-bottom: 50px;
        padding-left: 30px;
    }
    
`;
