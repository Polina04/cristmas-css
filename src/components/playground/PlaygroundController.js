import { EventEmitter } from '../EventEmitter';
import { customEvents } from '../../constants';

export class PlaygroundController extends EventEmitter {
  constructor(view, model) {
    super();
    this.view = view;
    this.model = model;
    this.model.on(customEvents.answerChecked, (result) => this.returnResult(result));
    this.model.on(customEvents.gamePassed, (hintCount) => this.finish(hintCount));
    this.view.on(customEvents.levelPassed, () => this.levelPassed());
    this.view.on(customEvents.animation, (status) => this.changeAnimationStatus(status));
  }

  run() {
    this.model.start();
  }

  returnResult(result) {
    this.view.response(result);
  }

  levelPassed() {
    this.model.nextLevel();
  }

  finish(hintCount) {
    this.view.finish(hintCount);
  }

  changeAnimationStatus(status) {
    this.model.changeAnimationStatus(status);
  }
}
