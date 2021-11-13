import React from 'react';
import Header from '../Header/Header';
import { MainLayout, MainTitle, MainSubtitle, MainInputWrapper, MainInput, MainButton } from './styledMain';

const Main = (props) => {

    const openPopupForm = () => {
        props.openPopupForm();
    }

    const openPopupMenu = () => {
        props.openPopupMenu();
    }

    return (
        <MainLayout>
            <Header 
            loggedIn={props.loggedIn} 
            openPopupForm={openPopupForm}
            openPopupMenu={openPopupMenu}
            isPopupMenuOpen={props.isPopupMenuOpen}
            color={props.color} />
            <MainTitle>What's going on in the world?</MainTitle>
            <MainSubtitle>Find the latest news on any topic and save them in your personal account.</MainSubtitle>
            <MainInputWrapper>
                <MainInput
                    type='text'
                    name='search' />
                <MainButton
                    color={'#2F71E5'}
                    width={'27%'}
                    height={'100%'}
                    position={'absolute'}
                    top={'0'}
                    right={'0'}
                    textColor={'#FFF'}
                    hoverColor={'#347EFF'}
                    checkedColor={'#2A65CC'}>
                    Search</MainButton>
            </MainInputWrapper>
        </MainLayout>
    )
}

export default Main;