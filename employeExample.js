class EmployePosition {
  constructor() {
    this.positions = {};
    this.total = 0;
   
  }

  checkEmployeRank(index) {
    const rank = this.positions[index];
    return rank;
  }

  addEmployee(person) {
    this.positions[this.total] = person;
    this.total++;
  }

  deleteEmploye(index){
    const deletedEmploye = this.positions[index];
    this.shiftEmploye(index);
    return deletedEmploye;
  }

  shiftEmploye(index){
    for(let i = index; i<=this.total-1;i++){
        this.positions[i] = this.positions[i+1];
      
    }
    delete this.positions[this.total-1];
    this.total--;
  }
}

const empoloyeStatus = new EmployePosition();
empoloyeStatus.addEmployee("HR EXECUTIVE");
empoloyeStatus.addEmployee("MARKETING HEAD");
empoloyeStatus.addEmployee("ACCOUNTANT");
empoloyeStatus.addEmployee("SUPERVISER");
empoloyeStatus.addEmployee("SOFTWARE ENGINEER");
empoloyeStatus.addEmployee("TRANINEE ACCOUNTANT");
empoloyeStatus.addEmployee("TRAINEE SOFTWARE ENGINEER");
empoloyeStatus.addEmployee("SENIOR SOFTWARE ENGINEER");
empoloyeStatus.addEmployee("CEO");
empoloyeStatus.addEmployee("CTO");
empoloyeStatus.addEmployee("SUPPORT ENGINEER");

console.log(empoloyeStatus.checkEmployeRank(6));
