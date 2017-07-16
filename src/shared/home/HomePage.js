import React from 'react';
import format from 'date-fns/format';
import locale from 'date-fns/locale/fr';

const HomePage = () => (
    <div>
        <h1>Homepage</h1>
        <p>{format(new Date(), 'dddd DD MMMM YYYY', { locale })}</p>
    </div>
);

export default HomePage;
