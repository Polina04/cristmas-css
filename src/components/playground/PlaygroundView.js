import { EventEmitter } from '../EventEmitter';
import { create } from '../../utils/create';
import { customEvents } from '../../constants';

export class PlaygroundView extends EventEmitter {
  constructor(model, parent) {
    super();
    this.model = model;
    this.wrapper = null;
    this.parent = parent;
    this.activeItems = [];
    this.playgroundContainer = create('section', {
      parent: this.parent,
      classNames: 'playground',
    });
    this.model.on(customEvents.levelLoaded, ({ currentLevel }) => this.init(currentLevel));
  }

  init(level) {
    this.activeItems = [];
    this.playgroundContainer.innerHTML = '';

    this.wrapper = create('div', {
      parent: this.playgroundContainer,
      classNames: 'playground-wrapper',
      attributes: [['element', 'christmas']],
    });
    this.wrapper.innerHTML = level.playgroundMarkup;
    this.onHoverItems();

    const task = create('h2', { classNames: 'task', child: level.task });
    this.wrapper.after(task);
  }

  onHoverItems() {
    this.playgroundItems = this.getImagesNode();

    this.playgroundItems.forEach((element) => {
      element.addEventListener('mouseenter', (e) => {
        const elDataAttr = e.target.dataset.element;
        const elements = document.querySelectorAll(
          `[data-element="${elDataAttr}"]`,
        );
        const markupPrompt = document.querySelector(
          `[data-element="${elDataAttr}-markup"]`,
        );
        if (markupPrompt) markupPrompt.classList.add('markup-active');
        elements.forEach((el) => {
          el.classList.add('hovered');
        });
      });

      element.addEventListener('mouseleave', (e) => {
        const elDataAttr = e.target.dataset.element;
        const elements = document.querySelectorAll(
          `[data-element="${elDataAttr}"]`,
        );
        const markupPrompt = document.querySelector(
          `[data-element="${elDataAttr}-markup"]`,
        );
        if (markupPrompt)markupPrompt.classList.remove('markup-active');

        elements.forEach((el) => {
          el.classList.remove('hovered');
        });
      });
    });
  }

  getImagesNode() {
    const elementsImg = [];

    this.wrapper.childNodes.forEach((child) => {
      if (child.tagName === 'DIV') {
        elementsImg.push(...child.childNodes);
        child.childNodes.forEach((node) => {
          if (node.classList.contains('active-image')) {
            this.activeItems.push(node);
          }
        });
      }
    });

    return elementsImg;
  }

  response(result) {
    if (result === true) {
      this.activeItems.forEach((item) => item.classList.add('level-passed'));
      this.emit(customEvents.animation, true);
      setTimeout(() => {
        this.emit(customEvents.animation, false);
        this.emit(customEvents.levelPassed);
      }, 2000);
    }
  }

  finish(hintCount) {
    this.playgroundContainer.innerHTML = '';
    create('h2', { parent: this.playgroundContainer, child: 'You won!', classNames: 'finish__title' });
    create('h3', { parent: this.playgroundContainer, child: `Count of levels passed with help: ${hintCount}`, classNames: 'finish__sub-title' });
  }
}
