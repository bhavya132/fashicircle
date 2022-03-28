import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useRouter } from "next/router";
import QRCode from "qrcode.react";
import Header from "../components/Header";
import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export default function Upload() {
  const router = useRouter();
  const { data, error } = useSWR("/api/hello", fetcher);
  const [qrValue, setQrValue] = useState("data");
  // form validation rules
  const validationSchema = Yup.object().shape({
    id: Yup.string().required("Seller Id is required"),
    pincode: Yup.string().required("Pincode is required"),
    type: Yup.string().required("Password is required"),

    quantity: Yup.string().required("Pincode is required"),
    acceptTerms: Yup.bool().oneOf([true], "Accept Ts & Cs is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm(formOptions);

  const onSubmit= async (data) =>{
    // display form data on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
    console.log("================");
    console.log(data);

    let res = await fetch("http://localhost:3000/api/bids", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let res_data = await res.json();
    setQrValue(JSON.stringify(res_data.sucess));

    // router.push('/dashboard')
    return false;
    // return NextResponse.redirect('/signup');
  }

  return (
 
    <section className="home">
    <Header />
    <div className="card m-3">
      <h5 className="card-header">Bid Your Product</h5>
      <h5 className="card-header">{qrValue}</h5>
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-row">
            <div className="form-group col-5">
              <label>Your(Buyer) Id</label>
              <input
                name="id"
                type="text"
                {...register("id")}
                className={`form-control ${errors.ID ? "is-invalid" : ""}`}
              />
            </div>

            <div className="form-group col-5">
              <label>Product Id</label>
              <input
                name="p_id"
                type="text"
                {...register("p_id")}
                className={`form-control ${errors.ID ? "is-invalid" : ""}`}
              />
            </div>              
            <div className="form-group col-5">
              <label>Pin Code</label>
              <input
                name="pincode"
                type="text"
                {...register("pincode")}
                className={`form-control ${
                  errors.pincode ? "is-invalid" : ""
                }`}
              />
            </div>
          </div>
          <div className="form-row">
          
            <div className="form-group col">
              <label>More details about the quality of cloth</label>
              <input
                name="details"
                type="text"
                {...register("details")}
                className={`form-control ${
                  errors.material_info ? "is-invalid" : ""
                }`}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col">
              <label>Product Quantity</label>
              <input
                name="quantity"
                type="text"
                {...register("quantity")}
                className={`form-control ${
                  errors.quantity ? "is-invalid" : ""
                }`}
              />
            </div>
            <div className="form-group col">
              <label>Price</label>
              <input
                name="price"
                type="text"
                {...register("price")}
                className={`form-control ${errors.price ? "is-invalid" : ""}`}
              />
            </div>
          </div>
          <div className="form-group form-check">
            <input
              name="acceptTerms"
              type="checkbox"
              {...register("acceptTerms")}
              id="acceptTerms"
              className={`form-check-input ${
                errors.acceptTerms ? "is-invalid" : ""
              }`}
            />
            <label htmlFor="acceptTerms" className="form-check-label">
              Accept Terms & Conditions
            </label>
          </div>
          <div className="form-group">
          
            <button type="submit" className="btn btn-primary mr-1">
              Register Your Product
            </button>
            <button
              type="button"
              onClick={() => reset()}
              className="btn btn-secondary"
            >
              Reset
            </button>
          </div>
        </form>
       
      </div>
      <br />

    </div>
  </section>


  );
}
