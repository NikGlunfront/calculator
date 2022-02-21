import React, { FC } from 'react';
import AppRouter from './components/AppRouter/AppRouter';
import Header from './components/Header/Header';
import './css/App.css';
import { DATA_LANGUAGES } from './data/Navigation/LanguagesList';
import { allStates} from './store/customSelector';
import { useAppSelector } from './hooks/redux/redux';
import Sidebar from './components/Sidebar/Sidebar';
import { DATA_SIDEBAR } from './data/Sidebar';

const App: FC = () => {
    const {language} = useAppSelector(allStates.languageState)
    const navData = DATA_LANGUAGES;  
    const sideBarUiData = DATA_SIDEBAR;

    return (
        <div className='page-wrapper'>
            <Header links={navData[language].header} />
            <Sidebar 
                sidebarDataUi={sideBarUiData}
                langsUi={navData} 
            />

            {/* <ModalWindow /> */}
            <main className="main">
                <AppRouter/>
            </main>

            {/* <Footer /> */}
        </div>
    );
};

export default App;
