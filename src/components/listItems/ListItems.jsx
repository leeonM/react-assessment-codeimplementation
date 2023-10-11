import React from 'react'

const ListItems = () => {
  const list = ['Banana','Apple','Orange','Pear','Watermelon']

  return (
    <div>
        <ul>
            {list.map((item)=>(
                <li>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default ListItems