import {Component} from '@angular/core'

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styles: ['p{background-color:pink}']
}) 
export class ServerComponent {
    status:string = 'Offline';
}