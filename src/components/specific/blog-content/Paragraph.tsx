type ParagraphProps = React.ComponentProps<"p">;

function Paragraph({ children }: ParagraphProps) {
    return <p>{children}</p>;
}

export default Paragraph;
