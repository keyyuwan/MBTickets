import styled, { css } from "styled-components";

interface EventContainerProps {
  isActive?: boolean;
}

export const EventContainer = styled.div<EventContainerProps>`
  cursor: pointer;
  display: flex;
  flex-direction: column;

  max-width: 200px;

  transition: filter 0.2s;

  ${({ isActive }) =>
    !isActive &&
    css`
      filter: brightness(0.5);
      cursor: not-allowed;
    `}

  img {
    border-radius: 16px;
    width: 200px;
    height: 180px;
    object-fit: cover;
  }

  strong {
    display: inline-block;
    margin-top: 0.5rem;
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.heading};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .event-info {
    margin-top: 0.25rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${({ theme }) => theme.colors.gray[200]};

    time,
    span {
      font-size: 0.75rem;
      color: ${({ theme }) => theme.colors.gray[200]};
    }

    time::after {
      content: "•";
      margin: 0 0.25rem;
    }
  }

  @media (min-width: 1024px) {
    max-width: 240px;

    &:hover {
      filter: brightness(0.8);
    }

    img {
      width: 240px;
      height: 180px;
    }
  }
`;
