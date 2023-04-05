class GetServices {
    static async getWord() {
      const response = await fetch("http://itgirlschool.justmakeit.ru/api/words");
      const data = await response.json();
      return data;
    }
  }
  export default GetServices;