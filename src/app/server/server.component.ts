import { Component, Input, EventEmitter } from '@angular/core'

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: ['p{background-color:pink}']
})
export class ServerComponent {

    @Input("serverElem") serverElement: { serverName: string, serverType: String, serverStatus: String };
}