import React from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {
     const {
            register,
            handleSubmit,
            formState: { errors },
        } = useForm()
    
        const onSubmit = (data) => console.log(data)
    
    return (
         <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                         <h1 className="text-3xl font-bold text-center">Create am account!</h1>
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" 
                        {...register('email',{require: true})} className="input" placeholder="Email" />
                        {
                            errors.email?.type === 'required' &&
                            <p className="text-red-500 text-sm">Email is required</p>
                        }

                        {/* Password */}
                        <label className="label">Password</label>
                        <input type="password" {...register('password', {
                            required: true,
                            minLength: 6,
                        })} className="input" placeholder="Password" />
                        {
                            errors.password?.type === 'required' &&
                            <p className="text-red-500 text-sm">Password is required</p>
                        }
                        {
                            errors.password?.type === 'minLength' &&
                            <p className="text-red-500 text-sm">Password must be 6 charecter or long</p>
                        }

                        <div><a className="link link-hover">Forgot password?</a></div>
                    </fieldset>
                    <button className="btn btn-neutral mt-4">Register</button>
                </div>
                </div>
                        
            </form>
        </div>
    );
};

export default Register;