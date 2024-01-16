import React from "react";
import { useForm } from "react-hook-form";


export default function App() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm({
        defaultValues: {
            example: "",
            exampleRequired: ""
        }
    });

    console.log(watch("example")); // you can watch individual input by pass the name of the input

    return (
        <>
            <div className="form-div">
                <form
                    onSubmit={handleSubmit((data) => {
                        alert(JSON.stringify(data));
                    })}
                >
                    <label>Example</label>
                    <input {...register("example")} defaultValue="test" />
                    <label>ExampleRequired</label>
                    <input
                        {...register("exampleRequired", { required: true, maxLength: 10 })}
                    />
                    {errors.exampleRequired && <p>This field is required</p>}
                    <input type="submit" />
                </form>
            </div>
        </>

    );
}