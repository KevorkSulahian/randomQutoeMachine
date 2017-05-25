var quotes = {
    1: "Nice camouflage. For a minute, I almost didn't see you.",
    2: "I just realized that I can sleep with my eyes open.",
    3: "so it seems like this internet thing is here to stay, huh?",
    4: "All right, I took the quizz. And it turns out I do put career before men.",
    5: "Dear God! This parachute is knapsack!",
    0: "All right. Rock, paper, scissors for who has to tell the whores to leave",
  6: "I'm glad we're having a rehearsal dinner. I rarely practice my meals before I eat them.",
  7: "It's Sunday. I don't move on Sunday.",
  8: "“I’m hopeless and awkward and desperate for love!”",
  9: "I say more dumb stuff before 9 a.m. than most people say all day",
  10: "I’m full, and yet I know if I stop eating this, I’ll regret it.",
  11: "I’m not great at the advice. Can I interest you in a sarcastic comment?",
  12: "I’m Chandler. I make jokes when I’m uncomfortable."
};
var colors = [ '#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"]
function newQuote() {
  document.getElementById("quote").innerHTML =
    quotes[Math.floor((Math.random() * 12)+1)]
  document.body.style.backgroundColor = colors[Math.floor((Math.random() * 12)+1)];
  document.body.style.color = colors[Math.floor((Math.random() * 12)+1)];
};

function tweetIt () {
  var phrase = document.getElementById('quote').innerText;
  var tweetUrl = 'https://twitter.com/share?text=' +
    encodeURIComponent(phrase) + " " + "taken from";
    
  window.open(tweetUrl);
}