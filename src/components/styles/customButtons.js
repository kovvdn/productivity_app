import styled from "styled-components";
import SettingsIcon from "../../images/settings-icon.svg";
import DeleteIcon from "../../images/delete-icon.svg";

const Button = styled.button`
  display: block;
  height: 32px;
  width: 32px;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  &:focus {
    outline: none;
  }
`;

export const SettingsButton = styled(Button)`
  background-image: url(${SettingsIcon});
`;

export const DeleteButton = styled(Button)`
  background-image: url(${DeleteIcon});
  &:hover {
    transform: scale(1.05);
  }
`;
