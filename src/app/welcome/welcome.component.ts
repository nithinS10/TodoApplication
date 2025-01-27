import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../services/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = 'Hello';
  name = '';
  welcomemessagefromBackend:string;

  //ActivatedRoute Dependency Injection
  constructor(private route: ActivatedRoute,private welcomedataservice:WelcomeDataService) { }

  ngOnInit() {
    this.message = 'world';
    console.log(this.route.snapshot.params['name']);   //In the path itself we are sending the userName which we logged in and send the welcome message.
    this.name = this.route.snapshot.params['name'];
    }

  getWelcomeMessage(){
    this.welcomedataservice.executeHelloWorldBeanService().subscribe(
      response =>{
        this.handlesuccessresponse(response),
        error=>this.handleerror(error);
      }
    );
  }
  handleerror(error) {
    this.welcomemessagefromBackend= error;
  }

  handlesuccessresponse(response){
    this.welcomemessagefromBackend = response.message;
    console.log(response)
  }
}
