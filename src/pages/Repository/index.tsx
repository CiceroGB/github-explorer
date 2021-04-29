import { useRouteMatch } from 'react-router-dom';
import { Header } from './styles';

interface RepositoryParams {
    repository: string;
}


export function Repository() {
    const { params } = useRouteMatch<RepositoryParams>();

    return (
        <Header>
            header {params.repository}
        </Header>
    )
}