import { Routes } from '@angular/router';
import { ImageComponent } from './image/image.component';
import { TaskComponent } from './task/task.component';
import { TextComponent } from './text/text.component';

export const routes: Routes = [
  {
    path: '',
    component: TextComponent,
  },
  {
    path: 'img',
    component: ImageComponent,
  },
  {
    path: 'task',
    component: TaskComponent,
  },
];
