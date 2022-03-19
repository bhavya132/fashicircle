import { useForm } from 'react-hook-form';
import React, { useState } from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import QRCode from "qrcode.react";
import Header from "../components/Header";
import useSWR from 'swr'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function Upload() {

    const router = useRouter();
    ;
    const { data, error } = useSWR('/api/hello', fetcher)
    const [qrValue, setQrValue] = useState("data")
    // form validation rules 
    const validationSchema = Yup.object().shape({

        id: Yup.string()
            .required('Seller Id is required'),
        pincode: Yup.string()
            .required('Pincode is required'),
        type: Yup.string()
            .required('Password is required'),
        material_info: Yup.string()
            .required('Password is required'),
        quantity: Yup.string()
            .required('Pincode is required'),
        acceptTerms: Yup.bool()
            .oneOf([true], 'Accept Ts & Cs is required')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(data_v) {
        // display form data on success
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
        console.log("================")
        console.log(data_v)
        // const { data, error } = useSWR(
        //     `/api/hello`,
        //     fetcher
        //   )
          
        router.push('/dashboard')
        return false;
        // return NextResponse.redirect('/signup');

    }
 
  

    return (<section className="home">
        <Header/>
        <div className="card m-3">
             
            <h5 className="card-header">Bid Your Price</h5>
            {/* <h5 className="card-header">{data}</h5> */}
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-row">
                        
                        <div className="form-group col-5">
                            <label>Your(Buyer) Id</label>
                            <input name="ID" type="text" {...register('ID')} className={`form-control ${errors.ID ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.ID?.message}</div>
                        </div>
                        <div className="form-group col-5">
                            <label>Pin Code</label>
                            <input name="pincode" type="text" {...register('pincode')} className={`form-control ${errors.pincode ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.pincode?.message}</div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-4">
                            <label>Product Quantity</label>
                            <input name="quantity" type="text" {...register('quantity')} className={`form-control ${errors.quantity ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.quantity?.message}</div>
                        </div>                  
                    </div>
                    <div className="form-row">
                        <div className="form-group col-4">
                            <label>Price</label>
                            <input name="type" type="text" {...register('type')} className={`form-control ${errors.type ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.type?.message}</div>
                        </div>
                        <div className="form-group col-6">
                            <label>Remarks</label>
                            <input name="material_info" type="text" {...register('material_info')} className={`form-control ${errors.material_info ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.material_info?.message}</div>
                        </div>
                    </div>
                   
                    <div className="form-group form-check">
                        <input name="acceptTerms" type="checkbox" {...register('acceptTerms')} id="acceptTerms" className={`form-check-input ${errors.acceptTerms ? 'is-invalid' : ''}`} />
                        <label htmlFor="acceptTerms" className="form-check-label">Accept Terms & Conditions</label>
                        <div className="invalid-feedback">{errors.acceptTerms?.message}</div>
                    </div>
                    <div className="form-group">
                        <button type="submit" onClick={() => onSubmit("po")} className="btn btn-primary m-3">Submit</button>
                        <button type="button" onClick={() => reset()} className="btn btn-secondary">Reset</button>
                    </div>
                </form>
              
            </div>
            <br />
     
        </div>
    </section>
    );
}