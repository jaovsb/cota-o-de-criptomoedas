import styled from "styled-components";

export const Header = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 40px;

    h1 { 
        color: #1c1c1c;
    }

    input {
        padding-left: 16px;
        font-size: 14px;
        width: 260px;
        height: 42px;
        border-radius: 4px;
        border: none;
        box-shadow: 0 0 3pt 2pt #ccc;
        color: #1c1c1c;
    }

    @media (max-width: 520px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h1 {
            padding: 16px;
        }
    } 
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 30px;
    color: #fff;
`;