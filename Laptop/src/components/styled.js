import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 140px;
  h1 {
    font-size: 28px;
  }
`;

export const Lefta = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  div {
    /* display: block; */
    p {
      color: rgba(26, 35, 110, 0.7);
      text-align: right;
      /* Style 1 / Caption */
      font-family: inherit;
      font-size: 13px;
      font-style: normal;
      font-weight: 700;
      line-height: 18px; /* 138.462% */
    }
  }
`;

export const NavigationMenu = styled.ul`
  display: flex;
  gap: 24px;
  list-style: none;
  li {
    a {
      text-decoration: none;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
      color: rgba(26, 35, 110, 0.70);
    }
  }
`;

export const Input = styled.input`
  padding: 12px 24px;
  border-radius: 6px;
  margin: 0 8px;
  border: 1px solid var(--Elements-Light-Border, rgba(0, 0, 0, 0.1));
  background-color: ${(props) => props.color || "white"};
  color: var(--Text-blue);
  font-family: inherit;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;

  &::placeholder {
    color: var(--black-20, rgba(0, 0, 0, 0.2));

    /* Style 1 / Body 1 Regular */
    font-family: inherit;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 133.333% */
  }
`;

export const Button = styled.button`
  padding: 12px 24px;
  border-radius: 6px;
  margin: 0 8px;
  border: 1px solid var(--Elements-Light-Border, rgba(0, 0, 0, 0.1));
  background-color: ${(props) => props.color || "white"};
  color: ${(props) => (props.textcolor ? "white" : "var(--Text-blue)")};
  font-family: inherit;
  font-size: 18px;
  font-style: normal;
  font-weight: ${(props) => (props.boldtext ? "600" : "500")};
  line-height: 20px;

  &:active {
    scale: 0.98;
  }
`;

export const Frame = styled.div`
  width: 255px;
  height: 272px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  h1 {
    margin: 32px 0 16px 0;
    color: var(--Text-blue);
    text-align: center;

    /* Style 1 / Title 2 Medium */
    font-family: inherit;
    font-size: ${(props) => (props.textsize ? "24px" : "28px")};
    font-style: normal;
    font-weight: 500;
    line-height: 130%; /* 36.4px */
  }
  p {
    color: rgba(26, 35, 110, 0.4);
    text-align: center;

    /* Style 1 / Body 1 Regular */
    font-family: inherit;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 133.333% */
  }
`;

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  margin: 0 auto;
  color: var(--Text-blue);
  /* Style 1 / Title 2 Medium */
  font-family: inherit;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%; /* 36.4px */

  border-radius: 40px;
  background: var(--white-100, #fff);

  /* Shadow 2 */
  box-shadow: 0px 8px 40px 0px rgba(0, 0, 0, 0.1);
  /* box-shadow: 4px 7px 40px 2px rgba(0, 0, 0, 0.1); */
`;
export const Carddes = styled.div`
  width: 360px;
  height: 388px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  border-radius: 16px;
  background: #fff;
  padding: 32px 24px;

  h1 {
    color: var(--Text-blue);
    text-align: center;

    /* Style 1 / Title 1 Bold */
    font-family: inherit;
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: 52px; /* 108.333% */
  }
  h3 {
    color: var(--Text-blue);
    text-align: center;
    margin: 24px 0 8px 0;
    /* Style 1 / Body 1 Bold */
    font-family: inherit;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 133.333% */
  }
  p {
    color: rgba(26, 35, 110, 0.7);
    text-align: center;
    font-family: inherit;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 133.333% */
  }
  Button {
    width: 100%;
    text-align: center;
    margin: 0;
    font-size: 15px;
  }
`;
