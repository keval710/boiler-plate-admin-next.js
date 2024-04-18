'use client'
import { Button, Stack } from '@mui/material';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import EditNoteTwoToneIcon from "@mui/icons-material/EditNoteTwoTone";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useMemo } from 'react';


interface Props {
    data: any;
    handleEditOpen: (data: {
        id: string,
        email: string,
        username: string,
    }) => void,
    deleteData: (id: string) => void
}

const Table: React.FC<Props> = ({ data, handleEditOpen, deleteData }) => {

    const columns: GridColDef[] = useMemo(() => [
        {
            field: "date",
            headerName: "Date",
            sortComparator: (a, b) => a - b,
            width: 200,
        },
        {
            field: "email",
            headerName: "Email",
            sortComparator: (a, b) => a - b,
            width: 500,
        },
        {
            field: "username",
            headerName: "User Name",
            sortComparator: (a, b) => a - b,
            width: 500,
        },
        {
            field: "action",
            headerName: "Action",
            width: 290,
            sortable: false,
            filterable: false,
            renderCell: (params) => {
                return (
                    <Stack direction="row" spacing={2} padding={1}>
                        <Button
                            variant="outlined"
                            color="primary"
                            size="small"
                            startIcon={<EditNoteTwoToneIcon />}
                            onClick={() => {
                                handleEditOpen(params.row)
                            }
                            }
                        >
                            Edit
                        </Button>
                        <Button
                            variant="outlined"
                            color="error"
                            size="small"
                            startIcon={<DeleteOutlinedIcon />}
                            onClick={() => deleteData(params.row.id)}
                        >
                            Delete
                        </Button>
                    </Stack>
                );
            },
        },
    ], [deleteData, handleEditOpen]);

    return (
        <div className='flex justify-center'>
            <div className='flex justify-center h-[75vh] w-[100vw] px-3 md:w-[70vw] lg:w-[80vw]' >
                <div className='w-full flex justify-center'>
                    <DataGrid
                        rows={data}
                        getRowId={data.id}
                        columns={columns}
                        getRowHeight={() => "auto"}
                        pageSizeOptions={[25, 50, 100]}
                        disableRowSelectionOnClick
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 25,
                                },
                            },
                        }}
                        sx={{
                            boxShadow: 2,
                            ".MuiDataGrid-columnSeparator": {
                                display: "none",
                            },
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Table