import {
  Anchor,
  Box,
  Container,
  Flex,
  Grid,
  Group,
  Image,
  Stack,
  Text,
} from "@mantine/core";
import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
} from "@tabler/icons-react";

export function MainFooter() {
  return (
    <Box
      pt={32}
      sx={(theme) => ({
        borderTop: `1px solid ${theme.colors.gray[4]}`,
      })}
    >
      <Container>
        <Grid>
          <Grid.Col md={6} lg={3}>
            <Text color="primary" weight={700} size="lg">
              fest
            </Text>
            <Stack spacing="xs">
              <Anchor component={Link} href="/sobre">
                Sobre nós
              </Anchor>
              <Anchor component={Link} href="/como-funciona">
                Como funciona
              </Anchor>
              <Anchor component={Link} href="/promova-seu-evento">
                Promova seu evento
              </Anchor>
              <Anchor component={Link} href="/contato">
                Contato
              </Anchor>
            </Stack>
          </Grid.Col>
          <Grid.Col md={6} lg={6}>
            <Flex>
              <Image
                src="/qrcode.png"
                width={100}
                height={100}
                mr={12}
                alt="Baixe nosso App"
              />
              <div>
                <Text>Baixe agora nosso App</Text>
                <Text color="blue.7">Aponte a câmera do seu celular aqui</Text>
              </div>
            </Flex>
          </Grid.Col>
          <Grid.Col md={6} lg={3}>
            <Text weight={600} size="lg">
              LEGAL
            </Text>
            <Stack spacing="xs">
              <Anchor component={Link} href="/faq">
                Dúvidas frequentes
              </Anchor>
              <Anchor component={Link} href="/politica">
                Termos e políticas
              </Anchor>
              <Anchor component={Link} href="/cookies">
                Política de cookies
              </Anchor>
            </Stack>
          </Grid.Col>
          <Grid.Col span={12}>
            <Group position="center">
              <Anchor href="#" target="_blank" aria-label="Facebook">
                <IconBrandFacebook size={24} />
              </Anchor>
              <Anchor href="#" target="_blank" aria-label="Instagram">
                <IconBrandInstagram size={24} />
              </Anchor>
              <Anchor href="#" target="_blank" aria-label="Twitter">
                <IconBrandTwitter size={24} />
              </Anchor>
            </Group>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
