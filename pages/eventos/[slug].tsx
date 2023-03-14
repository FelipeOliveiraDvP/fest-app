import Image from "next/image";
import { useRouter } from "next/router";
import { Grid, Box, Divider, Flex, Title, ActionIcon } from "@mantine/core";
import { IconShare } from "@tabler/icons-react";

import { EventDetailCard } from "@/components/events/EventDetailCard";

export default function EventDetail() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Grid>
      <Grid.Col sm={6} md={8}>
        <Box pos="relative" h={{ base: 200, sm: 250, md: 350, lg: 450 }}>
          <Box
            component={Image}
            src="/example/santa-farra.png"
            alt="Santa Farra"
            fill
            sizes="100%"
            sx={(theme) => ({
              borderRadius: theme.radius.xl,
            })}
          />
        </Box>
        <Divider my={48} />
        <Flex justify="space-between">
          <Title order={2}>Descrição do evento</Title>
          <ActionIcon>
            <IconShare size={24} />
          </ActionIcon>
        </Flex>
        {/* <TypographyStylesProvider>
            <div
              dangerouslySetInnerHTML={{ __html: "<p>Your html here</p>" }}
            />
          </TypographyStylesProvider> */}
        <p>😈 VEM AÍ A PRIMEIRA EDIÇÃO DA SANTA FARRA 😇</p>
        <p>+ de 40 Atléticas confirmadas</p>
        <br />
        <br />
        <p>🎤 LINE UP</p>
        <p>- MC DAVI</p>
        <p>- VEIGH</p>
        <p>- PIPOKINHA</p>
        <p>- GABB MC</p>
        <p>- Paredão</p>
        <p>- TI Albuquerque</p>
        <p>- Sapienza</p>
        <br />
        <br />
        <p>🍺 OPEN BAR PISTA</p>
        <ul>
          <li>Gin Tropical by V!be</li>
          <li>Gin Melancia by V!be</li>
          <li>Vodka</li>
          <li>Energético V!be</li>
          <li>Cerveja</li>
          <li>Água</li>
        </ul>
      </Grid.Col>
      <Grid.Col sm={6} md={4}>
        <EventDetailCard slug={slug as string} />
      </Grid.Col>
    </Grid>
  );
}
