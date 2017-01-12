import {Component} from 'angular2/core';
import {AuthorService} from './author.service'

@Component({
  selector: 'author',
  template: `
    <h2>Author</h2>
    {{ title }}
    <ul>
      <li *ngFor='#author of authors'>{{author}}</li>
    </ul>
  `,
  providers: [AuthorService]
})
export class AuthorComponent{
  title = 'This contains author details';
  authors;
  constructor(authorService: AuthorService){
    this.authors = authorService.getAuthor()
  }
}
