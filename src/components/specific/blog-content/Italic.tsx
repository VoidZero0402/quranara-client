type ItalicProps = React.ComponentProps<"em">;

function Italic({ children }: ItalicProps) {
    return <em className="font-normal font-pelak-medium text-blue-500 dark:text-blue-400">{children}</em>;
}

export default Italic;
