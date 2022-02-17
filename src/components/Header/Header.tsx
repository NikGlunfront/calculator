import React, { FC } from 'react';
import { IHeaderLink } from '../../modules/IHeaderLink';
import Container from '../Container/Container';
import classes from './Header.module.css';
import HeaderLink from './HeaderLink';

interface HeaderProps {
    links: [IHeaderLink]
}

const Header: FC<HeaderProps> = ({links}: HeaderProps) => {

    // const {changeModalVisibility} = useActions()

    // const getReviews = async () => {
    //     const response = await axios.get('http://94.137.242.252:7777/api/TextBlocks/GetTextBlocks', {
    //         params : {
    //             tabName: "talents"
    //         }
    //     })
    //     console.log(response.data)
    //     return response.data;
    // }

    // const openReviewModal = () => {
    //     callback.preventDefault();
    //     // changeModalVisibility(true)
    // }


    // const sendReview = (e) => {
    //     e.preventDefault()
    //     // getReviews()
    // }

    return (
        <header className={classes.Header}>
            <Container>
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>

                    {links.map(link => 
                        <HeaderLink key={link.id}>
                            {link.text}
                        </HeaderLink>    
                    )}
                    {/* <a 
                    href="/test" 
                    // onClick={openReviewModal}
                    >
                        Оставить отзыв (Анонимно)
                    </a>
                    <a 
                    href="/test" 
                    // onClick={sendReview}
                    >
                        Выйти
                    </a> */}
                </div>
            </Container>
        </header>
    );
};

export default Header;