import styled from "styled-components";

export const CryptoItem = styled.div`
    background-color: #1c1c1c;
    overflow: hidden;
    text-align: center;
    border: 1rem;
    position: relative;
    width: 320px;
    margin: 2rem;
    box-shadow: 0 3px 3px rgb(0, 0, 0, 0.3);

    img {
        width: 8rem;
        margin-top: 1.2rem;
        height: 40px;
        width: 40px;
        clip-path: circle(60px at center);
    }

    .currencyName {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        font-weight: 700;
    }

    .currencyVolume {
        padding: 4px;
    }

    .currencyPrice {
        padding: 4px;
    }

    h2 {
        font-weight: bold;
        font-size: 1.2rem;
    }

    .currencySymbol {
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 500;
        padding-left: 8px;
    }
`;

export const PriceContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    border: none;
    font-size: 1rem;
    color: white;
    padding: 1rem;
    background-color: ${props => props.backgroundColor};
`;