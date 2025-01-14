import NextLink, { LinkProps as NextLinkProps } from "next/link";

type LinkProps = React.ComponentProps<"a"> & NextLinkProps;

function Link({ children, href }: LinkProps) {
    return <NextLink href={href}>{children}</NextLink>;
}

export default Link;
