import React from "react";
import { Container, Icon, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";

interface ITransactionTypeButtonProps extends TouchableOpacityProps {
  title: string;
  type: "up" | "down";
}

const icons = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
};

export function TransactionTypeButton({
  title,
  type,
  ...rest
}: ITransactionTypeButtonProps) {
  return (
    <Container {...rest}>
      <Icon name={icons[type]} type={type}/>
      <Title>{title}</Title>
    </Container>
  );
}
