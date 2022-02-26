import React, { FC, useState } from 'react';
import { getToken } from '../../API/AdminService';
import Section from '../../components/Section/Section';
import SectionBody from '../../components/Section/SectionBody';
import Button from '../../components/UI/button/Button';
import Input from '../../components/UI/input/Input';
import { useAuthActions } from '../../hooks/redux/useActions';

const Login: FC = () => {
    const [inputName, setInputName] = useState<string>('Логин');
    const [inputPasswd, setInputPasswd] = useState<string>('Пароль');
    const {setIsLogged} = useAuthActions()

    const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputName(e.target.value)
    }

    const login = () => {
        setIsLogged(true)
        localStorage.setItem('adminLog', 'true')
    }

    const onPasswdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputPasswd(e.target.value)
    }

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        getToken()
    }

    return (
        <Section>
                <SectionBody>
                    <form
                        style={{display: 'flex', flexDirection: 'column'}} 
                        onSubmit={handleSubmit} 
                        action="submit"
                    >
                        <Input
                            value={inputName}
                            onChange={onNameChange}
                        />
                        <Input
                            value={inputPasswd}
                            onChange={onPasswdChange}
                        />
                        <Button onClick={login}>
                            Войти
                        </Button>
                    </form>
                    {/* <button onClick={() => {getAllTabs()}}>ЗАРЕГИСТРИРОВАТЬ</button> */}
                </SectionBody>
            </Section>
    );
};

export default Login;