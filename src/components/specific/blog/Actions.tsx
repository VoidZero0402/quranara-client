"use client";

import { useQueryClient, useSuspenseQuery, useMutation } from "@tanstack/react-query";

import { getDetails } from "@/api/queries/blog";
import { likeBlog, dislikeBlog, saveBlog, unsaveBlog } from "@/api/mutations/blog";
import { LikeBlogStatusOptions, DislikeBlogStatusOptions, SaveBlogStatusOptions, UnsaveBlogStatusOptions } from "@/api/errors/blog";

import { statusHandler } from "@/libs/responses";

import Bookmark from "@/components/svgs/Bookmark";
import Heart from "@/components/svgs/Heart";
import Skeleton, { SkeletonFrame } from "@/components/ui/Skeleton";

import { ResponseWithMessage } from "@/types/response.types";

type ActionsProps = { _id: string };

function Actions({ _id }: ActionsProps) {
    const fetchDetails = async () => {
        return await getDetails({ blogId: _id });
    };

    const queryClient = useQueryClient();

    const {
        data: { data: details },
    } = useSuspenseQuery({ queryKey: [`blog-details-${_id}`], queryFn: fetchDetails });

    const { mutate: like, isPending: isPendingLike } = useMutation({
        mutationFn: () => likeBlog({ blogId: _id }),
        onSettled(data) {
            if (data) {
                statusHandler(data, LikeBlogStatusOptions);
            }

            if (data?.status === 201) {
                queryClient.setQueryData([`blog-details-${_id}`], (data: ResponseWithMessage) => ({ ...data, data: { ...data.data, isLiked: true } }));
            }
        },
    });

    const { mutate: dislike, isPending: isPendingDislike } = useMutation({
        mutationFn: () => dislikeBlog({ blogId: _id }),
        onSettled(data) {
            if (data) {
                statusHandler(data, DislikeBlogStatusOptions);
            }

            if (data?.status === 200) {
                queryClient.setQueryData([`blog-details-${_id}`], (data: ResponseWithMessage) => ({ ...data, data: { ...data.data, isLiked: false } }));
            }
        },
    });

    const { mutate: save, isPending: isPendingSave } = useMutation({
        mutationFn: () => saveBlog({ blogId: _id }),
        onSettled(data) {
            if (data) {
                statusHandler(data, SaveBlogStatusOptions);
            }

            if (data?.status === 201) {
                queryClient.setQueryData([`blog-details-${_id}`], (data: ResponseWithMessage) => ({ ...data, data: { ...data.data, isSaved: true } }));
            }
        },
    });

    const { mutate: unsave, isPending: isPendingUnsave } = useMutation({
        mutationFn: () => unsaveBlog({ blogId: _id }),
        onSettled(data) {
            if (data) {
                statusHandler(data, UnsaveBlogStatusOptions);
            }

            if (data?.status === 200) {
                queryClient.setQueryData([`blog-details-${_id}`], (data: ResponseWithMessage) => ({ ...data, data: { ...data.data, isSaved: false } }));
            }
        },
    });

    return (
        <div className="flex items-center gap-x-4">
            {details?.isLiked ? (
                <button className="flex-center size-12 font-pelak-medium bg-red-500 disabled:bg-red-400 rounded-xl transition-all duration-300" disabled={isPendingDislike} onClick={() => dislike()}>
                    <Heart />
                </button>
            ) : (
                <button className="flex-center size-12 font-pelak-medium red-light disabled:bg-red-100 dark:disabled:bg-red-500/15 rounded-xl transition-all duration-300" disabled={isPendingLike} onClick={() => like()}>
                    <Heart />
                </button>
            )}
            {details?.isSaved ? (
                <button className="flex-center size-12 font-pelak-medium bg-blue-500 disabled:bg-blue-400 rounded-xl transition-all duration-300" disabled={isPendingUnsave} onClick={() => unsave()}>
                    <Bookmark />
                </button>
            ) : (
                <button className="flex-center size-12 font-pelak-medium blue-light disabled:bg-blue-100 dark:disabled:bg-blue-500/15 rounded-xl transition-all duration-300" disabled={isPendingSave} onClick={() => save()}>
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
