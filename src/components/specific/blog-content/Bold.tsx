type BoldProps = React.ComponentProps<"strong">;

function Bold({ children }: BoldProps) {
    return <strong>{children}</strong>;
}

export default Bold;
