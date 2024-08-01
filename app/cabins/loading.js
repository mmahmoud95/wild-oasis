import Spinner from '@/_components/Spinner';

const loading = () => {
    return (
        <div className="grid items-center justify-center">
            <Spinner />
            <h1>loading cabin data....</h1>
        </div>
    );
};
export default loading;
