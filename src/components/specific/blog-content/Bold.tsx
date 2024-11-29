type BoldProps = React.ComponentProps<"strong">;

function Bold({ children }: BoldProps) {
    return <strong className="font-normal font-pelak-medium text-amber-500 dark:text-amber-400">{children}</strong>;
}

export default Bold;
