import { Carousel } from "@/components/home/Carousel";
import { Container, Stack } from "@mantine/core";

export default function Home() {
  return (
    <Container>
      <Stack spacing="md" my="md">
        <Carousel />
      </Stack>
    </Container>
  );
}
