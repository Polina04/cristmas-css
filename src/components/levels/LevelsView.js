import { EventEmitter } from '../EventEmitter';
import { create } from '../../utils/create';
import { customEvents } from '../../constants';

export class LevelsView extends EventEmitter {
  constructor(model, parent) {
    super();
    this.model = model;
    this.parent = parent;
    this.currentLevel = null;
    this.levelItems = [];
    this.levelsSection = create('section', { parent: this.parent, classNames: 'levels' });
  }

  render({ currentLevel, progress }) {
    if (this.overlay) this.overlay.remove();
    if (this.burgerMenu) this.burgerMenu.remove();
    this.levelsSection.innerHTML = '';
    this.currentLevel = currentLevel.level;

    create('p', { parent: this.levelsSection, classNames: 'levels__current', child: `Level ${this.currentLevel}` });

    this.levelsList = create('ul', { parent: this.levelsSection, classNames: 'levels__list' });
    progress.forEach((item) => {
      let classes = item.isPassed ? 'levels__item levels__item--passed' : 'levels__item';
      if (item.isHint) classes += ' level-hint';
      if (item.level === this.currentLevel) {
        classes = `${classes} current`;
      }
      const levelItem = create('li', {
        parent: this.levelsList,
        classNames: classes,
        child: [
          create('p', { classNames: 'levels__item-text', child: `${item.level} level` }),
        ],
      });
      this.levelItems.push({ value: item.level, element: levelItem });
      levelItem.addEventListener('click', () => this.goToLevel(item.level));
    });
    const buttonsWrap = create('div', { parent: this.levelsSection, classNames: 'buttons-wrapper' });
    this.createBurgerButton(buttonsWrap);
    this.createHintButton(buttonsWrap);
    this.createResetProgressButton(buttonsWrap);
  }

  createResetProgressButton(parentDiv) {
    this.resetButton = create('button', {
      parent: parentDiv, classNames: 'reset-progress', attributes: [['type', 'button']], child: 'reset game',
    });
    this.resetButton.addEventListener('click', () => this.emit(customEvents.resetProgress));
  }

  createHintButton(parentDiv) {
    this.hintButton = create('button', {
      parent: parentDiv, classNames: 'hint', attributes: [['type', 'button']], child: 'help',
    });
    this.hintButton.addEventListener('click', () => this.emit(customEvents.hint));
  }

  createBurgerButton(parentDiv) {
    this.burgerMenu = create('button', { parent: parentDiv, classNames: 'levels__burger', attributes: [['type', 'button']] });
    this.burgerMenu.addEventListener('click', () => {
      this.burgerMenu.classList.toggle('rotated');
      this.levelsList.classList.toggle('levels__list-open');
      this.parent.classList.toggle('hidden');
    });
  }

  goToLevel(level) {
    this.emit(customEvents.changeLevel, level);
  }
}
