import {Component} from '@angular/core';
import {MatCard} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';
import {MatChip, MatChipSet} from '@angular/material/chips';
import {MatAnchor} from '@angular/material/button';

@Component({
  selector: 'app-portfolio',
  imports: [
    MatCard,
    MatIcon,
    MatChipSet,
    MatChip,
    MatAnchor,
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {

  public contacts = [
    {
      name: 'mail',
      link: 'ipogorenko@yandex.ru'
    },
    {
      name: 'code',
      link: 'https://github.com/IvanPogorenko'
    },
    {
      name: 'telegram',
      link: '@Duduvvka'
    }
  ]

  public skills: string[] = [
    'Angular',
    'React',
    'TypeScript',
    'JavaScript',
    'SCSS',
    'HTML5',
    'RxGs',
    'NGXS',
    'NgRx',
    'NestJS',
    'PostgreSQL',
    'REST API',
    'Git'
  ];

  public projects = [
    {
      name: 'MoonPie',
      description: 'Интернет-магазин медицинской одежды с полноценной архитектурой frontend + backend. Именно этот проект позволил мне поступить в магистратуру ИТМО без экзаменов',
      stack: 'Angular, NGXS, NestJS, PostgreSQL',
      link: 'https://github.com/IvanPogorenko/moonpie'
    },
    {
      name: 'EvoCourse',
      description: 'Профильный курс для изучения Angular от компании Эволента',
      stack: 'Angular, TypeScript',
      link: 'https://github.com/IvanPogorenko/EvoCourse'
    },
    {
      name: 'Другие проекты',
      description: 'Дополнительно другие работы и проекты можете посмотреть в моем аккаунте GitHub',
      stack: 'Angular, React, TypeScript, JavaScript',
      link: 'https://github.com/IvanPogorenko'
    }
  ];


}
