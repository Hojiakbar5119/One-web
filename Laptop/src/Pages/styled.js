import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  img {
    width: 100%;
    height: auto;
  }
  &::before {
    background-color: #1a236e80;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #1a236e95;
  }
  /* border: 1px solid blue; */
`;
export const Title = styled.div`
  z-index: 1000;
  position: absolute;
  display: block;
  text-align: center;
  h1 {
    color: white;
    text-align: center;

    /* Style 1 / Display Bold */
    font-family: inherit;
    font-size: 64px;
    font-style: normal;
    font-weight: 600;
    line-height: 68px; /* 106.25% */
    word-wrap: normal;
  }
  p {
    margin-top: 20px;
    margin-bottom: 40px;
    color: var(--Text-Dark-Body, rgba(255, 255, 255, 0.8));
    /* text-align: center; */

    /* Style 1 / Title 3 Medium */
    font-family: inherit;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 31.2px */
  }
  h5 {
    margin-top: 24px;
    color: var(--Text-Dark-Label, rgba(255, 255, 255, 0.7));
    text-align: center;

    /* Style 1 / Body 2 Medium */
    font-family: inherit;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 133.333% */
  }
`;
