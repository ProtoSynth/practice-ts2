import React from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import Typography from "../Typography";
import { error } from "console";

const schema = yup.object().shape({
    email: yup.string().required("Email is required").email("Invalid email"),
    password: yup.string().required("Password is required").min(6, "Password must be at least 6 characters long"),
});

const Login: React.FC = () => {
    const { handleSubmit, control, errors } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <div className="login">
            <Typography variant="">
                Login
            </Typography>
            <form 
                onSubmit={handleSubmit(onSubmit)}
                className="login-form"
            >
                <div className="form-group">
                    <label>
                        Email:
                    </label>
                    <Controller 
                        name="email"
                        control={control}
                        render={({ field }) => <input {...field} />}
                    />
                    <Typography variant="">
                        {errors.email?.message}
                    </Typography>
                </div>
            </form>
        </div>
    );
};

export default Login;