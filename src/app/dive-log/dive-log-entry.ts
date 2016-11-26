/**
 * @author rmi865 on 11/25/16.
 */

export class DiveLogEntry {
  private _site: string;
  private _location: string;
  private _depth: number;
  private _time: number;

  private static _stockDives: DiveLogEntry [] = [
    {
      site: 'Abu Gotta Ramada',
      location: 'Hurghada, Egypt',
      depth: 72,
      time: 54
    },
    {
      site: 'Ponte Mahoon',
      location: 'Maehbourg, Mauritius',
      depth: 54,
      time: 38
    },
    {
      site: 'Molnar Cave',
      location: 'Budapest, Hungary',
      depth: 98,
      time: 62
    }
  ]

  get site(): string {
    return this._site;
  }

  get location(): string {
    return this._location;
  }

  get depth(): number {
    return this._depth;
  }

  get time(): number {
    return this._time;
  }

  static get stockDives(): DiveLogEntry[] {
    return this._stockDives;
  }


}
