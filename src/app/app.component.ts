import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IMenuItem } from '../models/MenuItem';
import menuJson from '../menu.json';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'pub-waiter-helper';

    public constructor(
        private readonly titleService: Title,
    ) {
        this.setTitle('Title 1');
        const menu: IMenuItem[] = menuJson;
        console.log(menu[0].title);
    }

    public setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }
}
