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

export const Left = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  div {
    display: block;
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
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }
`;
export const Button = styled.button`
  padding: 12px 24px;
  border-radius: 6px;
  border: 1px solid var(--Elements-Light-Border, rgba(0, 0, 0, 0.1));
  background-color: transparent;
  color: inherit;
  font-family: inherit;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;
