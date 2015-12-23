$(function() {
  var currentStep = new Decision('start', "You wake up. What... what did you do last night? It is a blur of");
  var step1 = new Decision('...code?', "code.  You were coding.  There was a bug you couldn't quite track down, and that goddamn div would not appear.  But it's here now.  It's sitting at the foot of your bed, and it's laughing at you.");
  var step2 = new Decision("...booze?", "The light here is pretty bright.");
  var step3 = new Decision("...no, I was definitely juggling marmots.", "juggling marmots.  You pick up your phone.  There are fifteen voicemails.  There is a request for a meeting with the Consul of Nepal.  It doesn't sound like he's happy with you.");
  currentStep.addChoice(step1);
  currentStep.addChoice(step2);
  currentStep.addChoice(step3);
  step1 = new Decision("OH GOD", "Who knew the funny farm would be so much like a sprint?  You can DO this!");
  step2 = new Decision("No, seriously, I attack it.", "It squeaks and begs for mercy.  The world is so much more than code, it says!  I just want to live, freely, like you do!");
  currentStep.choices[0].addChoice(step1);
  currentStep.choices[0].addChoice(step2);
  step1 = new Decision("NO ONE IS FREE OF CODE", "I grab a git...fork it and then pull it...");
  step2 = new Decision("...Well, ok, maybe we can go to the park before you go back into the webpage.", "We stroll to the terminal park");
  step3 = new Decision("I convince it that the World Wide Web is the best place ever.", "hmmmm...something weird happens");
  currentStep.choices[0].choices[1].addChoice(step1);
  currentStep.choices[0].choices[1].addChoice(step2);
  currentStep.choices[0].choices[1].addChoice(step3);
  step1 = new Decision("I think I'm in the hospital.", "Who are those people in white cloaks around?");
  step2 = new Decision("I think I've been abducted by aliens.", "Whoaa...what's that gigantic beaping machine...");
  step3 = new Decision("I think I'm going to roll over and go back to sleep.", "Very sensible.");
  currentStep.choices[1].addChoice(step1);
  currentStep.choices[1].addChoice(step2);
  currentStep.choices[1].addChoice(step3);
  step1 = new Decision("I go to the meeting anyway!", "He looks very unhappy about last night's n-queens adventures");
  step2 = new Decision("I go find something more challenging to juggle...  Like cobras.", "Flute melody playing in the background...");
  step3 = new Decision("I'm just running wild, here.  To the nearest zeppelin!", "Wooohooo...around the world in 80 days!");
  currentStep.choices[2].addChoice(step1);
  currentStep.choices[2].addChoice(step2);
  currentStep.choices[2].addChoice(step3);


  var start = true;
  var updateChoices = function() {
    $('#choice1').text(currentStep.choices[0] ? currentStep.choices[0].title : ' ');
    $('#choice2').text(currentStep.choices[1] ? currentStep.choices[1].title : ' ');
    $('#choice3').text(currentStep.choices[2] ? currentStep.choices[2].title : ' ');
};
  var choice = function(i) {
    return function() {
      currentStep = currentStep.choices[i];
      game();
    }
  };

  $('#choice1').on('click', choice(0));
  $('#choice2').on('click', choice(1));
  $('#choice3').on('click', choice(2));

  var game = function() {
    $('<p>'+ currentStep.storyText +'</p>').appendTo('#story');
    updateChoices();
    if(!currentStep.choices.length) {
      $('<p>Oooopps....looks like you ran out of choices!</p>').appendTo('#story');
    }
    console.log('cs ', currentStep);
  };
  game();
  updateChoices();
});

// // HI?
// $(function () {
//    /*
//     var story = Tree();
//     story.addChild( [button_value, text_value]);
//   */
//   var story = Tree();
//   story.addChild(["...code?", "code.  You were coding.  There was a bug you couldn't quite track down, and that goddamn div would not appear.  But it's here now.  It's sitting at the foot of your bed, and it's laughing at you."]);
//   story.addChild(["...booze?", "Text to add for something 2"]);
//   story.addChild(["...no, I was definitely juggling marmots.", "juggling marmots.  You pick up your phone.  There are fifteen voicemails.  There is a request for a meeting with the Consul of Nepal.  It doesn't sound like he's happy with you."]);
//   story.children[0].addChild(["OH GOD", "Who knew the funny farm would be so much like a sprint?  You can DO this!"]);
//   story.children[0].addChild(["No, seriously, I attack it.", "It squeaks and begs for mercy.  The world is so much more than code, it says!  I just want to live, freely, like you do!"]);


//   story.addChild(["booze. The light here is pretty bright."]);
//   story.children[1].addChild(["I think I'm in the hospital.", "else for something 1"]);
//   story.children[1].addChild(["I think I've been abducted by aliens.", "else for something 1"]);
//   story.children[1].addChild(["I think I'm going to roll over and go back to sleep.", " Very sensible."]);


//   [
//   //first value:  button text, then second value is what will add
//     ["OH GOD", "else for something 1", "do #2", "else something 2","do #3", "else for something 3"]
//   ];


//   var i = 0;
//   var choice1 = 0,
//       text1 = 1,
//       choice2 = 2,
//       text2 = 3,
//       choice3 = 4,
//       text3 = 5;

//   var updateLinks = function() {
//     $('#choice1').text(story[i][choice1]);
//     $('#choice2').text(story[i][choice2]);
//     $('#choice3').text(story[i][choice3]);
//   };

//   var endOfStory = function() {
//     if(i >= story.length) {
//       $('<p class="end">The End</p>').appendTo('#story');
//       $('#choice1').remove();
//       $('#choice2').remove();
//       $('#choice3').remove();
//       return true;
//     }
//     return false;
//   };

//   updateLinks();

//   $('#choice1').click(function () {
//     $('<p>'+ story[i++][text1] +'</p>').appendTo('#story');
//     if(!endOfStory()) {
//       updateLinks();
//     }
//   });
//   $('#choice2').click(function () {
//     $('<p>'+ story[i++][text2] +'</p>').appendTo('#story');
//     if(!endOfStory()) {
//       updateLinks();
//     }
//   });
//   $('#choice3').click(function () {
//     $('<p>'+ story[i++][text3] +'</p>').appendTo('#story');
//     if(!endOfStory()) {
//       updateLinks();
//     }
//   });
// });
