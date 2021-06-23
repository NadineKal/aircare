import City from '../model/city';


export const CITIESAIR = [
  new City('1', 'Hamburg', 
  {summary: [40,45,50,45,48,43,55], 
    month: [[40,45,50,45,48,43,55],
    [40,45,50,45,48,43,55],
    [40,45,50,45,48,43,55],
    [40,45,50,45,48,43,55],
    [40,45,50,45,48,43,55],
    [40,45,50,45,48,43,55],
    [40,45,50,45,48,43,55],
    [40,45,50,45,48,43,55],
    [40,45,50,45,48,43,55],
    [40,45,50,45,48,43,55],
    [40,45,50,45,48,43,55],
    [40,45,50,45,48,43,55]]} , Last7Days()),
  new City('2', 'Berlin', 
  {summary: [39,44,51,47,46,49,55], 
    month: [[39,44,51,47,46,49,55],
    [39,44,51,47,46,49,55],
    [39,44,51,47,46,49,55],
    [39,44,51,47,46,49,55],
    [39,44,51,47,46,49,55],
    [39,44,51,47,46,49,55],
    [39,44,51,47,46,49,55],
    [39,44,51,47,46,49,55],
    [39,44,51,47,46,49,55],
    [39,44,51,47,46,49,55],
    [39,44,51,47,46,49,55],
    [39,44,51,47,46,49,55]]}, Last7Days()),
  new City('3', 'München', 
  {summary: [46,45,51,50,46,49,55], 
    month: [[46,45,51,50,46,49,55],
    [46,45,51,50,46,49,55],
    [46,45,51,50,46,49,55],
    [46,45,51,50,46,49,55],
    [46,45,51,50,46,49,55],
    [46,45,51,50,46,49,55],
    [46,45,51,50,46,49,55],
    [46,45,51,50,46,49,55],
    [46,45,51,50,46,49,55],
    [46,45,51,50,46,49,55],
    [46,45,51,50,46,49,55],
    [46,45,51,50,46,49,55]]}, Last7Days()),
  new City('4', 'Frankfurt', 
  {summary: [49,51,51,50,47,52,58], 
    month: [[49,51,51,50,47,52,58],
    [49,51,51,50,47,52,58],
    [49,51,51,50,47,52,58],
    [49,51,51,50,47,52,58],
    [49,51,51,50,47,52,58],
    [49,51,51,50,47,52,58],
    [49,51,51,50,47,52,58],
    [49,51,51,50,47,52,58],
    [49,51,51,50,47,52,58],
    [49,51,51,50,47,52,58],
    [49,51,51,50,47,52,58],
    [49,51,51,50,47,52,58]]}, Last7Days()),
  new City('5', 'Köln', 
  {summary: [43,46,44,47,49,52,55], 
    month: [[43,46,44,47,49,52,55],
    [43,46,44,47,49,52,55],
    [43,46,44,47,49,52,55],
    [43,46,44,47,49,52,55],
    [43,46,44,47,49,52,55],
    [43,46,44,47,49,52,55],
    [43,46,44,47,49,52,55],
    [43,46,44,47,49,52,55],
    [43,46,44,47,49,52,55],
    [43,46,44,47,49,52,55],
    [43,46,44,47,49,52,55],
    [43,46,44,47,49,52,55]]}, Last7Days())
];

export const CITIESTEMP = [
    new City('1', 'Hamburg', 
    {summary: [9,9.4,9.7,9,9.2,10,10.8], 
      month: [[0.9,0.9,1.7,3,1.6,2.1,5.3],
      [1.5,1.6,2.3,-1.4,2.2,1.4,5.9],
      [4.1,4.4,5.1,7.1,3.1,4.4,5.7],
      [7.7,8.1,8.4,7.7,7.6,11.8,9.6],
      [12.6,13.1,13.4,10.1,13.5,13.8,11.7],
      [15.9,16.4,16.1,13.2,14,16.6,17.6],
      [17.1,17.6,18.3,19.2,18.6,16.8,16.2],
      [16.9,17.6,18.1,17.7,18.4,17.2,20.4],
      [13.8,14.4,14.4,14.7,12.8,15.3,14.5],
      [9.9,10.4,10,9.3,12.9,10.3,11.1],
      [5.5,5.6,5.5,4.9,5.3,5.6,7.7],
      [2.1,2.4,3.1,2.6,0.6,4.9,4.1]]} , Last7Days()),
    new City('2', 'Berlin', 
    {summary: [9.3,9.5,9.7,9.5,9.8,10.7,11.6], 
      month: [[-0.3,-0.1,0.7,2.5,1.5,1.7,4.5],
      [0.7,0.9,1.4,-2.1,2.1,0.1,6.1],
      [4.1,4.3,4.8,6.9,3.7,5.2,5.9],
      [8.6,8.6,8.9,8.6,8.6,13,11.1],
      [13.9,14,14.4,10.7,15.4,15.4,12.8],
      [17.4,17.4,17.1,15,15.1,18.7,19.3],
      [18.7,18.8,19.1,21,20.5,18,18.7],
      [18.2,18.4,18.8,19.1,19.9,18.9,22.1],
      [14.4,14.4,14.4,16.1,13.1,16.2,16],
      [9.9,9.8,9.7,9.6,13.3,10.5,11.3],
      [4.9,5,4.8,5,4.4,5.2,7.1],
      [1.3,1.6,2,2,0.2,4.9,3.7]]}, Last7Days()),
    new City('3', 'München', 
    {summary: [8.1,8.4,9.7,9,9.7,10.4,11], 
      month: [[-1.3,-0.6,0.3,1.3,0.7,1,3.2],
      [0,0.3,1.4,-1.5,3.4,2,6.2],
      [3.6,4.2,5.3,7.3,7,6.4,6.1],
      [7.8,7.7,9.4,8.1,7.7,12.5,12.6],
      [12.3,12.8,14.3,10.1,16.1,15.1,12.9],
      [15.4,15.5,17.2,15.3,15.3,17.2,16.8],
      [17.5,17.8,19.4,20.4,19.2,17.1,20],
      [16.8,17.4,18.9,19.5,19.7,20,20.2],
      [13.6,13.3,14.6,16.6,11.8,16.3,15.8],
      [8.6,8.4,10.1,8.4,13.7,9.3,10],
      [3.3,3.2,4.4,3.6,2.9,4.1,5.9],
      [-0.1,0.6,1.3,-0.7,-0.8,4,2.2]]}, Last7Days()),
    new City('4', 'Frankfurt', 
    {summary: [9.7,10.2,10.5,10.1,10.8,11.4,12.1], 
      month: [[0.7,1.5,1.6,2.7,2.6,2.6,4.1],
      [1.8,2.3,2.4,-1.1,4.7,3,6.5],
      [5.2,6.1,6.4,8.2,6.7,7.6,7.4],
      [9.2,9.5,10.3,9.1,8.8,14,12.9],
      [13.7,14.3,14.7,11.9,16.6,16.3,14.2],
      [17.1,17.3,17.8,15.2,16.4,18.5,18.6],
      [18.9,19.5,20,21.6,20.7,17.7,20.6],
      [18.3,19.1,19.5,21.1,20.5,19.4,22],
      [14.8,14.9,15.2,17.1,13,17,17],
      [9.8,9.8,10.4,9.1,13.4,10.7,11.3],
      [4.7,5,5.6,4.8,4.6,5.4,6.6],
      [1.8,2.6,2.5,1.1,1.4,5.1,4.3]]}, Last7Days()),
    new City('5', 'Köln', 
    {summary: [10.8,11.2,11.5,10.9,11.9,12.1,12.8], 
      month: [[2.8,3.5,3.6,4.2,4.1,3.7,5.9],
      [3.6,4,4,1.1,5.7,4.8,7.4],
      [6.4,7.2,7.4,9.9,7.2,8,8.1],
      [9.9,10.2,10.9,9.9,9.7,14.2,13.3],
      [14.3,14.8,15.1,11.9,17.4,16.2,14.6],
      [17.2,17.3,17.8,14.7,17.3,17.9,19.1],
      [18.8,19.5,20.1,21.1,21.1,17.3,19.2],
      [18.6,19.3,19.5,20.2,21.3,18.8,22.1],
      [15.6,15.6,15.8,17.1,13.9,17.4,16.8],
      [11.6,11.4,11.8,10.8,15.1,12,12.3],
      [6.7,6.8,7.2,6.4,6.6,8.3,9],
      [3.9,4.6,4.4,3.8,3.4,6.3,6.1]]}, Last7Days())
  ];

function Last7Days () {
    return '0123456'.split('').map(function(n) {
        var d = new Date();
        d.setDate(d.getDate() - n);

        return (function(day, month) {
            return [day<10 ? '0'+day : day, month<10 ? '0'+month : month].join('.');
        })(d.getDate(), d.getMonth() + 1);
    }).join(',');
 }

