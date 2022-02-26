import React, { FC, useEffect } from 'react';
import AppRouter from './components/AppRouter/AppRouter';
import Header from './components/Header/Header';
import './css/App.css';
import { DATA_LANGUAGES } from './data/Navigation/LanguagesList';
import { allStates} from './store/customSelector';
import { useAppSelector } from './hooks/redux/redux';
import Sidebar from './components/Sidebar/Sidebar';
import { DATA_SIDEBAR } from './data/Sidebar';
import Footer from './components/Footer/Footer';
import { useAuthActions } from './hooks/redux/useActions';
import AdminRouter from './components/AppRouter/AdminRouter';

const App: FC = () => {
    const {language} = useAppSelector(allStates.languageState)
    const {auth} = useAppSelector(allStates.authState)
    const {setIsLogged} = useAuthActions()
    const navData = DATA_LANGUAGES;  
    const sideBarUiData = DATA_SIDEBAR;

    useEffect(() => {
        // if (localStorage.getItem('token')) {
        //     let token = localStorage.getItem('token')
        //     console.log(`Токен уже есть - ${token}`)
        //     setIsLogged(true)
        // } else {
        //     setIsLogged(false)
        // }
        localStorage.getItem('adminLog') === 'true' && setIsLogged(true)
        
    }, [auth])

    return (
        auth
            ?
            <div className='page-wrapper page-wrapper_admin'>
                <Header />
                <AdminRouter/>
            </div>
            :
            <div className='page-wrapper'>
                <Header links={navData[language].header} />
                <Sidebar 
                    sidebarDataUi={sideBarUiData}
                    langsUi={navData} 
                />
                {/* <ModalWindow /> */}
                <AppRouter/>
                <Footer />
            </div>

        
    );
};

export default App;
