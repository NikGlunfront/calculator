import React, { FC } from 'react';
import AppRouter from './components/AppRouter/AppRouter';
import Header from './components/Header/Header';
import './css/App.css';
import { DATA_LANGUAGES } from './data/Navigation/LanguagesList';

const App: FC = () => {

    // const navigationData = DATA_LANGUAGES[language]
    
    return (
        <div className='page-wrapper'>
            <Header links={[{text: "Оставить отзыв (анонимно)", id: 'review'}]} />
            
            {/* <Sidebar /> */}

            {/* <ModalWindow /> */}

            <AppRouter/>

            {/* <Footer /> */}
        </div>
    );
};

export default App;
