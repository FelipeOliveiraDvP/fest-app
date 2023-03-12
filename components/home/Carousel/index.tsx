import { useRef } from "react";
import { Box, Grid, Center, Stack, Text, Button } from "@mantine/core";
import { Carousel as MantineCarousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import Image from "next/image";

interface CarouselItem {
  banner: string;
  logo?: string;
  slug: string;
  title: string;
}

export function Carousel() {
  const autoplay = useRef(Autoplay({ delay: 5000 }));

  return (
    <MantineCarousel
      mx="auto"
      withIndicators
      maw="100%"
      // plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      previousControlLabel="Anterior"
      nextControlLabel="Próximo"
      styles={(theme) => ({
        root: {
          marginLeft: "0 !important",
          marginRight: "0 !important",
        },
        controls: {
          [`@media(max-width: ${theme.breakpoints.md})`]: {
            "&": {
              top: 175,
            },
          },
          [`@media(max-width: ${theme.breakpoints.sm})`]: {
            "&": {
              top: 75,
            },
          },
        },
        control: {
          background: theme.colors.primary[9],
          borderColor: theme.colors.primary[9],
          color: "white",
          opacity: 1,
        },
        indicators: {
          [`@media(max-width: ${theme.breakpoints.md})`]: {
            "&": {
              top: 350,
            },
          },
          [`@media(max-width: ${theme.breakpoints.sm})`]: {
            "&": {
              top: 160,
            },
          },
        },
        indicator: {
          backgroundColor: theme.colors.gray[4],
          display: "inline-block",
          width: 16,
          height: 16,
          "&[data-active=true]": {
            backgroundColor: theme.colors.primary[9],
          },
        },
      })}
    >
      {events.map((event) => (
        <MantineCarousel.Slide
          key={event.slug}
          bg="gray.1"
          sx={(theme) => ({
            borderRadius: theme.radius.xl,
            width: "100%",
          })}
        >
          <Grid>
            <Grid.Col sm={6} md={8}>
              <Link href={`/eventos/${event.slug}`}>
                <Box
                  pos="relative"
                  h={{ base: 300, sm: 250, md: 350, lg: 450 }}
                >
                  <Box
                    component={Image}
                    src={event.banner}
                    alt={event.title}
                    fill
                    sizes="100%"
                    sx={(theme) => ({
                      borderRadius: theme.radius.xl,
                    })}
                  />
                </Box>
              </Link>
            </Grid.Col>
            <Grid.Col sm={6} md={4}>
              <Center h="100%">
                <Stack spacing="xs" align="center" pb="sm">
                  <Box pos="relative" h={150} w={150}>
                    <Box
                      component={Image}
                      src={event.logo || "/placeholder.jpg"}
                      alt={event.title}
                      fill
                      sx={() => ({
                        borderRadius: "100%",
                      })}
                    />
                  </Box>
                  <Text weight={500} size="lg" align="center">
                    {event.title}
                  </Text>
                  <Button
                    color="acent.9"
                    radius="xl"
                    aria-label="Comprar ingresso"
                  >
                    Comprar Ingresso
                  </Button>
                </Stack>
              </Center>
            </Grid.Col>
          </Grid>
        </MantineCarousel.Slide>
      ))}
    </MantineCarousel>
  );
}

const events: CarouselItem[] = [
  {
    banner: "/example/santa-farra.png",
    title: "Santa Farra",
    slug: "santa-farra",
  },
  {
    banner: "/example/vem-tranquilo.png",
    title: "Vem Tranquilo",
    slug: "vem-tranquilo",
  },
  {
    banner: "/example/quartas-intencoes.jpg",
    title: "Quartas intenções",
    slug: "quartar-intencoes",
  },
];
