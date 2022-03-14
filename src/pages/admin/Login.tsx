import React, { FC } from 'react';
import Section from '../../components/Section/Section';
import SectionBody from '../../components/Section/SectionBody';
import Button from '../../components/UI/button/Button';
import Input from '../../components/UI/input/Input';
import { useAuthActions } from '../../hooks/redux/useActions';

const Login: FC = () => {
    const {setIsLogged} = useAuthActions()

    const login = () => {
        setIsLogged(true)
        localStorage.setItem('adminLog', 'true')
    }


    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        // getToken()
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
                            typeText
                            id='login'
                            name='Логин'
                        />
                        <Input
                            typeText
                            id='passwd'
                            name='Пароль'
                        />
                        <Button onClick={login}>
                            Войти
                        </Button>
                    </form>
                </SectionBody>
            </Section>
    );
};

export default Login;