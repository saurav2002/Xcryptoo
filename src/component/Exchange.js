import axios from "axios";
import { useEffect, useState } from "react";
import { service } from "../assets/url";
import { Container, HStack } from "@chakra-ui/react";
import Loading from "./Loading";
import ExchangeCards from "./ExchangeCards";

const Exchange = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchExchange = async () => {
      try {
        const { data } = await axios.get(`${service}/exchanges`);
        setExchanges(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchExchange();
  }, []);

  // console.log(exchanges);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container maxW={"container.xl"}>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {exchanges.map((data) => {
              return (
                <ExchangeCards
                  key={data.id}
                  name={data.name}
                  img={data.image}
                  rank={data.trust_score_rank}
                  url={data.url}
                />
              );
            })}
          </HStack>
        </Container>
      )}
    </>
  );
};
export default Exchange;
