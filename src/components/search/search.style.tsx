import styled from '@emotion/styled';
import { shadeColor } from '#/helpers/shade-color';

export const SearchStyled = styled.div`
  position: absolute;
  top: 0;
  left: calc(50% - 100px);
  z-index: 10;
  font-size: 1rem;

  .input {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    gap: 10px;
    padding: 2px 8px;
    z-index: 20;

    background-color: ${({ theme }) => theme.palette.bg.mainContent};
    border: 2px solid ${({ theme }) => theme.palette.border.content};
    border-radius: 14px;
    color: ${({ theme }) => theme.palette.color.text};
    min-width: 300px;
    height: 30px;
    text-align: center;

    > svg {
      color: ${({ theme }) => theme.palette.border.content};
      cursor: pointer;
    }

    > input {
      width: 100%;
      background-color: transparent;
      outline: none;
      border: none;
    }
  }

  .settings {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 15;
    border-radius: 14px 14px 4px 4px;
    width: 100%;

    padding-top: 30px;

    display: flex;
    flex-direction: column;

    background-color: ${({ theme }) => theme.palette.bg.mainContent};
    box-shadow: 0 0 5px ${({ theme }) => theme.palette.border.content};

    &-wrapper {
      display: flex;
      flex-direction: column;
      gap: 4px;
      padding: 5px 0;

      .items {
        padding: 4px 10px;
        border-left: 2px solid transparent;
        font-size: 1rem;
        color: ${({ theme }) => theme.palette.color.subText};

        &:hover {
          color: ${({ theme }) => theme.palette.color.text};
          background-color: ${({ theme }) => shadeColor(theme.palette.bg.mainContent, -10)};
          border-left: 2px solid ${({ theme }) => theme.palette.bg.highlight};
          cursor: pointer;
        }
        transition: all 0.2s ease-in-out;
      }
    }
  }
`;
