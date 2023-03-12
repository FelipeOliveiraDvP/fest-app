import { Group, Text, Select } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";

export function CitySelect() {
  return (
    <Group>
      <Text color="gray.7">Eventos em:</Text>
      <Select
        aria-label="Cidade do evento"
        styles={{
          input: {
            border: "none",
            fontWeight: 700,
            fontSize: 18,
          },
          item: {
            background: "white",
          },
        }}
        value="Todas as cidades"
        data={["Todas as cidades", "São Paulo"]}
        rightSection={<IconChevronDown size={22} />}
        rightSectionWidth={30}
      />
    </Group>
  );
}
