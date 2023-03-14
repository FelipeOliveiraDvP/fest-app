import { Box, Stack } from "@mantine/core";
import { CheckoutTicketItem, CheckoutTicketsTableItem } from "./Item";

export function CheckoutTicketsTable() {
  return (
    <Box
      bg="gray.1"
      p="md"
      sx={(theme) => ({
        borderRadius: theme.radius.md,
      })}
    >
      <Stack>
        {tickets.map((ticket, index) => (
          <CheckoutTicketsTableItem key={index} item={ticket} />
        ))}
      </Stack>
    </Box>
  );
}

const tickets: CheckoutTicketItem[] = [
  {
    name: "Área VIP - Últimos ingressos",
    tooltip: "Open Bar Premium + Open Food",
    description: "6° Lote",
    price: 200,
  },
  {
    name: "Pista Open Bar",
    description: "5° Lote",
    price: 90,
  },
  {
    name: "Copo Personalizado",
    description: "Promocional",
    price: 15,
  },
  {
    name: "Casadinho Pista - Open Bar",
    tooltip: "Desconto na compra de 2 ou mais convites",
    description: "2° Lote",
    price: 80,
  },
];
