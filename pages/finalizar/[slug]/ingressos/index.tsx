import Image from "next/image";
import { Title, Text, Button, Group, Flex, Box, Stack } from "@mantine/core";
import { IconCalendar, IconClock } from "@tabler/icons-react";

import CheckoutLayout from "@/layouts/CheckoutLayout";
import { IconLabel } from "@/components/_commons/IconLabel";
import { CheckoutTicketsTable } from "@/components/checkout/tickets/Table";
import { moneyFormat } from "@/helpers/moneyFormat";

export default function CheckoutTickets() {
  return (
    <CheckoutLayout>
      <Title order={1} hidden>
        ingressos
      </Title>
      <Group
        position="left"
        align="flex-start"
        spacing="lg"
        pb="md"
        sx={(theme) => ({
          borderBottom: `1px solid ${theme.colors.gray[4]}`,
        })}
      >
        <Box pos="relative" h={175} w={{ base: "100%", md: 300 }}>
          <Box
            component={Image}
            priority
            src="/example/santa-farra.png"
            alt="Santa Farra"
            fill
            sx={(theme) => ({
              borderRadius: theme.radius.xl,
            })}
          />
        </Box>
        <Stack>
          <Title order={2}>Santa Farra</Title>
          <IconLabel
            icon={<IconCalendar size={24} />}
            label="Ter 12 de Mar"
            color="yellow.7"
            size={18}
          />
          <IconLabel
            icon={<IconClock size={24} />}
            label="22:00"
            color="yellow.7"
            size={18}
          />
        </Stack>
      </Group>
      <CheckoutTicketsTable />
      <Flex justify="space-between" align="center">
        <Stack>
          <Text size="lg" color="gray.7">
            0 Ingressos
          </Text>
          <Text size={32} weight={700}>
            {moneyFormat(0)}
          </Text>
        </Stack>
        <Button size="lg" radius="xl">
          COMPRAR
        </Button>
      </Flex>
    </CheckoutLayout>
  );
}
