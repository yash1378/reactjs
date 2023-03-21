import React from 'react'

function Alert(props) {
  return (
//     props.alert && <div classNameNameName="alert alert-warning alert-dismissible fade show" role="alert">
//   <strong>{props.alert.type}</strong>: {props.alert.msg}
//   {/* <button type="button" classNameNameName="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}

//  </div>

props.alert && <div className="alert alert-warning alert-dismissible fade show " role="alert" >
<strong>{props.alert.type}</strong> : {props.alert.msg}
{/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
</div>
//  props.alert && <div classNameName="alert alert-warning d-flex align-items-center" role="alert">
//   <svg classNameName="bi flex-shrink-0 me-2" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"/></svg>
//   <div>
//   <strong>{props.alert.type}</strong>: {props.alert.msg}
//   </div>
// </div>
// props.alert && <div className="alert alert-primary d-flex align-items-center" role="alert">
//   <svg className="bi flex-shrink-0 me-2" role="img" aria-label="Info:"></svg>
//   <div>
//   <strong>{props.alert.type}</strong>: {props.alert.msg}
//   </div>
// </div>
  )
}

export default Alert
