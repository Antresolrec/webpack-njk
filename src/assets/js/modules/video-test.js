/* eslint-disable */
var video = document.getElementById('myVideo'),
  demo = document.getElementById('demo')
video.addEventListener('timeupdate', setQuestions);
video.addEventListener('ended', function() {
  demo.textContent = 'Done!';
});
const btnTest = document.querySelector('.video-play');
btnTest.addEventListener('click', () => {
  video.currentTime = 5
});


var questionData = [
  '<i>from 0 to 2 seconds</i><br><br><input type="checkbox" name="answer1" value="answer1"> answer 1<br><input type="checkbox" name="answer2" value="answer2"> answer 2<br>',
  '<i>from 2 to 4 seconds</i><br><br><input type="checkbox" name="answer3" value="answer3"> answer 3<br><input type="checkbox" name="answer4" value="answer4"> answer 4<br>',
  '<i>from 4 to 6 seconds</i>s<br><br><input type="checkbox" name="answer5" value="answer5"> answer 4<br><input type="checkbox" name="answer6" value="answer6"> answer 5<br>',
  '<i>plus 6 seconds</i><br><br><input type="checkbox" name="answer7" value="answer7">  answer 6<br><input type="checkbox" name="answer8" value="answer8"> answer 7<br>',
]

const timeCode = document.querySelectorAll('.timecodes p');

function setQuestions() {
  // var index = Math.floor(video.currentTime / 2);
  // if (video.dataset.lastIndex != index) {
  //   demo.innerHTML = questionData[index] || questionData[questionData.length - 1];
  //   video.dataset.lastIndex = index;
  // }
  var index = Math.floor(video.currentTime);
  timeCode.forEach((el) => {
    const start = el.getAttribute('data-start');
    const end = el.getAttribute('data-end');
    if (index >= start && index <= end) {
      el.classList.add('_show');
    } else {
      el.classList.remove('_show');
    }
  })
  
}
/* eslint-enable */
