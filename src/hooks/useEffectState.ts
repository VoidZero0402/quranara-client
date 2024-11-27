import { useEffect, useState } from "react";

function useEffectState<T>(value: T) {
    const [state, setState] = useState<T>(value);

    useEffect(() => {
        setState(value);
    }, [value]);

    return [state, setState] as [T, React.Dispatch<React.SetStateAction<T>>];
}

export default useEffectState;
