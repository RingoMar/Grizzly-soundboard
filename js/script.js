const sounds = {
  'WHAT NO': 'https://cdn.discordapp.com/attachments/414309372370485248/414320045318209547/wuuuut.mp3',
  "When you nut and she keeps on succn'": 'https://cdn.discordapp.com/attachments/414309372370485248/414309509075304448/When_you_nut_and_she_keeps_succing.mp3',
  "WOAHHHHHH?": 'https://cdn.discordapp.com/attachments/414309372370485248/414309506571567104/THE_DUCK.mp3',
  "Grizzly LOL Clap": 'https://cdn.discordapp.com/attachments/414309372370485248/414309503782092802/that_facelaugh.mp3',
  "Producer Tag": 'https://cdn.discordapp.com/attachments/414309372370485248/414309501337075712/PRODUCER_TAG.mp3',
  "When you nut for the first time": 'https://cdn.discordapp.com/attachments/414309372370485248/414309499701035019/Nut.mp3',
  "	Only succ at succ'": 'https://cdn.discordapp.com/attachments/414309372370485248/414309497084051457/Man_only_thing_I_suk_at_is_suking_okay_.mp3',
  "Let me stop": 'https://cdn.discordapp.com/attachments/414309372370485248/414309494584246288/LET_ME_STOP.mp3',
  "Space Explosion": 'https://cdn.discordapp.com/attachments/414309372370485248/414309492789084160/Exorcist_needed..mp3',
  "EH EH EH EH": 'https://cdn.discordapp.com/attachments/414309372370485248/414309490368708619/EEEGHEEEEGHEEEEEGH_.mp3',
  "When she doesnt understand": 'https://cdn.discordapp.com/attachments/414309372370485248/414309487424307200/DO_YOU_UNDERSTAND_ME.mp3',
  "OH I love it": 'https://cdn.discordapp.com/attachments/414309372370485248/414319211188322304/WTF_TJ_.mp3',
  "When he wasn't ready": 'https://cdn.discordapp.com/attachments/414309372370485248/414570712607752193/When_you_wasnt_ready.mp3',
}

let audios = {}
for (let [title, url] of Object.entries(sounds)) {
  audios[title] = new Audio(url)
}

let board = document.getElementById('board')
for (let title of Object.keys(audios)) {
  let button = document.createElement('button')
  button.textContent = title
  button.setAttribute('id', title.replace(/\s+/g, '-'))
  button.dataset['audio'] = title
  button.onclick = function (id) {
    let audio = audios[event.target.dataset['audio']]
    adur = Math.round(audio.duration)
    var date = new Date(null)
    date.setSeconds(adur)
    var timeString = date.toISOString().substr(11, 8)
    document.getElementById('time').innerHTML = timeString
    document.getElementById('lastplay').innerHTML = title
  }
  board.appendChild(button)
}

board.addEventListener('click', function (event) {
  let audio = audios[event.target.dataset['audio']]

  if (audio) {
    for (let audio of Object.values(audios)) {
      audio.pause()
      audio.currentTime = 0
    }
    audio.play()
  }
})

function stopAudio() {
  let stop = audios[event.target.dataset['audio']]
  document.getElementById('time').innerHTML = '00:00:00'
  document.getElementById('lastplay').innerHTML = '------'
  for (let stop of Object.values(audios)) {
    stop.pause()
    stop.currentTime = 0
  }
}

function SetVolume(val) {
  let volume = audios[event.target.dataset['audio']]
  for (let volume of Object.values(audios)) {
    volume.volume = val / 100
  }
}

function objectLength() {
  var result = 0
  for (var prop in sounds) {
    if (sounds.hasOwnProperty(prop)) {
      result++
    }
  }
  return result
}

$(document).ready(function () {
  $('#soundfind').on('keyup', function () {
    var value = $(this).val().toLowerCase()
    $('#board *').filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    })
  })
})

document.getElementById('scount').innerHTML = objectLength()