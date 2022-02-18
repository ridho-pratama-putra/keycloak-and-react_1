import React from 'react';
import FormAddProduct from "./FormAddProduct";
import Progress from "../Progress";
import Notification from "../Notification";
import Box from "@mui/material/Box";
import ListProduct from "./ListProduct";

const Products = () => {

    return (
        <div>
            <Progress/>
            <Notification/>
            <h1 align={"center"}>PRODUCTS</h1>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '15px 15px 15px 15px '
            }}>
                <FormAddProduct/>
                <ListProduct/>
            </Box>
        </div>
    );
};

Products.propTypes = {};

Products.defaultProps = {};

export default Products;
