import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Snackbar = ({ open, autoHideDuration, onClose, color, anchorOrigin, message }) => {
    const [snackbarOpen, setSnackbarOpen] = useState(open);

    const handleClose = (_, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
        onClose();
    };

    const snackbarClasses = classNames(
        'fixed',
        'top-0',
        'left-1/2',
        '-translate-x-1/2',
        'px-4',
        'py-2',
        'rounded',
        {
            'bg-green-500': color === 'success',
            'bg-red-500': color === 'error',
            'bg-blue-500': color === 'info',
            'bg-yellow-500': color === 'warning',
        }
    );

    return (
        <div
            className={snackbarClasses}
            style={{ transform: snackbarOpen ? 'translateY(0)' : 'translateY(-100px)', transition: 'transform 0.3s ease-in-out' }}
        >
            {message}
            <button className="absolute top-0 right-0 p-2" onClick={handleClose}>
                &times;
            </button>
        </div>
    );
};

Snackbar.propTypes = {
    open: PropTypes.bool.isRequired,
    autoHideDuration: PropTypes.number.isRequired,
    onClose: PropTypes.func.isRequired,
    color: PropTypes.oneOf(['success', 'error', 'info', 'warning']).isRequired,
    anchorOrigin: PropTypes.object.isRequired,
    message: PropTypes.string.isRequired,
};


