import React from 'react'

const Search = () => {
  return (
    <div><div class="container">
    <div class="row g-3">
        <div class="col col-12 col-sm-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label for="" class="form-label">BOOK TITLE</label>
            <input  placeholder="book title" type="text" class="form-control"/>
            
        
        </div>
        <div class="col col-12 col-sm-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <button class="btn btn-success">Search</button>
        </div>
    </div>
</div></div>
  )
}

export default Search