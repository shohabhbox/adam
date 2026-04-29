import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';

const useReduxStore = () => {
    const dispatch = useDispatch<AppDispatch>();
    const getState = <K extends keyof RootState>(key: K): RootState[K] =>
        useSelector((state: RootState) => state[key]);

    return { dispatch, getState };
};

export default useReduxStore;