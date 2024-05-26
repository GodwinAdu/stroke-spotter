"use client"

import { ColumnDef } from "@tanstack/react-table"
import { CellAction } from "./cell-action";


export const columns: ColumnDef<any>[] = [
    {
        accessorKey: "username",
        header: "Username",
    },
    {
        accessorKey: "name",
        header: "Full Name",
    },
    {
        accessorKey: "email",
        header: "Email Address",
    },
    {
        accessorKey: "profession",
        header: "Profession",
    },
    {
        id: "actions",
        cell: ({ row }) => <CellAction data={row.original} />
    },
];