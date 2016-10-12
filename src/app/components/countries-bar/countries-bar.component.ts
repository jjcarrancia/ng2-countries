import { Component, Input, Output, EventEmitter }   from '@angular/core';

@Component({
    selector: 'app-countries-bar',
    templateUrl: './countries-bar.component.html',
    styleUrls: [ './countries-bar.component.css' ],	
})

export class CountriesBarComponent {
    @Input() a2Countries: string[];
    @Input() flagHeight: number = 30;
    @Input() flagWidth: number = 30;

    @Output() flagClick = new EventEmitter();

    public constructor() { }

    private _onFlagClick(alpha2) {
        console.log('CountriesBarComponent::_onFlagClick', alpha2);
        this.flagClick.emit(alpha2);
    }
}
