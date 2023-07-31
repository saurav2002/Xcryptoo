import axios from "axios";
import { useEffect, useState } from "react";
import { service } from "../assets/url";
import { Button, Text, Container, HStack, Box } from "@chakra-ui/react";
import Loading from "./Loading";

import CoinsCard from "./CoinsCard";

const Exchange = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const [page, setPage] = useState(1);

  let currencySymbol = "₹";
  if (currency === "inr") {
    currencySymbol = "₹";
  } else if (currency === "eur") {
    currencySymbol = "€";
  } else {
    currencySymbol = "$";
  }

  const radioHandler = (event) => {
    setCurrency(event.target.value);
  };

  useEffect(() => {
    const fetchExchange = async () => {
      try {
        const { data } = await axios.get(
          `${service}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        setCoins(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchExchange();
  }, [currency, page]);

  return (
    <>
      <Container maxW={"container.xl"}>
        {error && <Box>An Error occured while fetching the info</Box>}
        {loading ? (
          <Loading />
        ) : (
          <>
            <HStack paddingLeft={"4"} paddingTop={"2"}>
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

            <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
              {coins.map((data) => {
                return (
                  <CoinsCard
                    id={data.id}
                    price={data.current_price}
                    key={data.id}
                    name={data.name}
                    img={data.image}
                    symbol={data.symbol}
                    currencySymbol={currencySymbol}
                  />
                );
              })}
            </HStack>
          </>
        )}
        {!loading && (
          <HStack display={"flex"} justifyContent={"center"} m={"3px"}>
            <Box display={"flex"}>
              <Text mt={"1"}>Move To Next Page </Text>
              <Button
                bgColor={"blackAlpha.800"}
                color={"white"}
                mx={"1"}
                width={"1.5"}
                height={"9"}
                borderRadius={"50%"}
                onClick={() => {
                  setLoading(true);
                  setPage((prev) => {
                    return prev + 1;
                  });
                }}
              >
                {page + 1}
              </Button>
              <Button
                bgColor={"blackAlpha.800"}
                color={"white"}
                mx={"1"}
                width={"1.5"}
                height={"9"}
                borderRadius={"50%"}
                onClick={() => {
                  setLoading(true);
                  setPage((prev) => {
                    return prev + 2;
                  });
                }}
              >
                {page + 2}
              </Button>
              <Button
                bgColor={"blackAlpha.800"}
                color={"white"}
                mx={"1"}
                width={"1.5"}
                height={"9"}
                borderRadius={"50%"}
                onClick={() => {
                  setLoading(true);
                  setPage((prev) => {
                    return prev + 3;
                  });
                }}
              >
                {page + 3}
              </Button>
            </Box>
            {page > 1 && (
              <Box display={"flex"}>
                <Text mt={"3px"}>Move To Previous Page </Text>
                <Button
                  bgColor={"blackAlpha.800"}
                  color={"white"}
                  mx={"1"}
                  width={"1.5"}
                  height={"9"}
                  borderRadius={"50%"}
                  onClick={() => {
                    setLoading(true);
                    setPage((prev) => {
                      return prev - 1;
                    });
                  }}
                >
                  {page - 1}
                </Button>
              </Box>
            )}
          </HStack>
        )}
      </Container>
    </>
  );
};
export default Exchange;
