import React from 'react';
import App from './App';
import Enzyme from 'enzyme';
import { expect } from 'chai';
import Home from '../Home/HomeAsync';
import NotFound from './NotFoundAsync';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { StaticRouter } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  const context = {};
  it('should go to home', () => {
    const wrapper = Enzyme.mount(
      <MuiThemeProvider>
        <StaticRouter location={'/'} context={context}>
          <App />
        </StaticRouter>
      </MuiThemeProvider>);
    expect(wrapper.find(Home)).to.have.lengthOf(1);
    expect(wrapper.find(NotFound)).to.have.lengthOf(0);
  });

  it('should show not found page', () => {
    const wrapper = Enzyme.mount(
      <MuiThemeProvider>
        <StaticRouter location={'/doesnotexist'} context={context}>
          <App />
        </StaticRouter>
      </MuiThemeProvider>);
    expect(wrapper.find(NotFound)).to.have.lengthOf(1);
  });
});
