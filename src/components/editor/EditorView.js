import CodeMirror from 'codemirror/lib/codemirror';
import 'codemirror/theme/cobalt.css';
import 'codemirror/mode/css/css';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/addon/edit/matchtags';
import { EventEmitter } from '../EventEmitter';
import { create } from '../../utils/create';
import { customEvents } from '../../constants';

export class EditorView extends EventEmitter {
  constructor(model, parent) {
    super();
    this.model = model;
    this.parent = parent;
    this.editor = create('section', { parent: this.parent, classNames: 'editor' });
    this.parent.addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {
        const tags = this.codeEditorCSS.getValue();
        this.emit(customEvents.cssSubmitted, { answer: tags });
      }
    });
  }

  init() {
    this.editor.innerHTML = '';

    this.cssEditorWrapper = create('div', { classNames: 'editor__css-wrapper', parent: this.editor });
    this.codeEditorCSS = CodeMirror(this.cssEditorWrapper, {
      tabSize: 4,
      mode: 'text/css',
      lineNumbers: true,
      theme: 'cobalt',
      line: true,
      autofocus: true,
    });
    this.viewerHTML = create('div', { parent: this.editor, classNames: 'html-viewer' });

    const submit = create('button', { parent: this.cssEditorWrapper, classNames: 'editor__submit', child: 'enter' });
    submit.addEventListener('click', () => {
      const tags = this.codeEditorCSS.getValue();
      this.emit(customEvents.cssSubmitted, { answer: tags, isHint: false });
    });
  }

  renderMarkup(level) {
    this.viewerHTML.innerHTML = level.markup;
    const HTMLElements = this.viewerHTML.querySelectorAll('div');

    HTMLElements.forEach((element) => {
      element.addEventListener('mouseenter', (e) => {
        const elDataAttr = e.target.dataset.element;

        const elements = document.querySelectorAll(`[data-element="${elDataAttr}"]`);
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
        const elements = document.querySelectorAll(`[data-element="${elDataAttr}"]`);
        const markupPrompt = document.querySelector(
          `[data-element="${elDataAttr}-markup"]`,
        );
        if (markupPrompt) markupPrompt.classList.remove('markup-active');
        elements.forEach((el) => {
          el.classList.remove('hovered');
        });
      });
    });
  }

  response(result) {
    if (!result) {
      this.codeEditorCSS.setValue('');
      this.cssEditorWrapper.classList.add('error');
      setTimeout(() => {
        this.cssEditorWrapper.classList.remove('error');
      }, 2000);
    }
  }

  printAnswer({ answer, isHint }) {
    let i = 0;
    const speed = 70;
    const codeEditor = this.codeEditorCSS;
    function printer() {
      if (i < answer.length) {
        const prev = codeEditor.getValue();
        codeEditor.setValue(prev + answer[i]);
        i += 1;
        setTimeout(printer, speed);
      }
    }
    printer();
    setTimeout(() => {
      this.emit(customEvents.cssSubmitted, { answer, isHint });
    }, speed * answer.length);
  }
}
