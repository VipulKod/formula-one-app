import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getF1Data(){
    return this.data;
  }

  getDriverData(){
    return this.data.map((team) => {
      return team.drivers.driver;
    })
  }

  private data =  [
    {
      team: 'Mercedes',
      drivers: {
        driver: [
          {
            name: 'Lewis Hamilton',
            number: '44',
            team: 'Mercedes',
          },
          {
            name: 'Valtteri Bottas',
            number: '77',
            team: 'Mercedes',
          }
        ]
      },
      class: 'mercedes',
      img: 'https://www.formula1.com/content/dam/fom-website/teams/2020/mercedes.png.transform/2col/image.png'
      
    },
    {
      team: 'Red Bull',
      drivers: {
        driver: [
          {
            name: 'Max Verstappen',
            number: '33',
            team: 'Red Bull',
          },
          {
            name: 'Alex Albon',
            number: '23',
            team: 'Red Bull',
          }
        ]
      },
      class: 'red-bull',
      img: 'https://www.formula1.com/content/dam/fom-website/teams/2020/red-bull-racing.png.transform/2col/image.png'
    },
    {
      team: 'Ferrari',
      drivers: {
        driver: [
          {
            name: 'Charles Leclerc ',
            number: '16',
            team: 'Ferrari',
          },
          {
            name: 'Sebastian Vettel',
            number: '05',
            team: 'Ferrari',
          }
        ]
      },
      class: 'ferrari',
      img: 'https://www.formula1.com/content/dam/fom-website/teams/2020/ferrari.png.transform/2col/image.png' 
    },
    {
      team: 'McLaren',
      drivers: {
        driver: [
          {
            name: 'Carlos Sainz',
            number: '55',
            team: 'McLaren',
            
          },
          {
            name: 'Lando Norris',
            number: '04',
            team: 'McLaren',
          }
        ]
      },
      class: 'mclaren',
      img: 'https://www.formula1.com/content/dam/fom-website/teams/2020/mclaren.png.transform/2col/image.png' 
    },
    {
      team: 'Renault',
      drivers: {
        driver: [
          {
            name: 'Lewis Hamilton',
            number: '44',
            team: 'Renault',
          },
          {
            name: 'Valtteri Bottas',
            number: '24',
            team: 'Renault',
          }
        ]
      },
      class: 'renault',
      img: 'https://www.formula1.com/content/dam/fom-website/teams/2020/renault.png.transform/2col/image.png'
    },
    {
      team: 'Alpha Tauri',
      drivers: {
        driver: [
          {
            name: 'Lewis Hamilton',
            number: '44',
            team: 'Alpha Tauri',
          },
          {
            name: 'Valtteri Bottas',
            number: '24',
            team: 'Alpha Tauri',
          }
        ]
      },
      class: 'alpha-tauri',
      img: 'https://www.formula1.com/content/dam/fom-website/teams/2020/alphatauri.png.transform/2col/image.png' 
    },
    {
      team: 'Racing Point',
      drivers: {
        driver: [
          {
            name: 'Lewis Hamilton',
            number: '44',
            team: 'Racing Point',
          },
          {
            name: 'Valtteri Bottas',
            number: '24',
            team: 'Racing Point',
          }
        ]
      },
      class: 'racing-point',
      img: 'https://www.formula1.com/content/dam/fom-website/teams/2020/racing-point.png.transform/2col/image.png' 
    },
    {
      team: 'Alfa Romeo',
      drivers: {
        driver: [
          {
            name: 'Lewis Hamilton',
            number: '44',
            team: 'Alfa Romeo',
          },
          {
            name: 'Valtteri Bottas',
            number: '24',
            team: 'Alfa Romeo',
          }
        ]
      },
      class: 'alfa-romeo' ,
      img: 'https://www.formula1.com/content/dam/fom-website/teams/2020/alfa-romeo-racing.png.transform/2col/image.png'
    },
    {
      team: 'Haas',
      drivers: {
        driver: [
          {
            name: 'Lewis Hamilton',
            number: '44',
            team: 'Haas',
          },
          {
            name: 'Valtteri Bottas',
            number: '24',
            team: 'Haas',
          }
        ]
      },
      class: 'haas',
      img: 'https://www.formula1.com/content/dam/fom-website/teams/2020/haas-f1-team.png.transform/2col/image.png' 
    },
    {
      team: 'Williams',
      drivers: {
        driver: [
          {
            name: 'Lewis Hamilton',
            number: '44',
            team: 'Williams',
          },
          {
            name: 'Valtteri Bottas',
            number: '24',
            team: 'Williams',
          }
        ]
      },
      class: 'williams',
      img: 'https://www.formula1.com/content/dam/fom-website/teams/2020-Team-Pages/teamcar-williams.png.transform/2col/image.png'
    },
  ]
}
