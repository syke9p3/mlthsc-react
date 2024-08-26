import { getSavedPosts } from "@/api/api"
import PostCard from "./PostCard"
import { useQuery } from "@tanstack/react-query"
import { Badge } from "@/components/ui/badge"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"


const Posts = () => {

    const { data: posts, isLoading, error } = useQuery(
        {
            queryKey: ['posts'],
            queryFn: getSavedPosts
        }
    )

    console.log(posts)

    return (
        <div className="mx-4 py-4 space-y-8">
            <Card className="border shadow-md flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                <CardHeader>
                    <CardTitle className="flex gap-2">
                        <h1>Saved Posts</h1>
                        <Badge variant={"outline"}>{posts?.length}</Badge>
                    </CardTitle>
                    <CardDescription>
                        Saved posts are stored in the localstorage.
                    </CardDescription>
                </CardHeader>

                {!posts && <div
                    className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm min-h-[25dvh]" x-chunk="dashboard-02-chunk-1"
                >
                    <CardContent className="flex flex-col items-center gap-1 text-center">
                        <h3 className="text-2xl font-bold tracking-tight">
                            You have no saved posts
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            You can see posts as soon as you save one.
                        </p>
                        <Button className="mt-4">Save a Post</Button>
                    </CardContent>
                </div>}

                <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4">
                    {posts?.map((post) =>
                        <PostCard key={post.id} post={post} />
                    )}
                </CardContent>
                <CardFooter className="flex">
                    <div className="text-xs flex-1 text-muted-foreground">
                        Showing <strong>1-{posts?.length}</strong> of <strong>{posts?.length}</strong>{" "}
                        posts
                    </div>
                    <Pagination className="flex-[0]">
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious href="" />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink isActive href="">1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="">2</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationNext href="" />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Posts