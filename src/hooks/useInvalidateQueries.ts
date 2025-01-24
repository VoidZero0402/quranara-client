import { useCallback } from "react";
import { useQueryClient } from "@tanstack/react-query";

function useInvalidateQueries(queryKey: string[]) {
    const queryClient = useQueryClient();

    const invalidate = useCallback(() => {
        queryClient.invalidateQueries({ queryKey, exact: true, refetchType: "all" });
    }, []);

    return invalidate;
}

export default useInvalidateQueries;
