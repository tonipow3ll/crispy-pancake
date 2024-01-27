import { Component } from '@angular/core';

@Component({
  selector: 'app-eightball',
  templateUrl: './eightball.component.html',
  styleUrls: ['./eightball.component.scss']
})
export class EightballComponent {
  public answer: string | null = null;

  answerArray = [
    'It is certain',
    'It is decidedly so',
    'Reply hazy try again',
    'Cannot predict now',
    'Do not count on it',
    'My sources say no',
    'Outlook not so good',
    'Signs point to yes'
  ]

  askQuestion(question: string) {
    if (question === "") return this.answer = "Please ask a question"
    const random = Math.floor(Math.random() * this.answerArray.length)
    return this.answer = this.answerArray[random]
  }
}