import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SaudiToastComponent } from './saudi-toast.component';

describe('SaudiToastComponent', () => {
  let component: SaudiToastComponent;
  let fixture: ComponentFixture<SaudiToastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaudiToastComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SaudiToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
