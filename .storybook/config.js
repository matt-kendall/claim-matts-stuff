import { configure } from '@kadira/storybook';
import '../src/index.css';
import './config.css';

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
