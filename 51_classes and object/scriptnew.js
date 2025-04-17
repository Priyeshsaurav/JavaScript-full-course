class RailwayForm {
    constructor(givenname,trainno,address){
        console.log("CONSTRUCTOR CALLED..." + givenname + " " + trainno)
        this.name = givenname
        this.trainno = trainno
        this.address = address
    }
    preview() {
        alert(this.name + " : your form is in preview for trainno: " + this.trainno + "and your address is :" + this.address);
      }
    submit() {
      alert(this.name + " : your form is submitted for trainno: " + this.trainno);
    }
    cancel() {
      alert(this.name + " : your form is cancelled: " + this.trainno);
    }
  }
  let harryForm = new  RailwayForm("harry",12343,"Delhi")
  harryForm.submit()
  harryForm.preview()
  harryForm.cancel()
  