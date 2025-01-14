type ItalicProps = React.ComponentProps<"em">;

function Italic({ children }: ItalicProps) {
    return <em>{children}</em>;
}

export default Italic;
