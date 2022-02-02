import { LightningElement } from 'lwc';

export default class IterationDemo extends LightningElement {
    employeeData = [
        {
            Id: '001',
            Name: 'Vito Corleone',
            email: 'vitolCorleone@Corleone.com',
        },
        {
            Id: '002',
            Name: 'Michael Corleone',
            email: 'michaelCorleone@Corleone.com',
        },
        {
            Id: '003',
            Name: '	Anthony Corleone',
            email: 'anthonyCorleone@Corleone.com',
        },
    ];

}