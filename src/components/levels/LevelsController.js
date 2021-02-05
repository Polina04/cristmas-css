import { EventEmitter } from '../EventEmitter';
import { customEvents } from '../../constants';

export class LevelsController extends EventEmitter {
  constructor(view, model) {
    super();
    this.view = view;
    this.model = model;

    this.model.on(customEvents.levelLoaded, (options) => { this.init(options); });
    this.model.on(customEvents.levelChanged, (level) => { this.changeCurrent(level); });
    this.model.on(customEvents.hintStatusChanged, (options) => { this.init(options); });
    this.view.on(customEvents.changeLevel, (level) => this.changeLevel(level));
    this.view.on(customEvents.resetProgress, () => this.reset());
    this.view.on(customEvents.hint, () => this.getHint());
  }

  init(options) {
    this.view.render(options);
  }

  changeLevel(level) {
    this.model.anotherLevel(level);
  }

  reset() {
    this.model.newGame();
  }

  getHint() {
    this.model.getHint();
  }
}
