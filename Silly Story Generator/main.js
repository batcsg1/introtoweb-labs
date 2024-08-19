//1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');


function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertX = ["Willy the Goblin" , "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];
//Clicking button
randomize.addEventListener('click', result);

function result() {

    let newStory = storyText;
    xItem = randomValueFromArray(insertX);
    yItem = randomValueFromArray(insertY);
    zItem = randomValueFromArray(insertZ);
    //Replace placeholders with random values from each x, y and z Items
    newStory = newStory.replaceAll(':insertx:', insertX);
    newStory = newStory.replaceAll(':inserty:', insertY);
    newStory = newStory.replaceAll(':insertz:', insertZ);

  if(customName.value !== '') {
    const name = customName.value;
    //Replace Bob with custom name
    newStory = newStory.replaceAll('Bob', name)
  }

  if(document.getElementById("uk").checked) {
    const weight = `${Math.round(300 / 14)} stone`;
    const temperature =  `${Math.round((94 - 32) * 5/9)} centigrade`;
    newStory = newStory.replaceAll('94 fahrenheit', temperature)
    newStory = newStory.replaceAll('300 pounds', weight)
  }

  story.textContent = newStory ;
  story.style.visibility = 'visible';
}


