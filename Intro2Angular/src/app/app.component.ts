import { Component } from '@angular/core';

// Member decorator
function potato(target, name, descriptor) {
  console.log(target, name, descriptor);
  // store the original function in a variable
  const original = descriptor.value;
  // do the manipulations with descriptor.value
  descriptor.value = function(...args) {
    console.log("Arguments", args, " were passed in");
    const result = original.apply(this, args);
    console.log("The result of original is", result);
  }  
  // return the descriptor
  return descriptor;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Intro2Angular';

  constructor() {
    console.log(this.aSimpleMethod(5, 2));
    console.log()
  }

  @potato
  aSimpleMethod(a, b) {
    return a * b
  }

}
