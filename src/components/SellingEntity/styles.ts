import styled from "styled-components";

export const SellingEntityContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;

  max-width: 140px;

  transition: filter 0.2s;

  img {
    border-radius: 16px;
    width: 140px;
    height: 140px;
    object-fit: cover;
  }

  strong {
    display: inline-block;
    margin-top: 0.5rem;
    margin-bottom: 0.25rem;
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 0.875rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  span {
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.gray[200]};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @media (min-width: 1024px) {
    &:hover {
      filter: brightness(0.8);
    }
  }
`;
