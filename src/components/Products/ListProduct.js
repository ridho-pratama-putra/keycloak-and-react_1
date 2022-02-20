import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Box from "@mui/material/Box";
import NumberFormat from 'react-number-format';
import Card from "@mui/material/Card";
import MUIDataTable from 'mui-datatables';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {getProducts} from "../../action/Product";
import {useKeycloak} from "@react-keycloak/web";
import {PROGRESS} from "../../constant";
import { useNavigate } from 'react-router-dom';

const ListProduct = (props) => {

    const dispatch = useDispatch();
    const keycloak = useKeycloak();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch({type: PROGRESS.IN_PROGRESS});
        if (keycloak.initialized) {
            dispatch(getProducts());
        }
    }, [keycloak.initialized, dispatch]);

    const dataForTable = useSelector(state => {
        return state.products;
    });

    const columns = [
        {
            name: 'description',
            label: 'Name',
            options: {
                filter: true,
                sort: true
            }
        },
        {
            name: 'sellPrice',
            label: 'Sell Price',
            options: {
                sort: true,
                customBodyRender: (value) => (
                    <NumberFormat
                        displayType={'text'}
                        value={value}
                        thousandSeparator={true}
                        isNumericString={true}
                        prefix={'Rp. '}
                    />
                )
            }
        },
        {
            name: 'barcode',
            label: 'Barcode',
            options: {
                sort: true,
            }
        },
        {
            name: 'stockAvailable',
            label: 'Quantity',
            options: {
                sort: true
            }
        },
    ];

    const getMuiTheme = () =>
        createTheme({
            overrides: {
                MUIDataTable: {
                    paper: {
                        boxShadow: 'none'
                    }
                }
            }
        });

    // const dataForTable = [{
    //     productQuantity: 4,
    //     name: 'stock',
    //     buyPrice: '50000',
    //     offlineSellPrice: '400000',
    //     onlineSellPrice: '3000'
    // }];


    return (
        <div>
            <Box sx={{
                marginTop: '15px'
            }}>
                <Card variant='outlined'>
                    <ThemeProvider theme={getMuiTheme()}>
                        <MUIDataTable
                            title={'Product List'}
                            data={dataForTable}
                            columns={columns}
                            options={{
                                onRowClick: (rowData, f, g) => navigate(`/products/detail/${rowData[2]}`),
                                selectableRows: 'single',
                                // selectableRowsOnClick: true,
                            }}
                        />
                    </ThemeProvider>
                </Card>

            </Box>
        </div>
    );
};

ListProduct.propTypes = {};

ListProduct.defaultProps = {};

export default ListProduct;
