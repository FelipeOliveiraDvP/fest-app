import { Button, Container, Stack, Group, Grid } from "@mantine/core";

import { Carousel } from "@/components/home/Carousel";
import { CitySelect } from "@/components/home/CitySelect";
import { Search } from "@/components/home/Search";
import { EventCard } from "@/components/home/EventCard";

export interface Event {
  banner: string;
  date: string;
  title: string;
  slug: string;
  locale: string;
}

export default function Home() {
  return (
    <Container>
      <Stack spacing={32} my={48}>
        <Carousel />
        <Grid>
          <Grid.Col md={6} lg={4} order={2} orderMd={1}>
            <CitySelect />
          </Grid.Col>
          <Grid.Col md={6} lg={4} offsetLg={4} order={1} orderMd={2}>
            <Search />
          </Grid.Col>
        </Grid>
        <Grid>
          {events.map((event) => (
            <Grid.Col key={event.slug} md={6} lg={4}>
              <EventCard event={event} />
            </Grid.Col>
          ))}
        </Grid>
        <Group position="center">
          <Button color="primary" size="xl" radius="lg">
            OUTROS EVENTOS
          </Button>
        </Group>
      </Stack>
    </Container>
  );
}

const events: Event[] = [
  {
    banner: "/example/vem-tranquilo.png",
    date: "Dom 05 de Mar",
    title: "Vem Tranquilo",
    slug: "vem-tranquilo",
    locale: "Carioca Bar",
  },
  {
    banner: "/example/veigh-yunk-vino.jpg",
    date: "Dom 05 de Mar",
    title: "It's a Trap Veigh & Yunk Vino",
    slug: "veigh-yunk-vino",
    locale: "Arena Modular",
  },
  {
    banner: "/example/quartas-intencoes.jpg",
    date: "Dom 05 de Mar",
    title: "Quartas Intenções",
    slug: "quartas-intencoes",
    locale: "Hod's",
  },
  {
    banner: "/example/baile-formatura-casper.png",
    date: "Dom 05 de Mar",
    title: "Baile de Formatura",
    slug: "baile-formatura-casper",
    locale: "Expo Center Norte",
  },
  {
    banner: "/example/mc-joaozinho-vt.jpg",
    date: "Dom 05 de Mar",
    title: "Mc Joaozinho VT",
    slug: "mc-joaozinho-vt",
    locale: "Vem pro baile",
  },
  {
    banner: "/example/bailao-fecap.png",
    date: "Dom 05 de Mar",
    title: "O Bailão",
    slug: "bailao-fecap",
    locale: "Fecap",
  },
  {
    banner: "/example/mc-tutu.jpg",
    date: "Dom 05 de Mar",
    title: "Mc Tutu",
    slug: "mc-tutu",
    locale: "Makeclap",
  },
  {
    banner: "/example/mc-marks.jpg",
    date: "Dom 05 de Mar",
    title: "Mc Marks",
    slug: "mc-marks",
    locale: "Hod's",
  },
  {
    banner: "/example/dj-arana.jpg",
    date: "Dom 05 de Mar",
    title: "Dj Arana",
    slug: "dj-arana",
    locale: "Crazy Bar",
  },
];
