type SpecialParagraphProps = React.ComponentProps<"p">;

function SpecialParagraph({ children }: SpecialParagraphProps) {
    return (
        <p className="relative h-max p-6 gray-light font-pelak-medium leading-8 rounded-xl">
            <span className="absolute right-0 top-0 bottom-0 h-4/5 w-1 m-auto bg-blue-500 rounded-full"></span>
            {children}
        </p>
    );
}

export default SpecialParagraph;
