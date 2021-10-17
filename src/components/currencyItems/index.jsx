import React from "react";
import { CryptoItem, PriceContainer } from "./style";

const Currency = ({name, price, symbol, marketcap, volume, image, priceChange}) => {
    return (
        <>
            <CryptoItem>
                <img src={image} alt={`${name}`} />
                <div className="currencyName">
                    <h2>{name}</h2>
                    <p className="currencySymbol">{symbol}</p>
                </div>
                <p className="currencyPrice">R${price?.toLocaleString()}</p>
                <p className="currencyMarketCap">{marketcap?.toLocaleString()}</p>
                <p className="currencyVolume">
                    R${volume?.toLocaleString()}
                </p>
                {priceChange < 0 ? (
                    <PriceContainer backgroundColor='#f00606'>
                        <i className="fas fa angle down fa 2x"></i>
                        <p className="priceChange">{priceChange.toFixed(2)}%</p>
                    </PriceContainer>
                ): (
                    <PriceContainer backgroundColor='#11d811'>
                        <i className="i.fas fa-angle-up fa-2x"></i>
                        <p className="priceChange">{priceChange.toFixed(2)}%</p>
                    </PriceContainer>
                )}
                
            </CryptoItem>
        </>
    )
}

export default Currency