import { Component } from '@angular/core';


@Component({
  selector: 'drop-container',
  template: `
    <div mwlDraggable dropData="content" dragActiveClass="drag-active">
      Drag me!
    </div>
    <div
      mwlDroppable
      (drop)="onDrop($event)"
      dragOverClass="drop-over-active">
      <span [hidden]="droppedData">Drop here</span>
      <span [hidden]="!droppedData">Container now contain: "{{ droppedData }}"!</span>
    </div>
  `
   styles: [
    `
      [mwlDraggable] {
        background-color: red;
        width: 200px;
        height: 200px;
        position: relative;
        z-index: 2;
        float: left;
        margin-right: 10px;
        cursor: move;
      }
      [mwlDroppable] {
        background-color: green;
        width: 400px;
        height: 400px;
        z-index: 1;
        position: relative;
        top: 50px;
        left: 100px;
      }
      [mwlDraggable],
      [mwlDroppable] {
        color: white;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .drop-over-active {
        border: dashed 1px black;
        background-color: lightgreen;
      }
      .drag-active {
        z-index: 3;
      }
    `
  ]
})

export class BodyContainer {
  droppedData: string = '';

  onDrop({ dropData }: DropEvent<string>): void {
    this.droppedData = dropData;
    setTimeout(() => {
      this.droppedData = '';
    }, 2000);
  }
}
