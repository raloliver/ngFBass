import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: 'hello.component.html',
  styleUrls: ['hello.component.css']
})
export class HelloComponent {
  stopPropagation(event) {
    event.stopPropagation();
  }
  legacy =  
  {
    title: "Title of Legacy",
    date: "2018-09-05 20:28:04",
    author: "email@domain.com",
    categories: [
        {
            id: "1",
            category: "Ham"
        },
        {
            id: "2",
            category: "Suspect"
        }
    ],
    media: [],
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  }
  options = 
  [
    {
      "id": "1",
      "category": "Ham"
    },
    {
      "id": "2",
      "category": "Suspect"
    },
    {
      "id": "3",
      "category": "Marketing"
    },
    {
      "id": "4",
      "category": "Spam"
    }
  ]

  save = {
  posts:
    [
      {
        post: 1,
        categories: [1]
      }
    ]
  }
}
