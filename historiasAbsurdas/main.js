const customName = document.querySelector('#customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
};

const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
const insertX = ['Willy the Goblin','Big Daddy','Father Christmas'];
const insertY = ['the soup kitchen','Disneyland','the White House'];
const insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];

randomize.addEventListener('click', result);

function result(){
    let newStory = storyText;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);
    newStory = newStory.replace(/:insertx:/g,`${xItem}`)
                       .replace(':inserty:',`${yItem}`)
                       .replace(':insertz:',`${zItem}`);

    if(customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace('Bob',`${name}`);
    };

    if(document.getElementById("uk").checked) {
        const weight = Math.round(librasAStone(300)) + ' stone';
        const temperature =  Math.round(fahrenheitAGrados(94)) + ' centigrade';
        newStory = newStory.replace('94 fahrenheit', weight)
                           .replace('300 pounds', temperature);
    }; 
    story.textContent = newStory;
    story.style.visibility = 'visible';

}
function librasAStone(libras){
    const stone = libras / 14;
    return stone;
}
function fahrenheitAGrados(fahrenheit){
    const grados = (fahrenheit - 32) / 1.8;
    return grados;

}
