/* eslint-disable react/prop-types */
import { createContext, useState, useEffect, useContext } from "react";
import { api } from "../services/api";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const { data: product } = await api.get("/produtos");
            setProducts(product);
            setFilteredProducts(product);
        }

        fetchData()
    }, [])

    return (
        <ProductsContext.Provider value={{ products, setProducts, filteredProducts, setFilteredProducts }}>
            {children}
        </ProductsContext.Provider>
    )
}

function useProducts() {
    const context = useContext(ProductsContext);

    if (!context) {
        throw new Error("useProducts deve ser usado com ProductsProvider")
    }

    return context;
}

export { ProductsProvider, useProducts }