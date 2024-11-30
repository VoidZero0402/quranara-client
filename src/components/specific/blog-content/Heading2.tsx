type Heading2Props = React.ComponentProps<"h2">;

function Heading2({ children }: Heading2Props) {
    return <h2 className="my-4 font-pelak-semibold text-2xl text-gray-800 dark:text-gray-200 leading-10">{children}</h2>;
}

export default Heading2;
