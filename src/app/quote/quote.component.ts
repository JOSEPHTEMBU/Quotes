import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(
      1,
      'All our dreams can come true, if we have the courage to pursue them.',
      'Walt Disney',
      'Harvad',
      new Date(2020, 8, 23)
    ),
    new Quote(
      2,
      'Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers',
      'Socrates',
      'Wayne',
      new Date(2020, 7, 20)
    ),
    new Quote(3, 'No democracy can exist unless each of its citizens is as capable of outrage at injustice to another as he is of outrage at unjustice to himself.', 'Aristotle', 'wayne', new Date(2020, 6, 23)),

    new Quote(
      4,
      'If the machine of government is of such a nature that it requires you to be the agent of injustice to another, then, I say, break the law.',
      'Henry David Thoreau',
      'Hoston',
      new Date(2020, 5, 23)
    ),
  ];

  addUpVote(index) {
    this.quotes[index].upvote++;
  }

  addDownVote(index) {
    this.quotes[index].downvote++;
  }

  toggleDetails(index) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  delete(deleteThis: boolean, index: number) {
    if (deleteThis) {
      let confirmDelete = confirm(
        'Are you sure you want to delete this quote?'
      );
      if (confirmDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  highestUpVote() {
    let highestUpVoteQuote = new Quote(0, '', '', '', new Date());
    for (let i = 0; i < this.quotes.length; i++) {
      if (this.quotes[i].upvote > highestUpVoteQuote.upvote) {
        highestUpVoteQuote = this.quotes[i];
      }
    }
    if (highestUpVoteQuote.upvote > 0) {
      return highestUpVoteQuote;
    } else {
      return;
    }
  }

  addNewQuote(newQuote: Quote) {
    newQuote.id = this.quotes.length + 1;
    this.quotes.push(newQuote);
  }

  constructor() {}

  ngOnInit(): void {}
}
