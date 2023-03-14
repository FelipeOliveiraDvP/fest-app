import Image from "next/image";
import { Card, Box, Stack, Title, Text, Button } from "@mantine/core";
import { IconCalendar, IconClock, IconMapPin } from "@tabler/icons-react";
import Link from "next/link";
import { IconLabel } from "@/components/_commons/IconLabel";

interface Props {
  slug: string;
}

export function EventDetailCard({ slug }: Props) {
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
        <IconLabel
          icon={<IconMapPin size={24} />}
          label="Arena Barra Funda"
          size={18}
          weight={700}
        />

        <Text>
          Avenida Nicolas Boer, 850 01140-060, Parque Industrial Tomas Edson,
          São Paulo, SP
        </Text>
        <Button
          color="acent.9"
          radius="xl"
          component={Link}
          href={`/finalizar/${slug}/ingressos`}
          aria-label="Comprar ingresso"
        >
          Comprar Ingresso
        </Button>
      </Stack>
    </Card>
  );
}
