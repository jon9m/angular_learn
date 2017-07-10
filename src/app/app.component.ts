import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "Udemy Angular";
  unlessValue:boolean = false;

   serversList: [{ serverName: string, serverType: String, serverStatus: String }]
  = [{ serverName: "Tomcat", serverType: "servlet", serverStatus: "online" },
  { serverName: "weblogic", serverType: "App", serverStatus: "online" },
  { serverName: "Apache", serverType: "web", serverStatus: "offline" }
  ];

  OnServerAdded(serverData: { serverName: string, serverType: String, serverStatus: String }) {    
    this.serversList.push({ serverName: serverData.serverName, serverType: serverData.serverType, serverStatus: serverData.serverStatus });
  }
}


