import Image from "next/image";
import { Card, Box, Stack, Title, Text, Button } from "@mantine/core";
import { IconCalendar, IconClock, IconMapPin } from "@tabler/icons-react";

export function EventDetailCard() {
  return (
    <Card shadow="md" radius="xl" withBorder>
      <Stack spacing="md">
        <Title order={1} align="center">
          Santa Farra
        </Title>
        <Box pos="relative" h={150} w={150} mx="auto">
          <Box
            component={Image}
            src="/placeholder.jpg"
            alt="Santa Farra"
            fill
            sx={() => ({
              borderRadius: "100%",
            })}
          />
        </Box>
        <Text
          color="yellow.7"
          size={18}
          sx={() => ({
            display: "flex",
            alignItems: "center",
          })}
        >
          <IconCalendar size={24} /> Ter 12 de Mar
        </Text>
        <Text
          color="yellow.7"
          size={18}
          sx={() => ({
            display: "flex",
            alignItems: "center",
          })}
        >
          <IconClock size={24} /> 22:00
        </Text>
        <Text
          size={18}
          weight={700}
          sx={() => ({
            display: "flex",
            alignItems: "center",
          })}
        >
          <IconMapPin size={24} /> Arena Barra Funda
        </Text>
        <Text>
          Avenida Nicolas Boer, 850 01140-060, Parque Industrial Tomas Edson,
          São Paulo, SP
        </Text>
        <Button color="acent.9" radius="xl" aria-label="Comprar ingresso">
          Comprar Ingresso
        </Button>
      </Stack>
    </Card>
  );
}
