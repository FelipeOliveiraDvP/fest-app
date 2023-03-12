import Link from "next/link";
import { Event } from "@/pages";
import { Anchor, Box, Text, Title, Stack } from "@mantine/core";
import Image from "next/image";

interface Props {
  event: Event;
}

export function EventCard({ event }: Props) {
  return (
    <Anchor
      component={Link}
      href={`/eventos/${event.slug}`}
      sx={{
        "&:hover": {
          textDecoration: "none",
        },
      }}
    >
      <Stack spacing={8}>
        <Box pos="relative" h={{ base: 200, sm: 350, md: 250 }}>
          <Box
            component={Image}
            src={event.banner}
            alt={event.title}
            fill
            sx={(theme) => ({
              borderRadius: theme.radius.xl,
              maxWidth: "100%",
            })}
          />
        </Box>

        <Text color="gray.7">{event.date}</Text>
        <Title order={2} color="black">
          {event.title}
        </Title>
        <Text color="gray.7">{event.locale}</Text>
      </Stack>
    </Anchor>
  );
}
