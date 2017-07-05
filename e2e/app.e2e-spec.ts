import { AngularUdemyAppPage } from './app.po';

describe('angular-udemy-app App', () => {
  let page: AngularUdemyAppPage;

  beforeEach(() => {
    page = new AngularUdemyAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
