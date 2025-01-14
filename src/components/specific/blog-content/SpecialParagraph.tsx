type SpecialParagraphProps = React.ComponentProps<"p">;

function SpecialParagraph({ children }: SpecialParagraphProps) {
    return <p className="special-paragraph">{children}</p>;
}

export default SpecialParagraph;
