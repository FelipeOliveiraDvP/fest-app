import { moneyFormat } from "@/helpers/moneyFormat";
import { Flex, Text, NativeSelect, Tooltip } from "@mantine/core";
import { IconChevronDown, IconQuestionCircle } from "@tabler/icons-react";

export interface CheckoutTicketItem {
  name: string;
  tooltip?: string;
  description: string;
  price: number;
}

export function CheckoutTicketsTableItem({
  item,
}: {
  item: CheckoutTicketItem;
}) {
  return (
    <Flex
      justify="space-between"
      direction={{ base: "column", md: "row" }}
      sx={(theme) => ({
        border: `1px solid ${theme.colors.gray[5]}`,
        borderRadius: theme.radius.md,
        fontSize: theme.fontSizes.xl,
      })}
    >
      <Text
        weight={500}
        pl={{ base: "xs", md: "md" }}
        mb={{ base: "xs", md: 0 }}
        w={{ base: "100%", md: "25%" }}
        sx={(theme) => ({
          display: "flex",
          alignItems: "center",
          "& svg": {
            marginLeft: 10,
            color: theme.colors.primary[9],
          },
        })}
      >
        {item.name}
        {item.tooltip && (
          <Tooltip label={item.tooltip}>
            <IconQuestionCircle size={24} />
          </Tooltip>
        )}
      </Text>
      <Text
        pl={{ base: "xs", md: "md" }}
        mb={{ base: "xs", md: 0 }}
        w={{ base: "100%", md: "25%" }}
      >
        {item.description}
      </Text>
      <Text
        color="primary.9"
        weight={700}
        pl={{ base: "xs", md: "md" }}
        mb={{ base: "xs", md: 0 }}
        w={{ base: "100%", md: "25%" }}
      >
        {moneyFormat(item.price)}
      </Text>
      <NativeSelect
        placeholder="Selecione"
        data={["1", "2", "3", "4"]}
        variant="filled"
        styles={(theme) => ({
          input: {
            backgroundColor: theme.colors.gray[5],
            color: "white",
            minWidth: 200,
            textAlign: "center",
          },
        })}
        rightSection={<IconChevronDown size={18} color="white" />}
      />
    </Flex>
  );
}
