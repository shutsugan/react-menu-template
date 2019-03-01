import Loadable from 'react-loadable';
import Loading from '../components/Loading';

export default (component, delay) => Loadable({
    loader: _ => import(`../${component}`),
    loading: Loading,
    delay
});