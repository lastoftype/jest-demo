export class ApiDemo {
  static async get(): Promise<any> {
    return await new Promise(resolve => {
      resolve("asd");
    });
  }
}
