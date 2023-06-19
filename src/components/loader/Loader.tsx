import clsx from 'clsx';
import BarLoader from 'react-spinners/BarLoader';
import GridLoader from 'react-spinners/GridLoader';

interface ILoaderProps {
    isLoading: boolean;
    fullScreen?: boolean;
    typeLoader?: 'GridLoader' | 'PulseLoader';
}

function Loader(props: ILoaderProps) {
    return (
        <div
            className={clsx(
                'flex flex-1  items-center justify-center',
                props.fullScreen && 'h-screen w-screen'
            )}
        >
            {props.typeLoader == 'GridLoader' ? (
                <GridLoader
                    color='#558261'
                    size={50}
                    speedMultiplier={1}
                    loading={props.isLoading}
                />
            ) : (
                <BarLoader
                    color='#558261'
                    speedMultiplier={1}
                    loading={props.isLoading}
                />
            )}
        </div>
    );
}

Loader.defaultProps = {
    fullScreen: true,
    typeLoader: 'GridLoader',
};

export default Loader;
