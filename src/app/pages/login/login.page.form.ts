import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class LoginPageForm{
 
   private formBuilder:FormBuilder;

   constructor(fB:FormBuilder){
       this.formBuilder=fB;
   }
   createForm():FormGroup{
     return this.formBuilder.group({
         email: ['', [Validators.required, Validators.email]],
         password:['', [Validators.required]]
     });
 }
}