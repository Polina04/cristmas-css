import './styles/styles.css';
import './styles/styles.scss';
import { Storage } from './services/storage';
import { GameModel as Model } from './components/GameModel';
import { PlaygroundController } from './components/playground/PlaygroundController';
import { PlaygroundView } from './components/playground/PlaygroundView';
import { LevelsView } from './components/levels/LevelsView';
import { LevelsController } from './components/levels/LevelsController';
import { EditorView } from './components/editor/EditorView';
import { EditorController } from './components/editor/EditorController';
import { Footer } from './components/footer/FooterView';

const { body } = document;

const storage = new Storage(localStorage);
const model = new Model(storage);

const playgroundView = new PlaygroundView(model, body);
const playground = new PlaygroundController(playgroundView, model);

const levelsView = new LevelsView(model, body);
const levels = new LevelsController(levelsView, model);

const editorView = new EditorView(model, body);
const editor = new EditorController(editorView, model);

const footer = new Footer(model, body);

model.start();
