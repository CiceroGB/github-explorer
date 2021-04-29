import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';


export function Dashboard() {
    return (
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Title>
                Explore Github Repositories
            </Title>
            <Form>
                <input placeholder="Insert a repository name" />
                <button type="submit">Search</button>
            </Form>

            <Repositories>
                <a href="test">
                    <img src="https://avatars.githubusercontent.com/u/14824006?v=4"
                        alt="Profile" />

                    <div>
                        <strong>Repository</strong>
                        <p>Description</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>

                <a href="test">
                    <img src="https://avatars.githubusercontent.com/u/14824006?v=4"
                        alt="Profile" />

                    <div>
                        <strong>Repository</strong>
                        <p>Description</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>

            </Repositories>

        </>
    )
}


