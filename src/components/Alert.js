import React from 'react';

function Alert(prop) {
  return (
    <div style={{height:'60px'}}>
   {prop.alert && <div>
                    <div className={`alert alert-${prop.alert.type} alert-dismissible fade show`} role="alert">
                        <strong>{prop.alert.type}</strong>:{prop.alert.msg}
                            </div>
                </div>}
                </div>
  )
}

export default Alert
