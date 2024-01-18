import React from "react";
import { useForm } from "react-hook-form";
import Typography from '@mui/material/Typography'
import { Button } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


interface ILoginForm {
    email: string,
    password: string
}

export enum Roles {
    "admin" = "admin"
}

export default function App() {
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm<ILoginForm>({
        mode: "onChange",
    });

    const onSubmit = (data) => {
        const { email, password } = getValues();
        console.log(email, password);
    }

    console.log(); // you can watch individual input by pass the name of the input

    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="logo w-full mx-auto"></div>
                    <h2 className="theme-text mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Welcome to Micro Munch
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Username
                            </label>
                            <div className="mt-2">
                                <input {...register("email")}
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input {...register("password", { required: true, maxLength: 10 })}
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.password && <p className="theme-text">This field is required</p>}
                            </div>
                        </div>
                        <div>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                <Select
                                    labelId="role-simple-select-label"
                                    id="role-simple-select"
                                    value={age}
                                    label="Age"
                                    onChange={handleChange}
                                >
                                    {Object.keys(Roles).map((role, index) => {
                                        return (
                                            <MenuItem value={index}>{role}</MenuItem>
                                        )
                                    })}
                                </Select>
                            </FormControl>

                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md submit-button px-3 py-1.5 text-sm font-semibold leading-9 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already a member?{' '}
                        <a href="/login" className="theme-text font-semibold leading-6">
                            Login Here
                        </a>
                    </p>
                </div>
            </div>
        </>

    );
}