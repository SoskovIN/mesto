// Класс отвечает за управление отображением информации о пользователе на странице
export class UserInfo {
  constructor ( { nameSelector, jobSelector }) {
    this._name = nameSelector;
    this._job = jobSelector;
  }

  // Метод возвращает объект с данными пользователей
  getUserInfo() {
    const data = {}
    data.name = this._name.textContent;
    data.job = this._job.textContent;

    return data;
  }

  // Метод принимает новые данные пользователя и добавляет их на страницу
  setUserInfo(nameInfo, jobInfo) {
    this._name.textContent = nameInfo;
    this._job.textContent = jobInfo;
  }

}
