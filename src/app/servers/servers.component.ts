import { Component, OnInit } from '@angular/core';

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
  serverCreated:boolean = false;

  serversList = ["Tomcat","weblogic","Apache"];

  constructor() {

  }

  ngOnInit() {
    // setTimeout(() => {
    //   this.allowAddServer = true;
    // }, 2000);
  }

  OnCreateServer() {
    this.serversList.push(this.serverName);
    this.serverCreated = true;
    this.serverCreatedStatus = "Server Created! Name is " + this.serverName;
  }

  getColor(){
    return this.serverCreated === true ? "black" : "pink";
  }
}
