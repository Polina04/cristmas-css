import { EventEmitter } from '../EventEmitter';
import { create } from '../../utils/create';
import { customEvents } from '../../constants';

export class Footer extends EventEmitter {
  constructor(model, parent) {
    super();
    this.parent = parent;
    this.model = model;

    this.model.on(customEvents.levelLoaded, this.render.bind(this));
  }

  render() {
    if (!this.footer) {
      this.footer = create('footer', { parent: this.parent, classNames: 'footer' });
      create('a', { parent: this.footer, classNames: 'footer__rs-link', attributes: [['href', 'https://rs.school/js/'], ['target', '_blank']] });
      create('div', { parent: this.footer, classNames: 'footer__author', child: [create('a', { classNames: 'footer__author-link', child: 'Polina04', attributes: [['href', 'https://github.com/Polina04'], ['target', '_blank']] }), create('p', { classNames: 'footer__year', child: 'December 2020' })] });
    }
  }
}
