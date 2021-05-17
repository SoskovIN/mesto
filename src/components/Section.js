export class Section {
  constructor ( {items, renderer}, container) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = container;
  }

   // Публичный метод отвечает за отрисовку всех элементов
   renderItems() {
    // Перебрать массив _renderedItems
    this._renderedItems.forEach((item) => {
      this._renderer(item); // вызов renderer, передав item
    });
  }

  // Публичный метод принимает DOM-элемент и добавляет его в контейнер
  addItem(element) {
    this._container.prepend(element);
  }

}
