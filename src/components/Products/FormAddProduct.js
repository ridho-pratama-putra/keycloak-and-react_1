import React, {useRef, useState} from 'react';
import Box from "@mui/material/Box";
import {TextValidator, ValidatorForm} from 'react-material-ui-form-validator';
import PriceInput from "../Common/PriceInput";
import FormGroup from "@mui/material/FormGroup";
import Button from "@mui/material/Button";
import {useDispatch} from "react-redux";
import {createProduct} from "../../action/Product";

const FormAddProduct = () => {
    const referenceForms = useRef();
    const [description, setDescription] = useState('');
    const [sellPrice, setSellPrice] = useState('');
    const [barcode, setBarcode] = useState('');
    const [stockAvailable, setStockAvailable] = useState('');
    const dispatch = useDispatch();

    const clearForm = () => {
        referenceForms.current.resetValidations();
        setDescription('');
        setSellPrice('');
        setBarcode('');
        setStockAvailable('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const createProductAction = createProduct({
            description,
            sellPrice,
            barcode,
            stockAvailable
        });
        dispatch(createProductAction);
    };

    return (
        <div>
            Form add product
            <Box justifyContent='flex-start' sx={{
                marginTop: '30px',
            }}>
                <ValidatorForm
                    ref={referenceForms}
                    component='form'
                    onSubmit={handleSubmit}
                >
                    <FormGroup>

                        <TextValidator
                            label='Description*'
                            validators={['required']}
                            errorMessages={['required']}
                            onChange={(event) => setDescription(event.target.value)}
                            value={description}
                            sx={{marginTop: '10px'}}
                        />
                        <TextValidator
                            label='Sell price*'
                            validators={['required', 'minNumber:0']}
                            errorMessages={['required', 'minimum 0']}
                            InputProps={{
                                inputComponent: PriceInput,
                            }}
                            onChange={(event) => setSellPrice(event.target.value)}
                            value={sellPrice}
                            sx={{marginTop: '10px'}}

                        />
                        <TextValidator
                            label='Barcode*'
                            validators={['required']}
                            errorMessages={['required']}
                            onChange={(event) => setBarcode(event.target.value)}
                            value={barcode}
                            sx={{marginTop: '10px'}}

                        />
                        <TextValidator
                            label='Stock Available*'
                            validators={['required']}
                            errorMessages={['required']}
                            onChange={(event) => setStockAvailable(event.target.value)}
                            value={stockAvailable}
                            sx={{marginTop: '10px'}}

                        />
                        <Button color='primary' type='submit'>Submit</Button>
                        <Button variant='contained' onClick={() => clearForm()}>Reset form</Button>
                    </FormGroup>
                </ValidatorForm>
            </Box>
        </div>
    );
};

export default FormAddProduct;
