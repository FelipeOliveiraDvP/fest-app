import { Button, Input } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

export function Search() {
  return (
    <Input
      aria-label="Pesquisar"
      radius="md"
      width={200}
      rightSection={
        <Button
          color="primary"
          radius="md"
          rightIcon={<IconSearch size={16} />}
        >
          PESQUISAR
        </Button>
      }
      rightSectionWidth="none"
    />
  );
}
