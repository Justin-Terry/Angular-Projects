import { Component } from '@angular/core'


// Component decorator that tell Angular that this class is a component
// and how to handle it.
// selector is a string that names the component, must be unique!
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
})
export class ServerComponent {

}