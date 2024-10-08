import React, { memo } from 'react'

const Child = ({count , func}) => {
    console.log("this is the child rendering")
  return (
    <div>
      <h1>this is the child rendering</h1>
    </div>
  )
}

export default memo(Child)
