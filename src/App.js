import axios from 'axios'
import React, { useEffect, useState } from "react";
import Currency from './components/currencyItems';
import GlobalStyles from "./GlobalStyles";
import { Container, Header } from './styles'

function App() {

  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=100&page=1&sparkline=false")
      .then((res) => {
        setCoins(res.data)
        console.log(res.data)
      }).catch((error) => console.error(error))

  }, [])

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <>
      <Header>
        <h1>Cotação de criptomoedas</h1>
        <input type="text" placeholder="Pesquise por Criptomoeda" onChange={handleChange}/>
      </Header>
      <Container>
        {filteredCoins.map((coin) => {
          return (
            <Currency 
              key={coin.id}
              name={coin.name}
              price={coin.current_price}
              symbol={coin.symbol}
              marketcap={coin.marketcap}
              volume={coin.total_volume}
              image={coin.image}
              priceChange={coin.price_change_percentage_24h}
            />
          )
        })}
      </Container>      
      <GlobalStyles />
    </>
  );
}

export default App;
