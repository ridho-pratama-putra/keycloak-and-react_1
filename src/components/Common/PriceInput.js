import React from 'react';
import NumberFormat from 'react-number-format';

const PriceInput = React.forwardRef((props, ref) => {

    const {onChange, ...other } = props;

    return (
        <NumberFormat
            {...other}
            getInputRef={ref}
            onValueChange={(values) => {
                onChange({
                    target: {
                        value: values.value
                    }
                });
            }}
            thousandSeparator
            isNumericString
            prefix='Rp. '
        />
    );
});

export default PriceInput;
