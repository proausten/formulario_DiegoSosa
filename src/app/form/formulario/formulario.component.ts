import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';

export class Cliente {

}



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})



export class FormularioComponent implements OnInit {

      


       constructor(private fb: FormBuilder){}

       formulariouno = this.fb.group({
        nombre:['',[Validators.required, Validators.minLength(5)]],
        apellido:['',[Validators.required, Validators.minLength(5)]],
        direccion:['',[Validators.required, Validators.minLength(5)]],
        dni:[,[Validators.required, Validators.minLength(5)]],
        email:['',[Validators.required, Validators.minLength(5)]]
       })

     
       submit() {
        console.log(this.formulariouno.value)
        console.log(this.formulariouno.valid)
      }




       ngOnInit(): void {
         
       }
    
}
