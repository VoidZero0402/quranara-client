import NextLink, { LinkProps as NextLinkProps } from "next/link";

type LinkProps = React.ComponentProps<"a"> & NextLinkProps;

function Link({ children, href }: LinkProps) {
    return (
        <NextLink href={href} className="font-pelak-medium text-blue-500 dark:text-blue-400 underline">
            {children}
        </NextLink>
    );
}

export default Link;
