import React from 'react'
import './product.css';
function Product({choice, device, url,specs,youtube,blog,seller,gaming,tech}) {

 
  
  var num = 0;
  var num1 = 0;
  var num2=0;
  var num3 = 0;
  var num4 = 0;

   
    return (
        
        <div>

{/* First product */}
            
           <figure className="text-center ">
      <blockquote className="blockquote ">
        <h2 className="msg-heading text-dark">{choice}</h2>
      </blockquote>
    </figure>
    
    

    <figure className="text-center ">
      <blockquote className="blockquote ">
        <h2 className="msg-heading-1 text-dark">{device}</h2>
      </blockquote>
    </figure>
<br></br>
    <div className="row">
      <div className="col-sm-12 col-md-6"><img src={url} className="rounded img-fluid mx-auto d-block " alt="..." /></div>
      <div className="col-sm-12 col-md-6"><br></br><figure className="text-center ">
      <blockquote className="blockquote ">
        <h2 className="title text-dark">Specifications</h2>
      </blockquote>
    </figure>
    <div className="table-responsive-sm">
    <table className="table table-bordered border-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">specs</th>
      <th scope="col">quality</th>
      <th scope="col">recommendation</th>
    </tr>
  </thead>
  <tbody>
  {specs.map((brand) => (
            <tr>
            <th scope="row">{num=num+1}</th>
            <td>{brand.name}</td>
            <td>{brand.quality}</td>
            <td>{brand.recommendation}</td>
          </tr>
          ))}
    
   
  </tbody>
</table>
    </div>
   
    </div>
    </div>
    <br></br>
    <br></br>

    <div className="container" className="contentbg bg-gradient">
      <figure className="text-center ">
      <blockquote className="blockquote ">
        <h2 className="msg-heading text-light">Why we recommend this?</h2>
      </blockquote>
    </figure>

    <figure className="text-center ">
      <blockquote className="blockquote ">
        <h2 className="msg-heading-1 text-light">Experts views over this</h2>
      </blockquote>
    </figure>
    <br></br>
    <div className="container">
      <div className="table-responsive-sm">
      <table className="table table-dark table-bordered border-secondary">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Youtuber</th>
      <th scope="col">Views</th>
      <th scope="col">Likes</th>
      <th scope="col">brief</th>
      <th scope="col">recommendation</th>
      
    </tr>
  </thead>
  <tbody>
  {youtube.map((youtube) => (
             <tr>
             <th scope="row">{num1=num1+1}</th>
             <td>{youtube.name}</td>
             <td>{youtube.views}</td>
             <td>{youtube.likes}</td>
             <td>{youtube.brief}</td>
             <td>{youtube.recommendation}</td>
           </tr>
          ))}
   
   
  </tbody>
</table>
      </div>
    </div>
<br></br>
<br></br>

<figure className="text-center ">
      <blockquote className="blockquote ">
        <h2 className="msg-heading-1 text-light">Famous blogs on this</h2>
      </blockquote>
    </figure>
    <br></br>

<div className="container">
      <div className="table-responsive-sm">
      <table className="table table-dark  table-bordered border-secondary">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">blogger</th>
     <th scope="col">Likes</th>
     <th scope="col">recommendation</th>
      
    </tr>
  </thead>
  <tbody>
  {blog.map((blog) => (
             <tr>
             <th scope="row">{num2=num2+1}</th>
             <td>{blog.name}</td>
             <td>{blog.likes}</td>
             <td>{blog.recommendation}</td>
           </tr>
          ))}
</tbody>
</table>
      </div>
    </div>
    <br></br>
    <br></br>

    <figure className="text-center ">
      <blockquote className="blockquote ">
        <h2 className="msg-heading-1 text-light">Buyers ratings/reviews</h2>
      </blockquote>
    </figure>
    <br></br>
    

    <div className="container">
      <div className="table-responsive-sm">
      <table className="table table-dark  table-bordered border-secondary">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Sellers</th>
     <th scope="col">Ratings</th>
     <th scope="col">Brief</th>
     <th scope="col">recommendation</th>
      
    </tr>
  </thead>
  <tbody>
  {seller.map((seller) => (
             <tr>
             <th scope="row">{num3=num3+1}</th>
             <td>{seller.name}</td>
             <td>{seller.ratings}</td>
             <td>{seller.brief}</td>
             <td>{seller.recommendation}</td>
           </tr>
          ))}
  </tbody>
</table>
      </div>
    </div>
    <br></br>
    <br></br>
    {gaming.map((gaming) => (
      <>
             <figure className="text-center ">
             <blockquote className="blockquote ">
               <h2 className="msg-heading-1 text-light">{gaming.head}</h2>
             </blockquote>
           </figure>
           <br></br>
           
           <div className="container">
           <div className="card bg-dark bordered">
         <div className="card-body text-white">
         <figure className="text-center">
           <blockquote className="blockquote ">
             <p className="h1 msg-3 text-white"><b>{gaming.para}</b></p>
           </blockquote>
         </figure>
         </div>
       </div>
           </div></>
          ))}
    
   <br></br>
   <br></br>

</div>
<br></br>
<br></br>
<div className="container" className="back-2 bg-success bg-gradient">
      <figure className="text-center ">
      <blockquote className="blockquote ">
        <h2 className="msg-heading text-light"> Price Comparator</h2>
      </blockquote>
    </figure>

    <div className="container">
      <div className="table-responsive-sm">
      <table className="table table-dark table-bordered border-secondary">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Website</th>
      <th scope="col">Price</th>
      <th scope="col">Links</th>
      
      
    </tr>
  </thead>
  <tbody>
  {seller.map((seller) => (
             <tr className={seller.class}>
             <th scope="row">{num4=num4+1}</th>
             <td>{seller.name}</td>
             <td>{seller.price}</td>
             <td><a className="text-white" href={seller.link}>Buy</a></td>
             </tr>
          ))}
    </tbody>
</table>
      </div>
    </div>
    <br></br>
    <br></br>
</div>
<br></br>
<br></br>
<div className="container" className="back-2 bg-info bg-gradient">
      <figure className="text-center ">
      <blockquote className="blockquote ">
        <h2 className="msg-heading text-light"> Tech Stuff </h2>
      </blockquote>
    </figure>
    <div className="container">
    <div className="accordion accordion-flush" id="accordionFlushExample">

    {tech.map((tech) => (
          <div className="accordion-item">
          <h2 className="accordion-header" id={tech.id1}>
            <button className="accordion-button collapsed text-white bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target={tech.id3} aria-expanded="false" aria-controls={tech.id2}>
            <figure className="text-center ">
            <blockquote className="blockquote ">
              <h2 className="msg-heading-1 text-light">{tech.name}</h2>
            </blockquote>
          </figure>
            </button>
          </h2>
          <div id={tech.id2} className="accordion-collapse collapse" aria-labelledby={tech.id1} data-bs-parent="#accordionFlushExample">
            <div className="accordion-body"><figure className="text-center ">
          <blockquote className="blockquote ">
            <p className="h1 msg-3 text-white"><b>{tech.para}</b></p>
          </blockquote>
        </figure></div>
          </div>
        </div>  
          ))}
 
</div>

    </div>
    <br></br>
    <br></br>
    <br></br>
    </div>
 
        </div>
    )
}

export default Product;
