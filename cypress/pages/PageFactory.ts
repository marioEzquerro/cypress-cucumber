import LoginPage from "./LoginPage";

type PageClass<T> = { new (): T };

export class PageFactory {
  private static instances = new Map<string, unknown>();

  private static getPageInstance<T>(pageClass: PageClass<T>): T {
    const className = pageClass.name;
    if (!this.instances.has(className)) {
      this.instances.set(className, new pageClass());
    }
    return this.instances.get(className) as T;
  }

  // Repeat this syntax for future pages
  public static getLoginPage(): LoginPage {
    return this.getPageInstance(LoginPage);
  }

}
