import React from 'react'
import { categories } from '../utils/data'

const CategoryPage = () => {
  return (
    <div>
      <div>
        {categories && categories.map((item)=>(
          <div key={item.id}>{item.name}</div>
        )) }
      </div>
    </div>
  )
}

export default CategoryPage