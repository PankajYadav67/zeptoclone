import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { initiatePayment, verifyOTP } from '.././Redux/actions/cartActions';
import { useAuth } from '.././Context/AuthContext';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Checkout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { username } = useAuth().userData;
    const [otp, setOtp] = useState('');
    const [paymentStatus, setPaymentStatus] = useState(null);
    const [snackbar, setSnackbar] = useState({ message: '', type: '' });

    const handleInitiatePayment = () => {
        dispatch(initiatePayment())
            .then((response) => {
                console.log('Payment Initiated:', response);
                setPaymentStatus('initiated');
                setSnackbar({ message: 'Payment initiated successfully!', type: 'success' });
            })
            .catch((error) => {
                console.error('Error initiating payment:', error);
                setSnackbar({ message: 'Payment initiation failed. Please try again.', type: 'error' });
            });
    };

    const handleVerifyOTP = () => {
        dispatch(verifyOTP(otp))
            .then(() => {
                console.log('OTP Verified');
                setPaymentStatus('success');
                setSnackbar({ message: 'Payment successful!', type: 'success' });
                navigate(`/${username}/myaccount`);
            })
            .catch((error) => {
                console.error('Error verifying OTP:', error);
                setPaymentStatus('failure');
                setSnackbar({ message: 'OTP verification failed. Please try again.', type: 'error' });
            });
    };

    const closeSnackbar = () => {
        setSnackbar({ message: '', type: '' });
    };

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-2xl font-semibold mb-4">Checkout</h1>

            {/* Payment initiation section */}
            <button onClick={handleInitiatePayment} className="bg-blue-500 text-white px-4 py-2 mb-4">
                Initiate Payment
            </button>

            {/* OTP input section */}
            {paymentStatus === 'initiated' && (
                <div>
                    <h2 className="text-xl font-semibold mb-4">Enter OTP:</h2>
                    <OtpInput
                        value={otp}
                        onChange={(otp) => setOtp(otp)}
                        numInputs={4}
                        separator={<span>-</span>}
                        renderInput={(props) => <input {...props} />}
                    />
                    <button onClick={handleVerifyOTP} className="bg-green-500 text-white px-4 py-2 mt-4">
                        Verify OTP
                    </button>
                </div>
            )}

            {/* Snackbar for success or failure */}
            <Snackbar
                open={snackbar.message !== ''}
                autoHideDuration={3000}
                onClose={closeSnackbar}
            >
                <Alert onClose={closeSnackbar} severity={snackbar.type}>
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </div>
    );
};
