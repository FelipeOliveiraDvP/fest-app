import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import {
  Avatar,
  Box,
  Container,
  Flex,
  Group,
  MediaQuery,
  ActionIcon,
  Stack,
  Drawer,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconMenu2 } from "@tabler/icons-react";

import { NavLink } from "@/components/_commons/NavLink";
import Image from "next/image";

export function MainHeader() {
  const [opened, { open, close }] = useDisclosure(false);
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeComplete", close);
  }, []);

  return (
    <Box
      component="header"
      h={96}
      sx={(theme) => ({
        boxShadow: theme.shadows.md,
      })}
    >
      <Container h="100%">
        <Flex justify="space-between" h="100%" align="center">
          <Link href="/">
            <Box pos="relative" h={{ base: 85 }} w={{ base: 75 }}>
              <Box
                component={Image}
                src="/logo.png"
                alt="Fest"
                fill
                sizes="100%"
              />
            </Box>
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
