import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Link from "next/link";
// import { NextResponse, NextRequest } from 'next/server'
import { useRouter } from 'next/router';
export default Home;

function Home() {
    const router = useRouter();
    // form validation rules 
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
       
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(data) {
        // display form data on success
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
        router.push('/dashboard')
        return false;
        // return NextResponse.redirect('/signup');

    }

    return (
        <div className="card m-3">
            <h5 className="card-header">Log In to this revolutionary world!!</h5>
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-row"> 
                        <div className="form-group col">
                            <label>Email</label>
                            <input name="email" type="text" {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.email?.message}</div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col">
                            <label>Password</label>
                            <input name="password" type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.password?.message}</div>
                        </div>
                    </div>                  
                    <div className="form-group p-3">
                        <button type="submit" className="btn btn-primary m-3">Login</button>
                        <button type="button" onClick={() => reset()} className="btn btn-secondary m-3">Reset</button>
                    </div>
                </form>
            </div>
        </div>
    );
}