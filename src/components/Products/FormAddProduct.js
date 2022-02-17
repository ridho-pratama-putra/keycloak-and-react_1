import React, {PropTypes, useRef, useState} from 'react';
import Box from "@mui/material/Box";
import {TextValidator, ValidatorForm} from 'react-material-ui-form-validator';
import PriceInput from "../Common/PriceInput";
import FormGroup from "@mui/material/FormGroup";
import Button from "@mui/material/Button";

const FormAddProduct = (props) => {
    const referenceForms = useRef();
    const [buyPrice, setBuyPrice] = useState('');

    const clearForm = () => {
        referenceForms.current.resetValidations();
        setBuyPrice('');
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
                    onSubmit={()=>{}}
                >
                    <FormGroup>

                        <TextValidator
                            label='Offline Sell price*'
                            validators={['required', 'minNumber:0']}
                            errorMessages={['required', 'minimum 0']}
                            InputProps={{
                                inputComponent: PriceInput,
                            }}
                            onChange={(event) => setBuyPrice(event.target.value)}
                            value={buyPrice}

                        />
                        <Button color='primary' type='submit'>Submit</Button>
                        <Button variant='contained' onClick={ () => clearForm() } >Reset form</Button>
                    </FormGroup>
                </ValidatorForm>
            </Box>
        </div>
    );
};

FormAddProduct.propTypes = {};

FormAddProduct.defaultProps = {};

export default FormAddProduct;
