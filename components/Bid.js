import Link from 'next/link'

export default function Product({ product}) {
  return (
    <div class="col">.
    
    <div class="card shadow-sm">
      <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
     
      <div class="card-body">
     <h3>{product.name}</h3>
     <p class="card-text"><strong>Quantity:</strong> {product.quantity}</p>
     <p class="card-text"><strong>Type:</strong> {product.type}</p>
     <p class="card-text"><strong>Price:</strong> {product.Price}</p>
     <p class="card-text"><strong>Location Pincode:</strong> {product.pincode}</p>
        <p class="card-text">{product.details}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
         
            <button type="button" class="btn btn-sm btn-secondary"> 
            Bought
      </button>
            {/* <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> */}
          </div>
          <small class="text-muted">17/03/2022</small>
        </div>
      </div>
    </div>
  </div>
   
    
  
  )
}
