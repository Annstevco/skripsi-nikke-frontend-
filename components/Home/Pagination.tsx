import {Button} from "@mui/material";
import React from "react";

type PaginationProps = {
    meta: { currentPage: number; lastPage: number };
    setMeta: (meta: { currentPage: number; lastPage: number }) => void;
    reload: () => void;
};
export default function Pagination({meta, setMeta, reload}: PaginationProps) {

    const handlePageChange = (pageNumber: any) => {
        setMeta({ ...meta, currentPage: pageNumber });
        reload();
    };

    return (
        <div className="flex justify-center mt-4">
            <Button
                disabled={meta.currentPage === 1}
                onClick={() => handlePageChange(meta.currentPage - 1)}
                variant="contained"
                sx={{
                    backgroundColor: meta.currentPage === 1 ? "#ccc" : "#2D517B",
                    color: "black",
                    "&:hover": {
                        backgroundColor: "#2D517B",
                        color: "white",
                    },
                }}
                className="mr-2"
            >
                Sebelumnya
            </Button>
            <div className="flex gap-2">
                {meta.currentPage !== 1 && (
                    <div
                        className="px-4 py-2 rounded-md m-auto text-white hover:cursor-pointer transition cursor-pointer"
                        style={{
                            backgroundColor: "#2D517B",
                            color: "white",
                            border: meta.currentPage === 1 ? "3px solid black" : "3px solid white",
                        }}
                        onClick={() => {
                            handlePageChange(1);
                        }}
                    >
                        1
                    </div>
                )}
    
                {meta.currentPage !== 1 && meta.currentPage !== 2 && (
                    <div
                        className="px-4 py-2 rounded-md m-auto text-white hover:cursor-pointer transition cursor-pointer"
                        style={{
                            backgroundColor: "#2D517B",
                            color: "white",
                            border: meta.currentPage === meta.currentPage - 1 ? "3px solid black" : "3px solid white",
                        }}
                        onClick={() => {
                            handlePageChange(meta.currentPage - 1);
                        }}
                    >
                        {meta.currentPage - 1}
                    </div>
                )}
    
                <div
                    className="px-4 py-2 rounded-md m-auto text-white hover:cursor-pointer transition cursor-pointer"
                    style={{
                        backgroundColor: "#2D517B",
                        color: "white",
                        border: "3px solid black",
                    }}
                >
                    {meta.currentPage}
                </div>
                {meta.currentPage !== meta.lastPage && meta.currentPage !== meta.lastPage - 1 && (
                    <div
                        className="px-4 py-2 rounded-md m-auto text-white hover:cursor-pointer transition cursor-pointer"
                        style={{
                            backgroundColor: "#2D517B",
                            color: "white",
                            border: meta.currentPage === meta.currentPage + 1 ? "3px solid black" : "3px solid white",
                        }}
                        onClick={() => {
                            handlePageChange(meta.currentPage + 1);
                        }}
                    >
                        {meta.currentPage + 1}
                    </div>
                )}
    
                {meta.currentPage !== meta.lastPage && (
                    <div
                        className="px-4 py-2 rounded-md m-auto text-white hover:cursor-pointer transition cursor-pointer"
                        style={{
                            backgroundColor: "#2D517B",
                            color: "white",
                            border: meta.currentPage === meta.lastPage ? "3px solid black" : "3px solid white",
                        }}
                        onClick={() => {
                            handlePageChange(meta.lastPage);
                        }}
                    >
                        {meta.lastPage}
                    </div>
                )}
            </div>
            <Button
                disabled={meta.currentPage === meta.lastPage}
                onClick={() => handlePageChange(meta.currentPage + 1)}
                variant="contained"
                sx={{
                    backgroundColor: meta.currentPage === meta.lastPage ? "#ccc" : "#2D517B",
                    color: "black",
                    "&:hover": {
                        backgroundColor: "#2D517B",
                        color: "white",
                    },
                }}
                className="ml-2"
            >
                Selanjutnya
            </Button>
        </div>
    );      
}