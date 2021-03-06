import React, {useEffect, useRef} from 'react';
import {useParams} from "react-router";
import {PRODUCT, PROGRESS} from "../../constant";
import {createProduct, getProductsByBarcode} from "../../action/Product";
import {useKeycloak} from "@react-keycloak/web";
import {useDispatch, useSelector} from "react-redux";
import Box from "@mui/material/Box";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import FormGroup from "@mui/material/FormGroup/FormGroup";
import PriceInput from "../Common/PriceInput";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";

const ProductDetail = (props) => {
    const dispatch = useDispatch();
    const {barcode} = useParams();
    const keycloak = useKeycloak();

    const currentProduct = useSelector(state => {
        return state.products;
    });

    useEffect(() => {
        dispatch({type: PROGRESS.IN_PROGRESS});
        if (keycloak.initialized) {
            dispatch(getProductsByBarcode(barcode));
        }
    }, [dispatch, keycloak.initialized, barcode]);
    const referenceForms = useRef();

    const handleOnChange= (key, value) => {
        dispatch({type: PRODUCT.ON_CURRENT_PRODUCT_CHANGED, payload: {key: key.id, value: value}});
    }


    const clearForm = () => {
        referenceForms.current.resetValidations();
        // setDescription('');
        // setSellPrice('');
        // setBarcode('');
        // setStockAvailable('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const createProductAction = createProduct({
            // description: description,
            // sellPrice: sellPrice,
            // barcode: barcodeValue,
            // stockAvailable: stockAvailable
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
                                    onChange={(event) => handleOnChange(event.target)}
                                    value={currentProduct[0]?.description? currentProduct[0]?.description: ''}
                                    id={'description'}
                                    key={'descriptionKey'}
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
                                    onChange={(event) => handleOnChange(event.target)}
                                    value={currentProduct[0]?.sellPrice?currentProduct[0]?.sellPrice:''}
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
                                    onChange={(event) => handleOnChange(event.target)}
                                    value={currentProduct[0]?.barcode?currentProduct[0]?.barcode:''}
                                    disabled
                                    sx={{
                                        marginTop: '10px',
                                        width: '50ch',

                                    }}

                                />
                                <TextValidator
                                    label='Stock Available*'
                                    validators={['required']}
                                    errorMessages={['required']}
                                    onChange={(event) => handleOnChange(event.target.value)}
                                    value={currentProduct[0]?.stockAvailable?currentProduct[0]?.stockAvailable:''}
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

ProductDetail.propTypes = {};

ProductDetail.defaultProps = {};

export default ProductDetail;
