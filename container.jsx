import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'

const Container = ({children}) => {
  return (
    <div>
        <div class="card" style={{width: "70%"}}>
  <div class="card-body">
    {children}
  </div>
</div>
    </div>
  )
}

export default Container