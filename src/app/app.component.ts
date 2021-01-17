import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, ViewChild } from '@angular/core';
import { Character } from './models/character';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'picture-book';
  @ViewChild('mainDiv') main;
  public style: string;
  public characters: Character[] = [];
  public selectedCharacter: Character[] = [];

  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];
  public char1: Character;

  constructor() {
    this.char1 = new Character();
    this.char1.name = 'Hayvanat Bahçesi-1'
    this.char1.url = './assets/images/bg1.jpg';
    this.char1.tip = 'bg';
    this.characters.push(this.char1);
    let resim2 = new Character();
    resim2.name = 'Hayvanat Bahçesi -2'
    resim2.url = './assets/images/bg2.jpg';
    resim2.tip ='bg';
    this.characters.push(resim2);

    let resim3 = new Character();
    resim3.name = 'Hayvanat Bahçesi -3'
    resim3.url = './assets/images/bg3.jpg';
    resim3.tip ='bg';

    this.characters.push(resim3);
    this.selectedCharacter.push(resim3);
  }

  ngOnInit() {
    //this.changeBack();

  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  changeBack(): any {
    console.log(this.main);
    this.style = "background-image: url(../assets/images/bg2.jpg);";
    this.style += "background-repeat: repeat-y;";
    this.style += "z-index: -99;";
    this.style += "opacity: 0.9;";
    this.main.nativeElement.style = this.style
  }
}