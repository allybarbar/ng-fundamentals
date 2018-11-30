import {Component, Input, Output, EventEmitter} from "@angular/core";
import {IEvent} from './shared/event.model'

@Component({
    selector: 'event-thumbnail',
    templateUrl:"./event-thumbnail.component.html",
    styles:[`
    .thumbnail { min-height: 250px; }
    .pad-left { margin-left:10px;}
    .well div{ color: #bbb;}`]
})
export class EventThumbnailComponent {

    @Input() event:IEvent
    @Output() eventClick = new EventEmitter()

}

