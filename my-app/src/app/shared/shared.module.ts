import {NgModule} from '@angular/core';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CoreModule,
  ],
  declarations: [
    TopBarComponent,
  ],
  providers: [

  ],
  exports: [
    TopBarComponent,
  ],
})
export class SharedModule {}