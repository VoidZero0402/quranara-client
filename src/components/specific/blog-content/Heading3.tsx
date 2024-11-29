type Heading3Props = React.ComponentProps<"h3">;

function Heading3({ children }: Heading3Props) {
    return <h3 className="font-pelak-semibold text-xl text-gray-800 dark:text-gray-200 leading-9">{children}</h3>;
}

export default Heading3;
