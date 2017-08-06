import { InventoryManagementSystemPage } from './app.po';

describe('inventory-management-system App', () => {
  let page: InventoryManagementSystemPage;

  beforeEach(() => {
    page = new InventoryManagementSystemPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
