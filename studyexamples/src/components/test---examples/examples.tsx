import React, {useEffect, useState} from 'react';
import logo from '../../assets/img/logo.svg';
import '../App/App.scss';

interface Props {
    children?: React.ReactNode;
    id?: number;
    className?: string;
}

const Headline: React.FunctionComponent<Props> = ({children}: Props) => {
    return (<h1 className="test">
        {children}
    </h1>);
}

interface Person {
    name: string;
}

async function getPerson (id = 1): Promise<Person> {
    const response = await fetch(`https://swapi.dev/api/people/${id}`, {})

    return response.json();
}

const Hooks = () => {
    const [person, setPerson] = useState<Person | null>(null);

    useEffect(() => {
        getPerson().then(data => setPerson(data));
    })

    return (
        <div>
            {person?.name}
        </div>
    )
}

const CustomInput = (props: React.HTMLProps<HTMLInputElement>) => {
    const [value, setValue] = useState<number>(100);

    const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(parseInt(e.target.value));
    }

    console.log('val >>', value);

    return (
        <input
            onChange={onChange}
            placeholder="Custom input"
            className="my-input"
            {...props}
        />
    )
}

function App() {
    return (
        <div className="App">
            <Headline>test</Headline>
        </div>
    );
}

export default App;
