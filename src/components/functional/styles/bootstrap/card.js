import ImageComponent from "../../image/image-component"
const Card=(prop)=>{
  
    return(
      <>
        <div className="card" style={{ width: "100%" }}>
            <ImageComponent  />
            
  <div className="card-body">
  <p className="card-title">jhon doe</p>
    <h4 className="card-text">some example text</h4>
    <a href="#" className="btn btn-primary" >
      See Profile</a>
  </div>
</div>
</>

    )
}
export default Card ;