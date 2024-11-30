type Heading4Props = React.ComponentProps<"h4">;

function Heading4({ children }: Heading4Props) {
    return <h4 className="my-4 font-pelak-semibold text-lg text-gray-800 dark:text-gray-200 leading-8">{children}</h4>;
}

export default Heading4;
