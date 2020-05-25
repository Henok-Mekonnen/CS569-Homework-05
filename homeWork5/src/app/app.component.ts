import { Component, Input } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-root',
  template: `<div>
  <h1>{{title}}</h1>
  <p style="font-size:30px">Score: Won {{w}}/ Lost {{l}} </p>
  <button name="Rock" (click)=rock() >Rock</button>
  <button name="Paper" (click)=paper() >Paper</button>
  <button name="Scissors" (click)=scissors() >Scissors</button>
  <p style="font-size:30px">Computer choice was: {{computer}}</p>
  </div>
  `,
  styles: [
    `button {
      padding: 15px 32px;
      text-align: center;
    }
    div{
      margin: auto;
      width: 50%;
      border: 3px solid green;
      padding: 10px;
    }
    `
  ]
})
export class AppComponent {
  public w: number=0
  public l: number=0
  public computer: string;

  
  
   
   rock(){
    this.computersDrow()
     if (this.computer=="Scissors"){this.w+=1}
     if(this.computer=="Paper"){this.l+=1}
   }  
   paper(){
    this.computersDrow()
    if (this.computer=="Rock"){this.w+=1}
    if(this.computer=="Scissors"){this.l+=1}
  } 
  scissors(){
    this.computersDrow()
    if (this.computer=="Paper"){this.w+=1}
    if(this.computer=="Rock"){this.l+=1}
  } 
      
  GameChoises=[
    'Rock', 
    'Paper', 
    'Scissors'
  ]

  title = 'Rock Paper Scissors';
  computersDrow(){
    let random = Math.floor(Math.random() * 3 )
    this .computer=  this.GameChoises[random]
}

}