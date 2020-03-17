import { Injectable } from '@angular/core';

export interface IQuestions {
  q1: string;
  q2: string;
}

@Injectable({
  providedIn: 'root',
})
export class Questions {
  q1: 'I prefer long walks on the beach';
  q2: 'I prefer long walks in the woods';
};
{
  q1: 'I am a dog person';
  q2: 'I am a cat person';
};
{
  q1: 'I am an introvert';
  q2: 'I am an extrovert';
}

