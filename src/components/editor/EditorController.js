import { EventEmitter } from '../EventEmitter';
import { customEvents } from '../../constants';

export class EditorController extends EventEmitter {
  constructor(view, model) {
    super();
    this.view = view;
    this.model = model;
    this.model.on(customEvents.levelLoaded, (options) => this.run(options.currentLevel));
    this.model.on(customEvents.answerChecked, (result) => this.returnResult(result));
    this.model.on(customEvents.gotHint, (hint) => this.gotHint(hint));

    this.view.on(customEvents.cssSubmitted, (answer) => this.getAnswer(answer));
  }

  run(currentLevel) {
    this.view.init();
    this.view.renderMarkup(currentLevel);
  }

  getAnswer(answer) {
    this.model.checkAnswer(answer);
  }

  returnResult(result) {
    this.view.response(result);
  }

  gotHint(answer) {
    this.view.printAnswer({ answer, isHint: true });
  }
}
