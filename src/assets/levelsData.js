import snowman from './images/001-snowman.png';
import gift from './images/003-gift.png';
import cane from './images/045-candy cane.png';
import candy from './images/043-candy.png';
import snowBall from './images/027-snow ball.png';
import snowEmptyBall from './images/027-snow-empty-ball.png';
import tree from './images/015-christmas tree.png';
import tree2 from './images/013-christmas tree.png';
import mitten from './images/019-mitten.png';
import deer from './images/035-reindeer.png';
import star from './images/014-star.png';
import angel from './images/050-angel.png';
import giftBox from './images/029-gift box.png';

export const levels = [
  { // *
    level: 1,
    playgroundMarkup: `<div class="image-wrapper"><img class="active-image" src="${snowman}" alt='snowman' data-element="snowman-first"><div class="markup-prompt" data-element="snowman-first-markup">&lt; snowman /&gt;</div></div>
    <div class="image-wrapper"><img class="active-image" src="${gift}" alt='gift' data-element="gift"><div class="markup-prompt" data-element="gift-markup">&lt; gift /&gt;</div></div>
    <div class="image-wrapper" ><img class="active-image" src="${snowman}" alt='snowman' data-element="snowman-second"><div class="markup-prompt" data-element="snowman-second-markup">&lt; snowman /&gt;</div></div>`,
    task: 'Select all elements',
    markup: '<div data-element="snowman-first"><span>&lt; snowman /&gt;</span></div><div data-element="gift"><span>&lt; gift /&gt;</span></div><div data-element="snowman-second"><span>&lt; snowman /&gt;</span></div>',
    answer: '*',
  },
  { // id
    level: 2,
    playgroundMarkup: `<div class="image-wrapper"><img  src="${candy}" alt='candy' data-element="candy-first"><div class="markup-prompt" data-element="candy-first-markup">&lt;candy&gt; &lt;candy/&gt;</div></div>
    <div class="image-wrapper"><img src="${candy}" alt='candy' data-element="candy-second"><div class="markup-prompt" data-element="candy-second-markup">&lt;candy&gt; &lt;candy/&gt;</div></div>
    <div class="image-wrapper"><img class="active-image" src="${cane}" alt='candy cane' data-element="cane"><div class="markup-prompt" data-element="cane-markup">&lt;candy id="cane"&gt; &lt;candy/&gt;</div></div>`,
    task: 'Select the candy cane',
    markup: '<div data-element="candy-first"><span>&lt;candy&gt; &lt;candy/&gt;</span></div> <div data-element="candy-second"><span>&lt;candy&gt; &lt;candy/&gt;</span></div> <div data-element="cane"><span>&lt;candy id="cane"&gt; &lt;candy/&gt;</span></div>',
    answer: '#cane',

  },
  { // class
    level: 3,
    playgroundMarkup: `<div class="image-wrapper"><img  src="${snowBall}" alt='snow ball' data-element="ball-first"><div class="markup-prompt" data-element="ball-first-markup">&lt;ball&gt; &lt;ball/&gt;</div></div>
    <div class="image-wrapper"><img src="${snowEmptyBall}" alt='snow ball' data-element="ball-second"><div class="markup-prompt" data-element="ball-second-markup">&lt;ball&gt;&lt;ball/&gt;</div><img class="active-image sub-image" src="${tree}" alt='christmas tree' data-element="tree"><div class="markup-prompt markup-prompt_sub" data-element="tree-markup">&lt;tree class="decorated-tree"&gt; &lt;tree/&gt;</div></div>
    <div class="image-wrapper"><img src="${snowBall}" alt='snow ball' data-element="ball-third"><div class="markup-prompt" data-element="ball-third-markup">&lt;ball&gt; &lt;ball/&gt;</div></div>`,
    task: 'Select the decorated christmas tree',
    markup: '<div data-element="ball-first"><span>&lt;ball&gt; &lt;ball/&gt;</span></div><div data-element="ball-second"><span>&lt;ball&gt;</span><div data-element="tree"><span>&lt;tree class="decorated-tree"&gt; &lt;tree/&gt;</span></div><span>&lt;ball/&gt;</span></div><div data-element="ball-third"><span>&lt;ball&gt; &lt;ball/&gt;</span></div>',
    answer: '.decorated-tree',
  },
  { // tag
    level: 4,
    playgroundMarkup: `<div class="image-wrapper"><img class="active-image" src="${deer}" alt='deer' data-element="deer-first"><div class="markup-prompt" data-element="deer-first-markup">&lt; deer /&gt;</div></div>
    <div class="image-wrapper"><img src="${mitten}" alt='mitten' data-element="mitten"><div class="markup-prompt" data-element="mitten-markup">&lt; mitten /&gt;</div></div>
    <div class="image-wrapper"><img class="active-image" src="${deer}" alt='deer' data-element="deer-second"><div class="markup-prompt" data-element="deer-second-markup">&lt; deer /&gt;</div></div>`,
    task: 'Select deers',
    markup: '<div data-element="deer-first"><span>&lt; deer /&gt;</span></div><div data-element="mitten"><span>&lt; mitten /&gt;</span></div><div data-element="deer-second"><span>&lt; deer /&gt;</span></div>',
    answer: 'deer',
  },
  { // tag tag
    level: 5,
    playgroundMarkup: `<div class="image-wrapper"><img  src="${snowman}" alt='snowman' data-element="snowman"><div class="markup-prompt" data-element="snowman-markup">&lt;snowman&gt; &lt;snowman/&gt;</div></div>
    <div class="image-wrapper"><img src="${snowEmptyBall}" alt='snow ball' data-element="ball"><div class="markup-prompt" data-element="ball-markup">&lt;ball&gt;&lt;ball/&gt;</div><img class="active-image sub-image" src="${tree}" alt='christmas tree' data-element="tree-first"><div class="markup-prompt markup-prompt_sub" data-element="tree-first-markup">&lt;tree&gt; &lt;tree/&gt;</div></div>
    <div class="image-wrapper"><img src="${tree}" alt='christmas tree' data-element="tree-second"><div class="markup-prompt" data-element="tree-second-markup">&lt;tree&gt; &lt;tree/&gt;</div></div>`,
    task: 'Select christmas tree inside the ball',
    markup: '<div data-element="snowman"><span>&lt;snowman&gt; &lt;snowman/&gt;</span></div><div data-element="ball"><span>&lt;ball&gt;</span><div data-element="tree-first"><span>&lt;tree&gt; &lt;tree/&gt;</span></div><span>&lt;ball/&gt;</span></div><div data-element="tree-second"><span>&lt;tree&gt; &lt;tree/&gt;</span></div>',
    answer: 'ball tree',
  },
  { // tag *
    level: 6,
    playgroundMarkup: `<div class="image-wrapper"><img class="active-image" src="${candy}" alt='candy' data-element="candy"><div class="markup-prompt" data-element="candy-markup">&lt; candy /&gt;</div></div>
    <div class="image-wrapper"><img class="active-image" src="${tree}" alt='tree' data-element="tree"><div class="markup-prompt" data-element="tree-markup">&lt; tree /&gt;</div></div>
    <div class="image-wrapper"><img class="active-image" src="${deer}" alt='deer' data-element="deer"><div class="markup-prompt" data-element="deer-markup">&lt; deer /&gt;</div></div>
    <div class="image-wrapper"><img class="active-image" src="${mitten}" alt='mitten' data-element="mitten"><div class="markup-prompt" data-element="mitten-markup">&lt; mitten /&gt;</div></div>
    <div class="image-wrapper"><img class="active-image" src="${snowman}" alt='snowman' data-element="snowman"><div class="markup-prompt" data-element="snowman-markup">&lt; snowman /&gt;</div></div>
    <div data-element="christmas-markup" class="markup-prompt"><span data-element="christmas-markup" >&lt; christmas &gt;&lt; christmas /&gt;</span></div>`,
    task: 'Select all christmas elements inside christmas box',
    markup: '<div data-element="christmas"><span>&lt; christmas &gt;</span><div data-element="candy"><span>&lt; candy /&gt;</span></div><div data-element="tree"><span>&lt; tree /&gt;</span></div><div data-element="deer"><span>&lt; deer /&gt;</span></div><div data-element="mitten"><span>&lt; mitten /&gt;</span></div><div data-element="snowman"><span>&lt; snowman /&gt;</span></div><span>&lt;/ christmas &gt;</span></div>',
    answer: 'christmas *',
  },
  { // tag+tag
    level: 7,
    playgroundMarkup: `<div class="image-wrapper"><img src="${snowEmptyBall}" alt='snow ball' data-element="ball"><div class="markup-prompt" data-element="ball-markup">&lt; ball &gt;&lt; ball /&gt;</div><img class="sub-image" src="${tree}" alt='christmas tree' data-element="tree-first"><div class="markup-prompt markup-prompt_sub" data-element="tree-first-markup">&lt; tree &gt; &lt; tree /&gt;</div></div>
    <div class="image-wrapper"><img  src="${angel}" alt='angel' data-element="angel-first"><div class="markup-prompt" data-element="angel-first-markup">&lt; angel /&gt;</div></div>
    <div class="image-wrapper"><img class="active-image" src="${tree}" alt='tree' data-element="tree-second"><div class="markup-prompt" data-element="tree-second-markup">&lt; tree /&gt;</div></div>
    <div class="image-wrapper"><img src="${angel}" alt='angel' data-element="angel-second"><div class="markup-prompt" data-element="angel-second-markup">&lt; angel /&gt;</div></div>
    <div class="image-wrapper"><img class="active-image" src="${tree}" alt='tree' data-element="tree-third"><div class="markup-prompt" data-element="tree-third-markup">&lt; tree /&gt;</div></div>
    <div class="image-wrapper"><img src="${tree}" alt='tree' data-element="tree-fourth"><div class="markup-prompt" data-element="tree-fourth-markup">&lt; tree /&gt;</div></div>`,
    task: 'Select every christmas tree that\'s next to an angel',
    markup: '<div data-element="ball"><span>&lt; ball &gt;</span><div data-element="tree-first"><span>&lt; tree &gt; &lt; tree /&gt;</span></div><span>&lt; ball /&gt;</span></div><div data-element="angel-first"><span>&lt; angel /&gt;</span></div><div data-element="tree-second"><span>&lt; tree /&gt;</span></div><div data-element="angel-second"><span>&lt; angel /&gt;</span></div><div data-element="tree-third"><span>&lt; tree /&gt;</span></div><div data-element="tree-fourth"><span>&lt; tree /&gt;</span></div>',
    answer: 'angel + tree',
  },
  { // nth-child
    level: 8,
    playgroundMarkup: `<div class="image-wrapper"><img src="${gift}" alt='gift' data-element="gift-first"><div class="markup-prompt" data-element="gift-first-markup">&lt; gift /&gt;</div></div>
    <div class="image-wrapper"><img src="${gift}" alt='gift' data-element="gift-second"><div class="markup-prompt" data-element="gift-second-markup">&lt; gift /&gt;</div></div>
    <div class="image-wrapper"><img class="active-image" src="${gift}" alt='gift' data-element="gift-third"><div class="markup-prompt" data-element="gift-third-markup">&lt; gift /&gt;</div></div>
    <div class="image-wrapper"><img src="${giftBox}" alt='gift box' data-element="gift-fourth"><div class="markup-prompt" data-element="gift-fourth-markup">&lt; gift id="box"/&gt;</div></div>`,
    task: 'Select the 3rd gift',
    markup: '<div data-element="gift-first"><span>&lt; gift /&gt;</span></div><div data-element="gift-second"><span>&lt; gift /&gt;</span></div><div data-element="gift-third"><span>&lt; gift /&gt;</span></div><div data-element="gift-fourth"><span>&lt; gift id="box"/&gt;</span></div>',
    answer: 'gift:nth-child(3)',
  },
  { // tag>tag
    level: 9,
    playgroundMarkup: `<div class="image-wrapper"><img src="${snowEmptyBall}" alt='snow ball' data-element="ball-first"><div class="markup-prompt" data-element="ball-first-markup">&lt; ball &gt &lt; ball /&gt;</div><img class="sub-image sub-image_small" src="${tree2}" alt='christmas tree' data-element="tree"><div class="markup-prompt markup-prompt_sub-higher" data-element="tree-markup">&lt; tree &gt;&lt; tree /&gt;</div><img class="sub-image sub-image_star" src="${star}" alt='star' data-element="star-first"><div class="markup-prompt markup-prompt_sub-highest" data-element="star-first-markup">&lt; star &gt; &lt; star /&gt;</div></div>
    <div class="image-wrapper"><img src="${snowEmptyBall}" alt='snow ball' data-element="ball-second"><div class="markup-prompt" data-element="ball-second-markup">&lt; ball &gt &lt; ball /&gt;</div><img class="active-image sub-image sub-image_small" src="${star}" alt='star' data-element="star-second"><div class="markup-prompt markup-prompt_sub-higher" data-element="star-second-markup">&lt; star &gt; &lt; star /&gt;</div></div>`,
    task: 'Select star that\'s directly in a snow ball',
    markup: '<div data-element="ball-first"><span>&lt; ball &gt;</span><div data-element="tree"><span>&lt; tree &gt;<div data-element="star-first"><span>&lt; star &gt; &lt; star /&gt;</span></div>&lt; tree /&gt;</span></div><span>&lt; ball /&gt;</span></div><div data-element="ball-second"><span>&lt; ball &gt;</span><div data-element="star-second"><span>&lt; star &gt; &lt; star /&gt;</span></div><span>&lt; ball /&gt;</span></div>',
    answer: 'ball > star',
  },
  { // :first-of-type
    level: 10,
    playgroundMarkup: `<div class="image-wrapper"><img src="${snowman}" alt='deer' data-element="snowman"><div class="markup-prompt" data-element="snowman-markup">&lt; snowman /&gt;</div></div>
    <div class="image-wrapper"><img class="active-image" src="${deer}" alt='deer' data-element="deer-first"><div class="markup-prompt" data-element="deer-first-markup">&lt; deer /&gt;</div></div>
    <div class="image-wrapper"><img src="${deer}" alt='deer' data-element="deer-second"><div class="markup-prompt" data-element="deer-second-markup">&lt; deer /&gt;</div></div>
    <div class="image-wrapper"><img src="${deer}" alt='deer' data-element="deer-third"><div class="markup-prompt" data-element="deer-third-markup">&lt; deer /&gt;</div></div>`,
    task: 'Select first deer',
    markup: '<div data-element="snowman"><span>&lt; snowman /&gt;</span></div><div data-element="deer-first"><span>&lt; deer /&gt;</span></div><div data-element="deer-second"><span>&lt; deer /&gt;</span></div><div data-element="deer-third"><span>&lt; deer /&gt;</span></div>',
    answer: 'deer:first-of-type',
  },
];
