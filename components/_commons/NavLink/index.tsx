import Link from "next/link";
import { ReactNode } from "react";
import { Anchor, createStyles } from "@mantine/core";
import { useRouter } from "next/router";

interface Props {
  children: ReactNode;
  href: string;
}

export function NavLink({ children, href }: Props) {
  const router = useRouter();
  const { classes } = useStyles();
  const isActive = router.pathname === href;
  const activeClass = isActive ? "active" : "";

  return (
    <Anchor
      component={Link}
      href={href}
      className={[classes.root, activeClass].join(" ")}
    >
      {children}
    </Anchor>
  );
}

const useStyles = createStyles((theme) => ({
  root: {
    fontWeight: 600,
    fontSize: 18,
    color: theme.colors.gray[7],

    "&:hover, &.active": {
      color: theme.colors.primary[9],
      textDecoration: "underline",
    },
  },
}));
