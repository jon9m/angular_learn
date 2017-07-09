import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [`
            .online {
                color: white;
            }
        `]
})
export class ServersComponent implements OnInit {
  serverCreatedStatus: string = "Server Not Created!";
  allowAddServer: boolean = false;
  serverName = "";
  serverCreated: boolean = false;

  @ViewChild('serverNameInputLocalRef') nameInput: ElementRef;

  @Output('createServerEvent') serverCreatedEmitter = new EventEmitter<{ serverName: string, serverType: String, serverStatus: String }>();

  onAddServer(serverNameInputLocalRef:HTMLInputElement) {
    // this.serverCreatedEmitter.emit({ serverName: this.serverName, serverType: "web", serverStatus: "Offline" });    
    //this.serverCreatedEmitter.emit({ serverName: serverNameInputLocalRef.value, serverType: "web", serverStatus: "Offline" });    

    this.serverCreatedEmitter.emit({ serverName: this.nameInput.nativeElement.value, serverType: "web", serverStatus: "Offline" });    
  }

  constructor() { 

  }

  ngOnInit() {
    // setTimeout(() => {
    //   this.allowAddServer = true;
    // }, 2000);
  }

  getColor() {
    return this.serverCreated === true ? "black" : "pink";
  }
}
