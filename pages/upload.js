import { useForm } from "react-hook-form";
import React, { useState, useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useRouter } from "next/router";
import QRCode from "qrcode.react";
import Header from "./components/Header";
import useSWR from "swr";
// import randomstring from "randomstring"

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
  // const { data, error } = useSWR("/api/hello", fetcher);
  const [qrValue, setQrValue] = useState("");

  const downloadQRCode = () => {
    // Generate download with use canvas and stream
    const canvas = document.getElementById("qr-gen");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `${qrValue}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data)
    // data.p_id=toString(Math.floor(Math.random() * 100));
    console.log(data)
    let res = await fetch("http://localhost:3000/api/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let res_data = await res.json();

    setQrValue(JSON.stringify(res_data.hash));
    
  };

  return (
    <section className="home">
      <Header />
      <div className="card m-3">
        <h5 className="card-header">Upload Your Product</h5>
        <h5 className="card-header">
          {qrValue ? "QR Code since RFID is not integrated yet" : ""}
        </h5>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-row">
              <div className="form-group col-5">
                <label>Your(Seller) Id</label>
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
              </div>              <div className="form-group col-5">
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
                <label>Cloth Type</label>
                <input
                  name="type"
                  type="text"
                  {...register("type")}
                  className={`form-control ${errors.type ? "is-invalid" : ""}`}
                />
              </div>
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
          {/* <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
          {/* <input defaultValue="test" {...register("example")} /> */}

          {/* include validation with required or other standard HTML validation rules */}
          {/* <input {...register("exampleRequired", { required: true })} /> */}
          {/* errors will return when field validation fails  */}
          {/* {errors.exampleRequired && <span>This field is required</span>} */}

          {/* <input type="submit" /> */}
          {/* </form> */}
        </div>
        <br />
        {qrValue != "" ? (
          <>
            {" "}
            <QRCode
              id="qr-gen"
              value={qrValue}
              size={290}
              level={"H"}
              includeMargin={true}
            />
            <p>
              Click for{" "}
              <button type="button" onClick={downloadQRCode}>
                Download QR Code
              </button>
            </p>
          </>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
}
