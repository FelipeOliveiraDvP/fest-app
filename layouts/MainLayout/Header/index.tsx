import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import {
  Avatar,
  Box,
  Container,
  Flex,
  Group,
  Text,
  MediaQuery,
  ActionIcon,
  Stack,
  Drawer,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconMenu2 } from "@tabler/icons-react";

import { NavLink } from "@/components/_commons/NavLink";

export function MainHeader() {
  const [opened, { open, close }] = useDisclosure(false);
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeComplete", close);
  }, []);

  return (
    <Box
      component="header"
      h={72}
      sx={(theme) => ({
        boxShadow: theme.shadows.md,
      })}
    >
      <Container h="100%">
        <Flex justify="space-between" h="100%" align="center">
          <Link href="/" style={{ textDecoration: "none" }}>
            <Text color="primary" weight={900} size={32}>
              LOGO
            </Text>
          </Link>

          <MediaQuery smallerThan="md" styles={{ display: "none" }}>
            <Group role="navigation">
              <NavLink href="/">Eventos</NavLink>
              <NavLink href="/produtor">Área do produtor</NavLink>
            </Group>
          </MediaQuery>

          <MediaQuery smallerThan="md" styles={{ display: "none" }}>
            <Avatar radius="xl" color="primary" size={48} />
          </MediaQuery>

          <MediaQuery largerThan="md" styles={{ display: "none" }}>
            <ActionIcon onClick={() => open()}>
              <IconMenu2 size={32} />
            </ActionIcon>
          </MediaQuery>
        </Flex>
        <Drawer
          opened={opened}
          onClose={close}
          position="right"
          styles={{
            header: {
              justifyContent: "flex-end",
            },
          }}
        >
          <Stack spacing="xs" align="flex-end" role="navigation">
            <NavLink href="/">Eventos</NavLink>
            <NavLink href="/produtor">Área do produtor</NavLink>
          </Stack>
        </Drawer>
      </Container>
    </Box>
  );
}
