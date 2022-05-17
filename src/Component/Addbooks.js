import React from 'react'

const Addbooks = () => {
  return (
    <div><div className="container">
    <div className="row g-3">
        <div className="col col-12 col-sm-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label for="" className="form-label">BOOK TITLE</label>
            <input  placeholder="book title" type="text" className="form-control"/>
            
        </div>
        <div className="col col-12 col-sm-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label for="" className="form label">AUTHOR</label>
            <input placeholder="author name" type="text" className="form-control"/>

        </div>
        <div className="col col-12 col-sm-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label for="" className="form-label">PRICE</label>
            <input placeholder="price" type="text" className="form-control"/>
        </div>
        <div className="col col-12 col-sm-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <button className="btn btn-success">Submit</button>
        </div>
    </div>
</div></div>
  )
}

export default Addbooks