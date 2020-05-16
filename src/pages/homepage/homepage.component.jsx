import React from 'react';

import HomePageContainer from './homepage.styles';
import Directory from '../../components/directory/directory.component';

const HomePage = () => (
    <HomePageContainer>
        <div className="directory-menu">
            <Directory />
        </div>
    </HomePageContainer>
)

export default HomePage;