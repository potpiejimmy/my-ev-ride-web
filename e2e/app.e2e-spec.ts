import { MyEvRideWebPage } from './app.po';

describe('my-ev-ride-web App', () => {
  let page: MyEvRideWebPage;

  beforeEach(() => {
    page = new MyEvRideWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
