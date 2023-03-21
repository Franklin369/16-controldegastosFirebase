import styled from "styled-components";
import Lottie from "react-lottie";
export function LottieAnimacion({ animacionData }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animacionData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Container>
      <Lottie options={defaultOptions} height={`100%`} width={`100%`} isClickToPauseDisabled/>
    </Container>
  );
}
const Container = styled.div``;
