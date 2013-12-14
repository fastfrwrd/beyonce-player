var bindex = 0
  , max = 17
  , video
  , pausePlay = function() {
    video.paused ? video.play() : video.pause()
  }
  , nextVideo = function() {
    if(++bindex > max) bindex = 0
    goTo()
  }
  , prevVideo = function() {
    if(--bindex < 0) bindex = max
    goTo()
  }
  , goTo = function() {
    var url = "media/" + encodeURIComponent(tracks[bindex]) + ".m4v"
    video.src = url
    video.load()
  }
  , vol = function(inc) {
    video.volume = video.volume + inc
  }
  , tracks = [
    "15 Pretty Hurts (Video)",
    "16 Ghost (Video)",
    "17 Haunted (Video)",
    "18 Drunk in Love (feat. Jay Z) [Video]",
    "19 Blow (Video)",
    "20 No Angel (Video)",
    "21 Yoncé (Video)",
    "22 Partition (Video)",
    "23 Jealous (Video)",
    "24 Rocket (Video)",
    "25 Mine (feat. Drake) [Video]",
    "26 XO (Video)",
    "27 ___Flawless (feat. Chimamanda Ngozi Adiche) [Video]",
    "28 Superpower (feat. Frank Ocean) [Video]",
    "29 Heaven (Video)",
    "30 Blue (feat. Blue Ivy) [Video]",
    "31 Grown Woman (Bonus Video)",
    "32 Credits (Video)"
  ]


$(document).ready(function() {
  video = $("#bow_down").get(0)
  $(video).on("ended", nextVideo)

  $(document).on("keydown", function(ev) {
    switch (ev.keyCode) {
      case 32:
        pausePlay();
        break;
      case 37:
        prevVideo();
        break;
      case 38:
        vol(0.1);
        break;
      case 39:
        nextVideo();
        break;
      case 40:
        vol(-0.1);
        break;
    }
  })

  goTo(bindex)
})

