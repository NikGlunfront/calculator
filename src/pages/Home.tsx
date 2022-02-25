import React, { FC, useState } from 'react';
import { getAllTabs, getToken } from '../API/AdminService';
import Section from '../components/Section/Section';
import SectionBody from '../components/Section/SectionBody';
import SectionSubtitle from '../components/Section/SectionSubtitle';
import SectionTitle from '../components/Section/SectionTitle';

const Home: FC = () => {

    const [inputName, setInputName] = useState<string>('');
    const [inputPasswd, setInputPasswd] = useState<string>('');

    const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputName(e.target.value)
    }



    const onPasswdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputPasswd(e.target.value)
    }

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        getToken()
    }

    return (
        <main className="main">
            <Section isFirst={true}>
                <SectionTitle>Home page</SectionTitle>
                <SectionSubtitle>Home page subtitle here!</SectionSubtitle>
            </Section>
            <Section>
                <SectionBody>
                    <form
                        style={{display: 'flex', flexDirection: 'column'}} 
                        onSubmit={handleSubmit} 
                        action="submit"
                    >
                        <input 
                            onChange={onNameChange}
                            name='login' 
                            style={{marginBottom: '20px', width: '200px', height: '50px', padding: '10px'}} 
                            type="text" 
                            placeholder='Логин' 
                            autoComplete='off'
                        />
                        <input 
                            onChange={onPasswdChange}
                            style={{marginBottom: '20px', width: '200px', height: '50px', padding: '10px'}}
                            name='passwd' 
                            type="text" 
                            placeholder='Пароль' 
                            autoComplete='off'
                        />

                        <button style={{padding: '10px', cursor: 'pointer'}}>ВОЙТИ</button>
                    </form>
                    <button onClick={() => {getAllTabs()}}>ЗАРЕГИСТРИРОВАТЬ</button>
                </SectionBody>
            </Section>
        </main>
    );
};

export default Home;