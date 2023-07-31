import { useState, useEffect } from "react";
import Loading from "./Loading";
import Range from "./Range";
import Item from "./Item";
import Chart from "./Chart";

import {
  Container,
  Box,
  Image,
  Text,
  HStack,
  VStack,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { service } from "../assets/url";
import { useParams } from "react-router-dom";
import { BsGraphUpArrow, BsGraphDownArrow } from "react-icons/bs";

const CoinDetail = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const [days, setDays] = useState("24h");
  const [chartArray, setChartArray] = useState([]);

  const param = useParams();
  const detail = param.coinsId;

  let currencySymbol = "₹";
  if (currency === "inr") {
    currencySymbol = "₹";
  } else if (currency === "eur") {
    currencySymbol = "€";
  } else {
    currencySymbol = "$";
  }

  const btn = ["24h", "7d", "30d", "365d", "max"];

  const btnHandler = (event) => {
    setLoading(true);
    setDays(event.target.value);
  };

  useEffect(() => {
    const fetchExchange = async () => {
      try {
        const { data } = await axios.get(`${service}/coins/${detail}`);
        const { data: oncemore } = await axios.get(
          `${service}/coins/${detail}/market_chart?vs_currency=${currency}&days=${days}`
        );
        setCoins(data);

        setLoading(false);
        setError(false);
        setChartArray(oncemore.prices);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchExchange();
  }, [detail, days, currency]);

  const radioHandler = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <>
      {error && <Box>An Error occured while fetching the info</Box>}
      {loading ? (
        <Loading />
      ) : (
        <Container maxW={"container.xl"}>
          <Box width={"full"}>
            <Chart currency={currencySymbol} arr={chartArray} days={days} />
          </Box>
          <HStack justifyContent={"center"} my={"2"}>
            {btn.map((i) => {
              return (
                <Button key={i} onClick={btnHandler} value={i} mx={"1"}>
                  {i}
                </Button>
              );
            })}
          </HStack>
          <HStack justifyContent={"center"} my={"3"}>
            <input
              id="inr"
              type="radio"
              name="anyOne"
              value="inr"
              checked={currency === "inr"}
              onChange={radioHandler}
            />
            <label htmlFor="inr" style={{ fontWeight: "bold" }}>
              INR
            </label>
            <input
              id="usd"
              type="radio"
              name="anyOne"
              value="usd"
              checked={currency === "usd"}
              onChange={radioHandler}
            />
            <label htmlFor="usd" style={{ fontWeight: "bold" }}>
              USD
            </label>
            <input
              id="eur"
              type="radio"
              name="anyOne"
              value="eur"
              checked={currency === "eur"}
              onChange={radioHandler}
            />
            <label htmlFor="eur" style={{ fontWeight: "bold" }}>
              EUR
            </label>
          </HStack>
        </Container>
      )}
      {!loading && (
        <VStack spacing={"6"} px={"16"} alignItems={"center"} width={"full"}>
          <Text fontSize={"2xl"}>
            Last Updated on :{" "}
            {Date(coins.market_data.last_updated).slice(0, 24)}
          </Text>
          <Image
            src={coins.image.large}
            objectFit={"contain"}
            width={"50%"}
            h={"40vh"}
          ></Image>
          <Box
            width={"full"}
            alignItems={"center"}
            display={"flex"}
            flexDirection={"column"}
          >
            <Text fontSize={"5xl"} fontWeight={"bold"}>
              {coins.name}
            </Text>
            <Text fontSize={"2xl"} fontWeight={"medium"}>
              {currencySymbol}
              {coins.market_data.current_price[currency]}
            </Text>
            <Box display={"flex"}>
              {coins.market_data.price_change_percentage_24h > 0 ? (
                <BsGraphUpArrow size={"20"} />
              ) : (
                <BsGraphDownArrow />
              )}
              <Text fontStyle={"italic"}>
                {coins.market_data.price_change_percentage_24h}
              </Text>
            </Box>
          </Box>
          <Text fontSize={"4xl"} fontWeight={"bold"}>
            #{coins.market_cap_rank}
            <Text as="span" fontSize={"2xl"}>
              Ranking
            </Text>
          </Text>

          <Range
            high={`${currencySymbol}${coins.market_data.high_24h[currency]}`}
            low={`${currencySymbol}${coins.market_data.low_24h[currency]}`}
          />
          <Box
            w={"full"}
            p="4"
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            {/* <Item title={"Max Supply"} value={coins.market_data.max_supply} /> */}

            <Item
              title={"Circulating Supply"}
              value={coins.market_data.circulating_supply}
            />
            <Item
              title={"Market Cap"}
              value={`${currencySymbol}${coins.market_data.market_cap[currency]}`}
            />
            <Item
              title={"All Time Low"}
              value={`${currencySymbol}${coins.market_data.atl[currency]}`}
            />
            <Item
              title={"All Time High"}
              value={`${currencySymbol}${coins.market_data.ath[currency]}`}
            />
          </Box>
        </VStack>
      )}
    </>
  );
};
export default CoinDetail;
