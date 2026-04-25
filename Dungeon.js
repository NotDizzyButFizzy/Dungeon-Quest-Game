const rooms = {
  'Entrance': {
    description: "You stand before the dungeon gates. A strange aura surrounds the place.",
    exits: {north: 'Hallway'},
    items: []
  },
  'Hallway': {
    description: "Dimly lit and quiet. Too quiet. Paths lead in all directions.",
    exits: {south: 'Entrance', east: 'Library', west: 'Cellar', north: 'Armory'},
    items: []
  },
  'Library': {
    description: "Books everywhere. Some whisper. A scroll glows faintly.",
    exits: {west: 'Hallway'},
    items: ['scroll']
  },
  'Cellar': {
    description: "Dark, damp, and cold. A chest lies in the corner.",
    exits: {east: 'Hallway'},
    items: ['locked chest']
  },
  'Armory': {
    description: "Weapons of old warriors. A sword rests on a pedestal guarded by a goblin!",
    exits: {south: 'Hallway', north: 'Boss Lair'},
    items: ['sword'],
    monster: 'goblin',
    defeated: false
  },
  'Boss Lair': {
    description: "The air is heavy. A giant beast blocks the path to the treasure room!",
    exits: {south: 'Armory', north: 'Treasure Room'},
    items: [],
    boss: 'dungeon beast',
    defeated: false
  },
  'Treasure Room': {
    description: "The treasure glitters beyond your imagination.",
    exits: {south: 'Boss Lair'},
    items: ['ultimate treasure'],
    locked: true
  }
};

let currentRoom = 'Entrance';
let inventory = [];
const gameArea = document.getElementById('game');
const dirButtons = document.getElementById('direction-buttons');
const itemButtons = document.getElementById('item-buttons');

function print(text) {
  gameArea.textContent += text + "\n";
  gameArea.scrollTop = gameArea.scrollHeight;
}

function describeRoom(room) {
  const r = rooms[room];
  print(`\n${r.description}`);
  updateButtons(r);
  if (r.items.length) print("You see: " + r.items.join(", "));
}

function updateButtons(room) {
  dirButtons.innerHTML = '';
  for (const dir in room.exits) {
    const btn = document.createElement('button');
    btn.textContent = `Go ${dir}`;
    btn.onclick = () => move(dir);
    dirButtons.appendChild(btn);
  }
  itemButtons.innerHTML = '';
  room.items.forEach(item => {
    const btn = document.createElement('button');
    btn.textContent = `Take ${item}`;
    btn.onclick = () => takeItem(item);
    itemButtons.appendChild(btn);
  });
  if (room.monster && !room.defeated) {
    const btn = document.createElement('button');
    btn.textContent = `Fight ${room.monster}`;
    btn.onclick = () => fightMonster(room);
    itemButtons.appendChild(btn);
  }
  if (room.boss && !room.defeated) {
    const btn = document.createElement('button');
    btn.textContent = `Fight ${room.boss}`;
    btn.onclick = () => fightBoss(room);
    itemButtons.appendChild(btn);
  }
}

function move(direction) {
  const room = rooms[currentRoom];
  const nextRoom = room.exits[direction];
  if (nextRoom === 'Treasure Room' && rooms['Treasure Room'].locked) {
    print("The final door is sealed. Defeat the beast to pass!");
    return;
  }
  currentRoom = nextRoom;
  describeRoom(currentRoom);
  if (currentRoom === 'Treasure Room') {
    print("Congratulations! You've claimed the ultimate treasure and won the game!");
    disableButtons();
  }
}

function takeItem(item) {
  const room = rooms[currentRoom];
  if (item === 'locked chest') {
    if (inventory.includes('scroll')) {
      inventory.push('magic ring');
      print("The scroll unlocks the chest! You found a magic ring.");
    } else {
      print("The chest is locked. Perhaps there's a clue nearby.");
    }
    return;
  }
  if (room.items.includes(item)) {
    inventory.push(item);
    room.items = room.items.filter(i => i !== item);
    print(`You picked up the ${item}.`);
    updateButtons(room);
  } else {
    print("There is no such item here.");
  }
}

function fightMonster(room) {
  if (inventory.includes('scroll')) {
    print(`You cast a spell with the scroll and defeat the ${room.monster}!`);
    room.defeated = true;
    updateButtons(room);
  } else {
    print("You need a magical item to defeat this monster!");
  }
}

function fightBoss(room) {
  if (inventory.includes('sword') && inventory.includes('magic ring')) {
    print(`With sword and ring, you slay the ${room.boss}! The treasure is now within reach.`);
    room.defeated = true;
    rooms['Treasure Room'].locked = false;
    updateButtons(room);
  } else {
    print("You're not strong enough to defeat the beast. Seek more power.");
  }
}

function showInventory() {
  if (inventory.length) {
    print("You are carrying: " + inventory.join(", "));
  } else {
    print("Your inventory is empty.");
  }
}

function quitGame() {
  print("Thanks for playing Dungeon Quest!");
  disableButtons();
}

function disableButtons() {
  dirButtons.innerHTML = '';
  itemButtons.innerHTML = '';
}

print("Welcome to Dungeon Quest! Your journey begins...");
describeRoom(currentRoom);
