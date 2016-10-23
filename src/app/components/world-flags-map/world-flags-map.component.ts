import { Component, Inject }              from '@angular/core';

import { COUNTRIES_DATA, 
         Countries }         from '../../modules/shared/models';

@Component({
    selector: 'world-flags-map',
    templateUrl: './world-flags-map.component.html',
    styleUrls: [ './world-flags-map.component.css' ],	
})

export class WorldFlagsMapComponent {
    private _countriesKeys: string[];
    private _mapRelationFactor = 3;
    private _wholeWidth = 360 * this._mapRelationFactor;
    private _wholeHeight = 180 * this._mapRelationFactor;

    constructor(@Inject(COUNTRIES_DATA) private _countriesData: Countries) { }

    public ngOnInit() {
        this._countriesKeys = _.keys(this._countriesData);
    }

    private _getCountryTop(alpha2: string) {
        const imageAlignment = 15 / this._mapRelationFactor;

        const latStr = this._countriesData[alpha2].geo.latitude_dec;
        const lat = +latStr;
        let top = 90 - lat - imageAlignment;

        return top * this._mapRelationFactor;
    }

    private _getCountryLeft(alpha2: string) {
        const imageAlignment = 15 / this._mapRelationFactor;

        const lonStr = this._countriesData[alpha2].geo.longitude_dec;
        const lon = +lonStr;
        const left = 180 + lon - imageAlignment;

        return left * this._mapRelationFactor;
    }
}
