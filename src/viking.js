// Soldier
class Soldier {
  constructor (health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }
  receiveDamage(dmg) {
    this.health -= dmg
  }
  
}

// Viking
class Viking extends Soldier {

  constructor (name, health, strength) {
    super(name)
    this.name = name;
    this.health = health;
    this.strength = strength; 
  }
  receiveDamage(dmg){ //THIS WORKS
    this.health -= dmg
    if (this.health > 0) {
      return `${this.name} has received ${dmg} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    } 
  }
  battleCry() {
    return ("Odin Owns You All!");
    }

}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength)
  }
  receiveDamage(dmg) {
    this.health -= dmg
    if (this.health > 0) {
      return `A Saxon has received ${dmg} points of damage`
    } else {
      return `A Saxon has died in combat`
    }
  }
}


// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(vikingObject){
    this.vikingArmy.push(vikingObject)
  }
  addSaxon(saxonObject){
    this.saxonArmy.push(saxonObject)
  }
  
  vikingAttack(){
    let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);

    let attack = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);
   

    if (this.saxonArmy[randomSaxon].health <= 0) {
      this.saxonArmy.splice(randomSaxon, 1)
       }
    

    return attack
  }  
  saxonAttack(){
    let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);

    let attack = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);

    if (this.vikingArmy[randomViking].health <= 0) {
      this.vikingArmy.splice(randomViking, 1)
       }

    return attack
    
  }
  showStatus(){
    
    if (this.saxonArmy.length <= 0) {
      return "Vikings have won the war of the century!"
    } else if (this.vikingArmy.length <= 0) {
      return "Saxons have fought for their lives and survived another day..."
    } else {
      return "Vikings and Saxons are still in the thick of battle."
    }

  }
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
