import { ChangeDetectorRef, Component, OnDestroy, inject } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
  ],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
})
export class SideNavComponent {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  constructor(
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher
  ) {
    this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  backToDashboard(): void {
    this.router.navigate(['home', 'dashboard']);
  }
  backToFelinos(): void {
    this.router.navigate(['home', 'felinos']);
  }
  backToVacinas(): void {
    this.router.navigate(['home', 'vacinas']);
  }
  backToProcedimentos(): void {
    this.router.navigate(['home', 'procedimentos']);
  }
  backToVoluntarios(): void {
    this.router.navigate(['home', 'voluntarios']);
  }
  backToUsuarios(): void {
    this.router.navigate(['home', 'usuarios']);
  }
}
