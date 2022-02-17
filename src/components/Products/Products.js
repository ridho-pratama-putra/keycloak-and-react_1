import React from 'react';
import FormAddProduct from "./FormAddProduct";
import Progress from "../Progress";
import Notification from "../Notification";
import Box from "@mui/material/Box";

const Products = () => {

    return (
        <div>
            <Progress/>
            <Notification/>
            <h1 align={"center"}>PRODUCTS</h1>
            <Box display="flex" flexWrap="wrap" alignContent="space-around" sx={{
                padding: '15px 15px 15px 15px ',
                width: '100%'
            }}>
                <FormAddProduct/>
            </Box>
        </div>
    );
};

Products.propTypes = {};

Products.defaultProps = {};

export default Products;
