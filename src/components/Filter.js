import React from 'react'

const Filter = ({ onCategoryChange }) => {
    const handleCategoryChange = event => {
        const selectedCategory = event.target.value;
    onCategoryChange(selectedCategory);
    }
  return (
    <select className="filter" onChange={handleCategoryChange}>
        <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
    </select>
  )
}

export default Filter