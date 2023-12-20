import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { FcGoogle } from "react-icons/fc";

const GoogleSignIn = () => {

    const handleGoogleSignIn = () => {
        // googleSignIn(auth)
        //     .then(res => {
        //         // console.log('inside handleGoogleSignin', res);
        //         // save user data on database if data does not exist
        //         const user = res.user;
        //         const userData = {
        //             userName: user?.displayName,
        //             userEmail: user?.email?.toLowerCase(),
        //             userPhoto: user?.photoURL,
        //             userRole: 'normal',
        //             status: 'Unverified',
        //             isSubscribed: 'no'
        //         };
        //         // console.log(userData, 'userdata googlesignin.jsx', user);
        //         // saveUserData on database if user created on firebase successfully
        //         axiosPublic.post('/users', userData)
        //             .then(res => {
        //                 // console.log(res, 'inside handle register, /users put req');
        //             })
        //             .catch(err => {
        //                 // console.log(err, 'inside handle register, /users put req');
        //             })
        //         navigate('/')
        //         toast.success("Google Sign In Successful")

        //     })
        //     .catch(err => {
        //         // console.log('inside handleGoogleSignin', err);
        //         toast.success(err.message)
        //     })
        //     setLoading(false)
    }

    return (
        <Stack direction="row" spacing={10}>
            <Button onClick={""} sx={{ borderRadius: '50px', minWidth: '300px', padding: '8px' }} variant="outlined" startIcon={<FcGoogle className="text-5xl"></FcGoogle>}>
                Sign In with Google
            </Button>
        </Stack>
    );
};

export default GoogleSignIn;