import { EventEmitter } from './EventEmitter';
import { levels } from '../assets/levelsData';
import { customEvents, storageKeys } from '../constants';

export class GameModel extends EventEmitter {
  constructor(storage) {
    super();
    this.storage = storage;
    this.levels = levels;
    this.progress = [];
    this.currentLevel = 1;
    this.currentLevelInfo = null;
    this.animationStatus = false;
    this.getProgressFromStorage();
    this.getCurrentLevelFromStorage();
  }

  start() {
    this.currentLevelInfo = this.levels.find((lev) => lev.level === this.currentLevel);
    this.emit(customEvents.levelLoaded, {
      currentLevel: this.currentLevelInfo, progress: this.progress,
    });
  }

  getProgressFromStorage() {
    const levelProgress = JSON.parse(this.storage.get(storageKeys.progress));
    if (!levelProgress) {
      const notPassedLevels = [];
      for (let i = 1; i < 11; i += 1) {
        notPassedLevels.push({ level: i, isPassed: false });
      }
      this.storage.save(storageKeys.progress, JSON.stringify(notPassedLevels));
      this.progress = [...notPassedLevels];
    } else {
      this.progress = [...levelProgress];
    }
  }

  getCurrentLevelFromStorage() {
    const currentLevel = JSON.parse(this.storage.get(storageKeys.current));
    if (!currentLevel) {
      this.changeLevel(1);
    } else {
      this.changeLevel(currentLevel);
    }
  }

  checkAnswer({ answer, isHint = false }) {
    if (this.animationStatus === true) return;
    let result = false;
    if (answer) {
      const formattedAnswer = answer.toLowerCase().replace(/\s/g, '');
      const formattedrightAnswer = this.currentLevelInfo.answer.toLowerCase().replace(/\s/g, '');
      if (formattedAnswer === formattedrightAnswer) {
        result = true;
        const levelIndex = this.progress.findIndex((item) => item.level === this.currentLevel);
        this.progress[levelIndex].isPassed = true;
        if (this.progress[levelIndex].isHint !== isHint) {
          this.progress[levelIndex].isHint = isHint;
          this.emit(customEvents.hintStatusChanged, {
            currentLevel: this.currentLevelInfo, progress: this.progress,
          });
        }
        this.progress[levelIndex].isHint = isHint;
        this.storage.save(storageKeys.progress, JSON.stringify(this.progress));
      } else {
        result = false;
      }
    }

    this.emit(customEvents.answerChecked, result);
  }

  nextLevel() {
    const isGamePassed = this.isGamePassed();

    if (isGamePassed) {
      const countLevelsPassedWithHint = this.progress.reduce((acc, item) => {
        // eslint-disable-next-line no-param-reassign
        if (item.isHint === true) acc += 1;
        return acc;
      }, 0);

      this.emit(customEvents.gamePassed, countLevelsPassedWithHint);
      return;
    }
    if (this.currentLevel === 10) {
      const notPassedLevelIndex = this.progress.findIndex((el) => el.isPassed === false);
      const notPassedLevel = this.progress[notPassedLevelIndex];
      this.changeLevel(notPassedLevel.level);
      this.start();
    }
    this.currentLevel += 1;
    this.changeLevel(this.currentLevel);
    this.start();
  }

  setCurrentLevelToStorage() {
    this.storage.save(storageKeys.current, JSON.stringify(this.currentLevel));
  }

  isGamePassed() {
    return this.progress.every((level) => level.isPassed === true);
  }

  changeLevel(level) {
    if (this.animationStatus === true) return;

    this.currentLevel = level;
    this.currentLevelInfo = this.levels.find((item) => item.level === level);
    this.setCurrentLevelToStorage();
  }

  anotherLevel(level) {
    if (this.animationStatus === true) return;
    this.changeLevel(level);
    this.start();
  }

  newGame() {
    if (this.animationStatus === true) return;
    this.progress = [];
    this.currentLevel = 1;
    this.currentLevelInfo = null;
    this.storage.remove(storageKeys.progress);
    this.storage.remove(storageKeys.current);
    this.getProgressFromStorage();
    this.getCurrentLevelFromStorage();
    this.start();
  }

  getHint() {
    if (this.animationStatus === true) return;
    this.emit(customEvents.gotHint, this.currentLevelInfo.answer);
  }

  changeAnimationStatus(status) {
    this.animationStatus = status;
  }
}
