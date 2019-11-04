import { Component } from '@angular/core'


// Component decorator that tell Angular that this class is a component
// and how to handle it.
// selector is a string that names the component, must be unique!
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [
        `.online {
            color: white;
        }`
    ]
})
export class ServerComponent {
    serverId:number = 10;
    serverStatus:string = 'online';

    constructor() {
        this.serverStatus = Math.random() > .5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }

}