import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';

@Component({
  selector: 'app-loan-types',
  templateUrl: './loan-types.component.html',
  styleUrls: ['./loan-types.component.scss']
})
export class LoanTypesComponent implements OnInit {
  addLoanTypeForm: FormGroup;


  constructor(private fb: FormBuilder) {

    //implementation with FormGroup
    // this.addLoanTypeForm = new FormGroup({
    //   'loanName' : new FormControl(),
    //   'loanDescription' : new FormControl(),
    //   'loanType': new FormControl()
    // });

    //implementation with FormBuilder
    // this.addLoanTypeForm = this.fb.group({
    //   'loanName' : new FormControl('A loan to pay sth'),
    //   'loanDescription' : new FormControl('This is very good description of a Loan'),
    //   'loanType': new FormControl('Personal Loan')
    // })

    //this is how we define FormArrays - a simple one:
    let users = new FormArray([
      new FormControl('Benutti'),
      new FormControl('Tutorials')
    ]);

    console.log(users);
    console.log(users.value);

    //another ways of settings values to form
    this.addLoanTypeForm = this.fb.group({
      'loanName' : new FormControl('', [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(25)
        ]
      ),
      'loanType': new FormControl('', Validators.required),
      'loanDescription' : new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(25)
        ])
      ),
      // 'users': new FormArray([
      //   new FormControl('Benutti'),
      //   new FormControl('Tutorials')
      // ]),
      'users' : new FormArray([
        this.fb.group({
          'name': new FormControl('Felipe'),
          'age': new FormControl('32'),
          'dept': new FormControl('fodão'),
        })
      ])
    })




    // const newLoanObj = {
    //   'loanName' : 'A loan to pay sth',
    //   'loanDescription' : 'This is very good description of a Loan',
    //   'loanType': 'Personal Loan'
    // }


    // //Não dá pra tirar nenhum valor de form, senão dá pau.
    // //Se não passar todos os input que tiver no form, aí dá pau
    // this.addLoanTypeForm.setValue(newLoanObj);


    //Colocando valor por padrão no form
    // const newLoanObjPatch = {
    //   'loanName' : 'A loan to pay sth',
    //   'loanType': 'Personal Loan'
    // }

    //Já o patch aceita só um pedaço.
    //this.addLoanTypeForm.patchValue(newLoanObjPatch);


    this.addLoanTypeForm.statusChanges.subscribe(data => {
        console.log(data)
      }
    )

    this.addLoanTypeForm.valueChanges.subscribe(data => {
        //console.log(this.addLoanTypeForm.valid)
        //console.log(data)
      }
    )

  }

  get users(): FormArray{
    return this.addLoanTypeForm.get('users') as FormArray;
  }

  addUser(){
    let userArray = this.users;
    let newUser = this.fb.group({
      'name': '',
      'age': '',
      'dept': ''
    })

    userArray.push(newUser);
  }

  removerUser(i: any){
    let userArray = this.users;
    userArray.removeAt(i);
  }

  assignDept(i: any){
    let userArray = this.users;

    if (userArray.value[i].age > 25) {
      userArray.value[i].dept = "Ministério da Magia";
    } else {
      userArray.value[i].dept = "DPTO de Mistérios";
    }
    this.users.setValue(userArray.value)
  }

  getControls(form: FormGroup, key: string){
    return (<FormArray>form.controls[key]).controls;
  }

  trackLoanName(): void {
    this.addLoanTypeForm.valueChanges.subscribe(data => {
      //console.log(data)
    });
  }

  ngOnInit(): void { }

  addLoanType(){
    //console.log(this.addLoanTypeForm.value);
    //console.log(this.addLoanTypeForm.get('loanType')?.value);
    console.log(this.addLoanTypeForm.valid);
    console.log(this.addLoanTypeForm.invalid);
    console.log(this.addLoanTypeForm.pending); //Form tá esperando ser submetido
    console.log(this.addLoanTypeForm.pristine); //Form não foi modificado pelo usuário
    console.log(this.addLoanTypeForm.dirty); //Form foi modificado pelo usuário
    console.log(this.addLoanTypeForm.touched);
    console.log(this.addLoanTypeForm.untouched);
  }

  resetForm(){
    this.addLoanTypeForm.reset();
  }
}
