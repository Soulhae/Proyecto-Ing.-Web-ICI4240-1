import React, { useState, useEffect } from "react";

const SubcategoryDropdown = (props) => {
    const [selectedSubcategory, setSelectedSubcategory] = useState("");
    const [subcategories, setSubcategories] = useState([]);
    const categoria = {
        categoria: props.category,
    };
    // console.log(categoria);

    useEffect(() => {
        // simulate an API call to get subcategories based on the selected category
        const getSubcategories = async () => {
            const subcategories = await fetch(
                "http://localhost:3000/subcategorias",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(categoria),
                }
            ).then((response) => response.json());
            setSubcategories(subcategories);
        };
        getSubcategories();
    }, [props.category]);

    const handleSubcategoryChange = (event) => {
        setSelectedSubcategory(event.target.value);
        props.onSubcategoryChange(event.target.value);
    };

    return (
        <div>
            <label htmlFor="subcategory">Selecciona una subcategoría:</label>
            <select
                id="subcategory"
                value={selectedSubcategory}
                onChange={handleSubcategoryChange}
            >
                <option value="">-- Selecciona una subcategoría --</option>
                {subcategories.map((subcategory) => (
                    <option key={subcategory.id} value={subcategory.id}>
                        {subcategory.subcategoria}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SubcategoryDropdown;
