import styled from "styled-components";
import { Link } from "react-router-dom";
// background-color: #ffd600;
export const CardPresetation = styled.div`
  background-color: black;
  padding: 25px 25px;
  width: 100%;
  color: white;
  margin: 10px 0;
  div {
    span {
      font-family: "Sansita Swashed", cursive;
    }
  }
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  img {
    margin: 0 0 10px 0;
  }
  span {
    font-size: 14px;
  }
`;

export const H1 = styled.h1`
  margin: 50px 0 20px 0;
  font-family: "Sansita Swashed", cursive;
  font-weight: 900;
  color: white;
`;

export const ContainerCharacterData = styled.div`
  width: 100%;
  background-color: black;
  color: white;
  padding: 25px;
  span {
    font-size: 16px;
    line-height: 35px;
    font-family: "Sansita Swashed", cursive;
  }
`;

export const ButtonBack = styled(Link).attrs((props) => ({
  className: "btn btn-success",
}))`
  width: ${(props) => props.width || "fit-content"};
  height: 45px;
  line-height: 40px;
  padding: 0px 30px !important;
  border-radius: 25px !important;
  font-weight: bold !important;
  margin: 20px 0 0 0;
`;
