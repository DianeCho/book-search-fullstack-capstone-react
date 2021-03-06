import React from 'react';
import {shallow, mount, render} from 'enzyme';

import MainPage from '../js/components/main-page';
import LoginPage from '../js/components/login-page';
import SearchPage from '../js/components/search-page';
import BooksPage from '../js/components/books-page';
import FooterPage from '../js/components/footer-page';
import NewuserPage from '../js/components/newuser-page';

describe('<LoginPage />', () => {
    it('Renders without crashing', () => {
        shallow(<LoginPage />);
    });
});

describe('<LoginPage />', () => {
        it('Renders without crashing', () => {
            shallow(<LoginPage />);
    });
});
describe('<MainPage />', () => {
        it('Renders without crashing', () => {
            shallow(<MainPage />);
        });
});
describe('<SearchPage />', () => {
        it('Renders without crashing', () => {
            shallow(<SearchPage />);
        });
});
describe('<BooksPage />', () => {
        it('Renders without crashing', () => {
            shallow(<BooksPage />);
        });
});
describe('<FooterPage />', () => {
        it('Renders without crashing', () => {
            shallow(<FooterPage />);
        });
});
describe('<NewuserPage />', () => {
        it('Renders without crashing', () => {
            shallow(<NewuserPage />);
        });
});
