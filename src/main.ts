import './style.css';
import { callback } from './basic/1';
import { DayOfWeek, isWeekend } from './basic/5'

console.log(isWeekend(DayOfWeek.Monday));
console.log(isWeekend(DayOfWeek.Saturday));
console.log(callback(10));
