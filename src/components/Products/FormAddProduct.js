import React, {useRef, useState} from 'react';
import Box from "@mui/material/Box";
import {TextValidator, ValidatorForm} from 'react-material-ui-form-validator';
import PriceInput from "../Common/PriceInput";
import FormGroup from "@mui/material/FormGroup";
import Button from "@mui/material/Button";
import {useDispatch} from "react-redux";
import {createProduct} from "../../action/Product";
import Card from "@mui/material/Card";

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
            <Card variant='outlined'>
                <Box sx={{
                    marginTop: '30px',
                    padding: '15px 20px 15px 20px',
                }}>
                    <ValidatorForm
                        ref={referenceForms}
                        component='form'
                        onSubmit={handleSubmit}
                    >
                        <FormGroup>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-around',
                            }}>
                                <TextValidator
                                    fullWidth
                                    label='Description*'
                                    validators={['required']}
                                    errorMessages={['required']}
                                    onChange={(event) => setDescription(event.target.value)}
                                    value={description}
                                    sx={{
                                        width: '50ch',
                                        marginTop: '10px',
                                    }}
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
                                    sx={{
                                        width: '50ch',
                                        marginTop: '10px',
                                    }}
                                />
                            </div>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-around'
                            }}>
                                <TextValidator
                                    label='Barcode*'
                                    validators={['required']}
                                    errorMessages={['required']}
                                    onChange={(event) => setBarcode(event.target.value)}
                                    value={barcode}
                                    sx={{
                                        marginTop: '10px',
                                        width: '50ch',

                                    }}

                                />
                                <TextValidator
                                    label='Stock Available*'
                                    validators={['required']}
                                    errorMessages={['required']}
                                    onChange={(event) => setStockAvailable(event.target.value)}
                                    value={stockAvailable}
                                    sx={{
                                        marginTop: '10px',
                                        width: '50ch',

                                    }}

                                />
                            </div>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                            }}>
                                <Button variant='contained' onClick={() => clearForm()}
                                        sx={{margin: '20px 15px 10px 15px'}}>Reset form</Button>
                                <Button variant='contained' type='submit'
                                        sx={{margin: '20px 15px 10px 15px'}}>Submit</Button>
                            </div>
                        </FormGroup>
                    </ValidatorForm>
                </Box>
            </Card>
        </div>
    );
};

export default FormAddProduct;
