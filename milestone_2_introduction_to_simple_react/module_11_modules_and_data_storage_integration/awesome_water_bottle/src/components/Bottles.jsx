import React, { use } from 'react'

const Bottles = ({bottlePrimise}) => {
    const bottleData = use(bottlePrimise)
    console.log(bottleData)

  return (
    <div>Bottles</div>
  )
}

export default Bottles