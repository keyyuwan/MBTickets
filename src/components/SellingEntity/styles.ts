import styled from "styled-components";

export const SellingEntityContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }

  img {
    border-radius: 16px;
    width: 140px;
    height: 140px;
  }

  strong {
    display: inline-block;
    margin-top: 0.5rem;
    margin-bottom: 0.25rem;
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 0.875rem;
  }

  span {
    font-size: 0.75rem;
  }
`;