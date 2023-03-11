import { useRef } from "react";
import { Image, Grid, Center, Stack, Text, Button } from "@mantine/core";
import { Carousel as MantineCarousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";

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
      withControls={false}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      styles={(theme) => ({
        controls: {
          position: "static",
          marginTop: theme.spacing.sm,
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
          })}
        >
          <Grid>
            <Grid.Col md={6} lg={8}>
              <Image
                src={event.banner}
                alt={event.title}
                width="100%"
                height="100%"
                radius="xl"
              />
            </Grid.Col>
            <Grid.Col md={6} lg={4}>
              <Center h="100%">
                <Stack spacing="xs" align="center">
                  <Image
                    src={event.logo}
                    alt={event.title}
                    withPlaceholder
                    width={150}
                    height={150}
                    radius="100%"
                  />
                  <Text weight={700} align="center">
                    {event.title}
                  </Text>
                  <Button color="acent.9" radius="xl">
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
