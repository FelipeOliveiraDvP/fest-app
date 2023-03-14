import Link from "next/link";
import { useRouter } from "next/router";
import { Anchor } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import classNames from "classnames";

interface Props {
  path: string;
  label: string;
  complete?: boolean;
}

export function CheckoutStep({ path, label, complete }: Props) {
  const router = useRouter();
  const { slug } = router.query;
  const isActive = router.pathname.includes(path);

  return (
    <Anchor
      component={Link}
      className={classNames({
        default: !isActive && !complete,
        current: isActive,
        complete: complete,
      })}
      href={`/finalizar/${slug}/${path}`}
      aria-label={label}
      sx={(theme) => ({
        display: "flex",
        alignItems: "center",
        fontWeight: 700,

        "& span": {
          marginRight: theme.spacing.xs,
          width: 24,
          height: 24,
          lineHeight: 2,
          textAlign: "center",
          borderRadius: "100%",
        },

        [`@media(max-width: ${theme.breakpoints.xs})`]: {
          "&": {
            flexDirection: "column",
            fontSize: 16,
          },
        },

        "&.default": {
          color: theme.colors.gray[6],

          "& span": {
            background: theme.colors.gray[6],
            color: "white",
          },
        },

        "&.current": {
          color: theme.colors.gray[8],

          "& span": {
            background: theme.colors.gray[8],
            color: "white",
          },
        },

        "&.complete": {
          color: theme.colors.primary[9],

          "& span": {
            background: theme.colors.primary[9],
            color: "white",
          },
        },
      })}
    >
      <span>
        <IconCheck size={18} />
      </span>
      {label}
    </Anchor>
  );
}
