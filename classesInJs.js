class Player {
     constructor(name,type){
        this.name = name;
        this.type = type;
     }

     introduce(){
        console.log(`Hi i am ${this.name} everyone know me as ${this.type}`)
     }
  
}

class Wizard extends Player {
    constructor(name,type){
     super(name,type)
    }

   play(){
     console.log(` YESSSS!! I am a ${this.type}`)
   }
}


const player1 = new Wizard('shaon','Poker')

player1.play()

