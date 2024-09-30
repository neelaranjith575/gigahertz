
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => {
    return (
        <>
        <Stack spacing={2} direction="row" alignItems="center" justifyContent={'center'} display={'flex'}>
      <CircularProgress size="3rem" />
    </Stack>
        </>
    )
}
export default Loader;