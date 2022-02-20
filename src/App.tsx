import React, { FC } from 'react';
import AppRouter from './components/AppRouter/AppRouter';
import Header from './components/Header/Header';
import './css/App.css';
import { DATA_LANGUAGES } from './data/Navigation/LanguagesList';
import { allStates} from './store/customSelector';
import { useAppSelector } from './hooks/redux/redux';
import { useLanguageActions } from './hooks/redux/useActions';

const App: FC = () => {
    
    const {language} = useAppSelector(allStates.languageState)
    const {changeLanguage} = useLanguageActions()

    const navData = DATA_LANGUAGES[language]

    console.log(navData)
    
    

    return (
        <div className='page-wrapper'>
            <Header links={navData.header} />
            {/* <Sidebar /> */}

            {/* <ModalWindow /> */}

            <AppRouter/>

            {/* <Footer /> */}
        </div>
    );
};

export default App;
