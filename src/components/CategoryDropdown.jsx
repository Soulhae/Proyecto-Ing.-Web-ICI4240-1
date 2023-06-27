import React, { useState } from "react";

const CategoryDropdown = (props) => {
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
        props.onCategoryChange(event.target.value);
    };

    return (
        <div>
            <label htmlFor="category">Selecciona una categoría:</label>
            <select
                id="category"
                value={selectedCategory}
                onChange={handleCategoryChange}
            >
                <option value="">-- Selecciona una categoría --</option>
                <option value="arte">Arte</option>
                <option value="videojuegos">Videojuegos</option>
                <option value="tecnologia">Tecnología</option>
            </select>
        </div>
    );
};

export default CategoryDropdown;
