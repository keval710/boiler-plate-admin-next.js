'use client'
import React from 'react'
import { useForm } from 'react-hook-form';


export interface FormDataInterface {
    username: string;
    email: string;
    date?: Date;
};

interface Props {
    handleIsOpen: () => void,
    addOrUpdateDataFun: (data: FormDataInterface) => void,
    data?: FormDataInterface
}


const AddDataForm: React.FC<Props> = ({ handleIsOpen, addOrUpdateDataFun, data }) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        trigger,
        reset,
    } = useForm<FormDataInterface>({
        mode: "onChange",
        defaultValues: {
            username: data?.username,
            email: data?.email
        }
    })

    const onSubmit = handleSubmit((data) => {
        addOrUpdateDataFun(data);
        reset();
        handleIsOpen();
    });

    return (
        <div className="flex items-center justify-center overflow-y-scroll overflow-x-hidden fixed top-0 right-0 left-0 z-50  w-full md:inset-0 h-screen max-h-full bg-gray-900 bg-opacity-60 overflow-hidden">
            <div className="relative p-4 w-full max-w-lg max-h-screen">
                <div className="relative bg-white rounded-lg shadow">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                        <h3 className="text-lg font-semibold text-gray-900">
                            Add User Data
                        </h3>
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                            onClick={() => handleIsOpen()}
                        >
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <form className="p-4 md:p-5" onSubmit={onSubmit}>
                        <div className="grid gap-2 mb-4 grid-cols-2">
                            <div className="col-span-2">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">
                                    User Name*
                                </label>
                                <input
                                    type="text"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                    placeholder="Type user name"
                                    {...register('username', {
                                        onBlur: () => {
                                            trigger('username');
                                        },
                                        required: 'User Name is required',
                                    })} />
                                {errors.username && <p className="text-red-500">{errors.username?.message}</p>}
                            </div>
                            <div className="col-span-2">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">
                                    Email*
                                </label>
                                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Type Email"
                                    {...register('email', {
                                        onBlur: () => {
                                            trigger('email');
                                        },
                                        required: 'Email is required',
                                    })} />
                                {errors.email && <p className="text-red-500">{errors.email?.message}</p>}
                            </div>
                            <div className="col-span-2">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">
                                    Date*
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                        </svg>
                                    </div>
                                    <input type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full ps-10 p-2.5" placeholder="Select date"
                                        {...register('date', {
                                            onBlur: () => {
                                                trigger('date');
                                            },
                                            required: 'Date is required',
                                        })} />
                                </div>
                                {errors.date && <p className="text-red-500">{errors.date?.message}</p>}
                            </div>
                        </div>

                        <button type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                            Add News
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddDataForm

