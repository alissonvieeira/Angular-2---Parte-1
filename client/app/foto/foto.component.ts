import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'foto',
    templateUrl: './foto.component.html'
})

export class FotoComponet {

    @Input() titulo;
    @Input() url;   

 }
