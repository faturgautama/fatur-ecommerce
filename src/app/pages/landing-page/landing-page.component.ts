import { Component, OnDestroy, OnInit } from '@angular/core';
import { LndBaseComponent } from "../../components/layout/landing/lnd-base/lnd-base.component";
import { CarouselModule } from 'primeng/carousel';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-landing-page',
    standalone: true,
    imports: [
        LndBaseComponent,
    ],
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit, OnDestroy {

    Destroy$ = new Subject();

    HomeBanners = [
        { title: 'Banner 1', image: '../../../assets/image/sample_banner.png' },
        { title: 'Banner 2', image: '../../../assets/image/sample_banner.png' },
        { title: 'Banner 3', image: '../../../assets/image/sample_banner.png' },
    ];

    ActiveBannersIndex = 0;

    constructor() { }

    ngOnInit(): void {

    }

    ngOnDestroy(): void {
        this.Destroy$.next(0);
        this.Destroy$.complete();
    }

    handlePrevBanner(currentIndex: number) {
        if (currentIndex != 0) {
            this.ActiveBannersIndex -= 1;
        };
    }

    handleNextBanner(currentIndex: number) {
        if (currentIndex != (this.HomeBanners.length - 1)) {
            this.ActiveBannersIndex += 1;
        };
    }
}
