'use client'
import AddDataForm, { FormDataInterface } from "@/components/AddDataForm"
import Button from "@/components/Button"
import Table from "@/components/Table"
import Toast from "@/components/Toast"
import axios from "axios"
import { useCallback, useEffect, useState } from "react"
import { Toaster } from "react-hot-toast"

const TablePage = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
    const [isReFetch, setIsReFetch] = useState<boolean>(false);
    const [data, setData] = useState([]);
    const [editDataState, setEditDataState] = useState<{
        id: string;
        email: string;
        username: string;
    }>({
        id: '',
        email: '',
        username: ''
    });

    const handleIsOpen = () => setIsOpen(!isOpen)
    const handleEditOpen = (data?: any) => {
        setIsEditOpen(!isEditOpen)
        setEditDataState(data)
    }

    const fetchData = useCallback(async () => {
        const data = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/users`)
        setData(data.data)
    }, [])

    useEffect(() => {
        fetchData();
    }, [fetchData, isReFetch]);


    const addData = (data: FormDataInterface) => {
        axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/users`, JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } })
            .then((res) => {
                Toast({ name: "Data Added Successfully" });
                setIsReFetch(!isReFetch);
            })
            .catch((err) => Toast({ name: "Error Occurred" }))
    }

    const editData = (data: FormDataInterface) => {
        axios.put(`${process.env.NEXT_PUBLIC_BASE_URL}/users/${editDataState.id}`, JSON.stringify({
            email: data.email,
            username: data.username
        }), { headers: { 'Content-Type': 'application/json' } })
            .then((res) => {
                setEditDataState({
                    email: '',
                    id: '',
                    username: ''
                });
                Toast({ name: "Data Edited Successfully" });
                setIsReFetch(!isReFetch);
            })
            .catch((err) => Toast({ name: "Error Occurred" }));
    }

    const deleteData = (id: string) => {
        axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}/users/${id}`)
            .then((res) => {
                Toast({ name: "Data Deleted Successfully" })
                setIsReFetch(!isReFetch)
            })
            .catch((err) => Toast({ name: "Error Occurred" }));
    }

    return (
        <>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <div className='flex justify-center'>
                <div className=' flex justify-end w-[100vw] p-6 md:w-[70vw] lg:w-[80vw]'>
                    <Button handleIsOpen={handleIsOpen} />
                </div>
            </div>
            <Table data={data} handleEditOpen={handleEditOpen} deleteData={deleteData} />
            {
                isOpen && <AddDataForm handleIsOpen={handleIsOpen} addOrUpdateDataFun={addData} />
            }
            {
                isEditOpen && <AddDataForm handleIsOpen={handleEditOpen} addOrUpdateDataFun={editData} data={editDataState} />
            }
        </>
    )
}

export default TablePage