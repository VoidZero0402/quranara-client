"use client";

import { useQueryClient, useSuspenseQuery, useMutation } from "@tanstack/react-query";

import { getDetails } from "@/api/queries/tv";
import { likeTv, dislikeTv, saveTv, unsaveTv } from "@/api/mutations/tv";
import { LikeTvStatusOptions, DislikeTvStatusOptions, SaveTvStatusOptions, UnsaveTvStatusOptions } from "@/api/errors/tv";

import { statusHandler } from "@/libs/responses";

import Bookmark from "@/components/svgs/Bookmark";
import Heart from "@/components/svgs/Heart";
import Skeleton, { SkeletonFrame } from "@/components/ui/Skeleton";

import { ResponseWithMessage } from "@/types/response.types";

type ActionsProps = { _id: string };

function Actions({ _id }: ActionsProps) {
    const fetchDetails = async () => {
        return await getDetails({ tvId: _id });
    };

    const queryClient = useQueryClient();

    const {
        data: { data: details },
    } = useSuspenseQuery({ queryKey: [`tv-details-${_id}`], queryFn: fetchDetails });

    const { mutate: like, isPending: isPendingLike } = useMutation({
        mutationFn: () => likeTv({ tvId: _id }),
        onSettled(data) {
            if (data) {
                statusHandler(data, LikeTvStatusOptions);
            }

            if (data?.status === 201) {
                queryClient.setQueryData([`tv-details-${_id}`], (data: ResponseWithMessage) => ({ ...data, data: { ...data.data, isLiked: true } }));
            }
        },
    });

    const { mutate: dislike, isPending: isPendingDislike } = useMutation({
        mutationFn: () => dislikeTv({ tvId: _id }),
        onSettled(data) {
            if (data) {
                statusHandler(data, DislikeTvStatusOptions);
            }

            if (data?.status === 200) {
                queryClient.setQueryData([`tv-details-${_id}`], (data: ResponseWithMessage) => ({ ...data, data: { ...data.data, isLiked: false } }));
            }
        },
    });

    const { mutate: save, isPending: isPendingSave } = useMutation({
        mutationFn: () => saveTv({ tvId: _id }),
        onSettled(data) {
            if (data) {
                statusHandler(data, SaveTvStatusOptions);
            }

            if (data?.status === 201) {
                queryClient.setQueryData([`tv-details-${_id}`], (data: ResponseWithMessage) => ({ ...data, data: { ...data.data, isSaved: true } }));
            }
        },
    });

    const { mutate: unsave, isPending: isPendingUnsave } = useMutation({
        mutationFn: () => unsaveTv({ tvId: _id }),
        onSettled(data) {
            if (data) {
                statusHandler(data, UnsaveTvStatusOptions);
            }

            if (data?.status === 200) {
                queryClient.setQueryData([`tv-details-${_id}`], (data: ResponseWithMessage) => ({ ...data, data: { ...data.data, isSaved: false } }));
            }
        },
    });

    return (
        <div className="flex items-center gap-x-4 self-end">
            {details?.isLiked ? (
                <button className="flex-center size-12 font-pelak-medium bg-red-500 text-white disabled:bg-red-400 rounded-xl transition-all duration-300" disabled={isPendingDislike} onClick={dislike as any}>
                    <Heart />
                </button>
            ) : (
                <button className="flex-center size-12 font-pelak-medium red-light disabled:bg-red-100 dark:disabled:bg-red-500/15 rounded-xl transition-all duration-300" disabled={isPendingLike} onClick={like as any}>
                    <Heart />
                </button>
            )}
            {details?.isSaved ? (
                <button className="flex-center size-12 font-pelak-medium bg-blue-500 text-white disabled:bg-blue-400 rounded-xl transition-all duration-300" disabled={isPendingUnsave} onClick={unsave as any}>
                    <Bookmark />
                </button>
            ) : (
                <button className="flex-center size-12 font-pelak-medium blue-light disabled:bg-blue-100 dark:disabled:bg-blue-500/15 rounded-xl transition-all duration-300" disabled={isPendingSave} onClick={save as any}>
                    <Bookmark />
                </button>
            )}
        </div>
    );
}

export function ActionsLoading() {
    return (
        <div className="flex items-center gap-x-4">
            <Skeleton>
                <SkeletonFrame className="size-12 rounded-xl"></SkeletonFrame>
            </Skeleton>
            <Skeleton>
                <SkeletonFrame className="size-12 rounded-xl"></SkeletonFrame>
            </Skeleton>
        </div>
    );
}

export default Actions;
