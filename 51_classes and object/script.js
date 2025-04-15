class RailwayForm {
  submit() {
    alert(this.name + " : your form is submitted for trainno: " + this.trainno);
  }
  cancel() {
    alert(this.name + " : your form is cancelled: " + this.trainno);
  }
  fill(givenname,trainno) {
    this.name = givenname
    this.trainno = trainno
  }
}

//create a form for rohan
let rohanForm = new RailwayForm();
// fill the form for rohan's details
rohanForm.fill("rohan",1234);

//create a form for harry
let harryForm1 = new RailwayForm();
let harryForm2 = new RailwayForm();

//fill the form for harry's details
harryForm1.fill("harry",2345);
harryForm2.fill("harry",223344)

rohanForm.submit();
harryForm1.submit();
harryForm2.submit();
harryForm1.cancel();
