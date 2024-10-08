import { AnimatePresence, motion } from "framer-motion"
import PostCard from "./PostCard"
import { Button } from "./ui/button"
import { CardDescription, CardTitle } from "./ui/card"
// import {
//     Pagination,
//     PaginationContent,
//     PaginationEllipsis,
//     PaginationItem,
//     PaginationLink,
//     PaginationNext,
//     PaginationPrevious,
// } from "@/components/ui/pagination"
import { useSavedResultsStore } from "@/lib/store/useSavedResultsStore"
import { ChevronDown, Share, Trash2, TriangleAlert } from "lucide-react"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import exportResults from "@/lib/utils/export"


const SavedResults = () => {

    const { savedResults, clearSavedResults } = useSavedResultsStore()

    const handleClear = () => {
        clearSavedResults()
    }

    console.log(savedResults)

    const handleExport = (filetype: string) => {
        exportResults({
            results: savedResults,
            filetype: filetype
        })
    }

    return (
        <div className="mx-4 py-4 space-y-8" id='saved-results'>
            <div className="bg-background rounded-md  border flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                <div className="px-4 pt-4 py-2 space-y-1" >
                    <CardTitle className="text-xl">
                        Saved Classification Results
                    </CardTitle>
                    <CardDescription>
                        Saved results are stored in the localstorage.
                    </CardDescription>
                </div>

                <div className="min-h-[628px]">
                    {savedResults.length === 0 ? (
                        <div className="flex flex-col items-center gap-1 text-center">
                            <p className="text-2xl font-bold tracking-tight">
                                You have no saved results
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Results will be added here as soon as you save one.
                            </p>
                            <Button className="mt-4" variant={'secondary'}><a href="#results">Save a result</a></Button>
                        </div>
                    ) : (
                        <AnimatePresence>
                            <div className="px-4 pb-4 border-b flex gap-2 justify-end">
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button variant={"outline"} className="px-3 hover:text-white hover:bg-red-500"><Trash2 size={16} className="mr-2" /> Delete All</Button>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[425px]">
                                        <DialogHeader>
                                            <DialogTitle>Delete All Saved Results</DialogTitle>
                                            <DialogDescription>
                                                Are you sure you want to delete all saved results? This action cannot be undone.
                                            </DialogDescription>
                                        </DialogHeader>
                                        <div className="grid gap-4 py-4 bg-[#FEEDDD] text-red-600 px-4 -space-y-2" >
                                            <div className="flex gap-1 items-center">
                                                <TriangleAlert size={16} />
                                                Warning
                                            </div>
                                            <div className="text-sm">{savedResults.length} items will be deleted.</div>
                                        </div>
                                        <DialogFooter>
                                            <DialogClose asChild>
                                                <Button variant="secondary">Cancel</Button>
                                            </DialogClose >
                                            <Button
                                                onClick={() => handleClear()}
                                                className="px-3 text-white bg-red-600 hover:bg-red-700 flex items-center gap-2"><Trash2 size={16} /> Delete</Button>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        {/* <Button variant={"outline"} className="px-3"><EllipsisVertical size={16} /></Button> */}
                                        <Button variant={"outline"} className="flex items-center gap-2"> <Share size={16} /> Export <ChevronDown size={16} className="translate-y-[2px]" /> </Button>

                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem onClick={() => handleExport("json")}>JSON</DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => handleExport("csv")}>CSV</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>

                            </div>
                            <motion.div
                                className="px-4 py-8 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
                                layout="position"
                            >
                                {savedResults?.map((post) =>
                                    <PostCard key={post.id} post={post} />
                                )}
                            </motion.div>
                        </AnimatePresence>
                    )
                    }
                </div>



                {/* {savedResults.length !== 0 ? (
                    <CardFooter className="flex">
                        <div className="text-xs flex-1 text-muted-foreground">
                            Showing <strong>1-{savedResults.length}</strong> of <strong>{savedResults.length}</strong>{" "}
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
                ) : (<></>)
                } */}
            </div>
        </div >
    )
}

export default SavedResults