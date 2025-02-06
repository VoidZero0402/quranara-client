import { useCallback } from "react";
import { useQueryClient } from "@tanstack/react-query";

function useInvalidateQueries(queryKeys: string[]) {
    const queryClient = useQueryClient();

    const invalidate = useCallback(() => {
        for (const queryKey of queryKeys) {
            queryClient.invalidateQueries({ queryKey: [queryKey], exact: false, refetchType: "all" });
        }
    }, []);

    return invalidate;
}

export default useInvalidateQueries;
