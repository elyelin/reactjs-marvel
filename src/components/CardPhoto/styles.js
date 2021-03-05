import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid red;
  border-radius: 10px;
  overflow: hidden;
  display: block;
  padding: 56.25% 0 0 0;
  position: relative;
  margin: 10px;
  margin-right: 5px;
  width: 100%;
  height: 0;
`;

export const Img = styled.img`
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`;
