function Ladder() {
  this.currentStep = 0;

  this.up = function () {
    this.currentStep++;
    return this;
  };

  this.down = function () {
    if(this.currentStep > 0) {
        this.currentStep--;
    } else {
        console.log("You are on the last step")
    }
    return this;
  };

  this.showStep = function () {
    console.log(this.currentStep);
    return this;
  };
}

let ladder = new Ladder();
ladder.up().up().showStep();//2
