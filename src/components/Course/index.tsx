import React, { useEffect } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { logEvent, getAnalytics } from "firebase/analytics";
import firebaseApp from "../../utils/firebase"; // Importe seu módulo Firebase configurado

export function Course() {
  const [analytics, setAnalytics] = React.useState(null);

  useEffect(() => {
    // Inicialize o Analytics
    const Analytics = getAnalytics(firebaseApp);

    // Armazene o Analytics no estado
    setAnalytics(Analytics);
  }, []);

  const handleSaibaMaisClick = () => {
    if (analytics) {
      logEvent(analytics, "click_saiba_mais_curso"); // Rastreie o evento de clique
      window.location.href =
        "https://www.udemy.com/course/curso-logica-de-programacao-com-kotlin/?referralCode=1CD250278E5F921C7F9E";
    }
  };

  return (
    <Flex
      id="course"
      w={{ base: "100%", xl: "100%" }}
      h="594px"
      backgroundImage="url('/img/curso_bg.svg')"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        w={{ base: "100%", xl: "1120px" }}
        margin="0 auto"
        flexDir="column"
        align={{ base: "center", xl: "normal" }}
      >
        <Text
          w={{ base: "90%", xl: "602px" }}
          fontSize={{ base: "1.25rem", xl: "2.5rem" }}
          textAlign={{ base: "center", xl: "start" }}
          fontWeight="bold"
          color="white"
          mb="1rem"
        >
          Primeiros passos no mundo da programação com Kotlin
        </Text>
        <Text
          w={{ base: "100%", xl: "518px" }}
          fontSize={{ base: "1rem", xl: "1.175rem" }}
          textAlign={{ base: "center", xl: "start" }}
          color="#696868"
          mb="48px"
        >
          Este curso de lógica de programação com Kotlin é ideal para iniciantes
          sem conhecimentos prévios na área. Com uma abordagem voltada para quem
          está começando do absoluto zero, você irá adquirir uma base sólida em
          lógica de programação.
        </Text>
        <button
          style={{
            width: "230px",
            height: "54px",
            backgroundColor: "#28188f",
            border: "none",
            color: "white",
            fontWeight: "bold",
          }}
          onClick={handleSaibaMaisClick}
        >
          SAIBA MAIS
        </button>
      </Flex>
    </Flex>
  );
}
