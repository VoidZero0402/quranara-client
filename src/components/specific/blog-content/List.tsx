type ListProps = { items: { content: string }[] };

function List({ items }: ListProps) {
    return (
        <ul>
            {items.map((item) => (
                <li key={item.content}>{item.content}</li>
            ))}
        </ul>
    );
}

export default List;
