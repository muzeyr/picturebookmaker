import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'picture-book';
  @ViewChild('mainDiv') main; 
  public style: string;


  constructor(){
    
  }
  ngOnInit(){
    //this.changeBack();

  }
  changeBack(): any {
    console.log(this.main);
    this.style  = "background-image: url(../assets/images/booktint.png);";
    this.style +="background-repeat: repeat-y";
    this.main.nativeElement.style = this.style
  }
  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
  }
}