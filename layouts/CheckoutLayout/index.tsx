import { ReactNode } from "react";
import { Stack, Flex } from "@mantine/core";

import { CheckoutStep } from "./Step";

interface Props {
  children: ReactNode;
}

export default function CheckoutLayout({ children }: Props) {
  return (
    <Stack spacing={32}>
      <Flex
        justify="space-around"
        bg="gray.1"
        py="md"
        sx={(theme) => ({
          borderRadius: theme.radius.md,
        })}
      >
        {/* TODO: Get step complete from session when user submit the page */}
        <CheckoutStep path="ingressos" label="Ingressos" complete />
        <CheckoutStep path="identificacao" label="Identificação" />
        <CheckoutStep path="resumo" label="Resumo" />
        <CheckoutStep path="pagamento" label="Pagamento" />
      </Flex>
      {children}
    </Stack>
  );
}
