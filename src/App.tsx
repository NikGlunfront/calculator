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
    
    const buttonClick = () => {
        changeLanguage('eng')
    }

    return (
        <div className='page-wrapper'>
            <Header links={[{text: "Оставить отзыв (анонимно)", id: 'review'}]} />
            <div>{language}</div>
            <button onClick={buttonClick}>CLICK</button>
            {/* <Sidebar /> */}

            {/* <ModalWindow /> */}

            <AppRouter/>

            {/* <Footer /> */}
        </div>
    );
};

export default App;
