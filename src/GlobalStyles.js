import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital@1&display=swap');

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        color: #fff;
    }

    body {
        background-image: linear-gradient(90deg, rgba(110,53,179,1) 0%, rgba(77,24,177,1) 41%, rgba(45,8,108,1) 100%);;
    }
`;