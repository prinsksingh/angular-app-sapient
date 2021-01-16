import {Component, OnInit} from '@angular/core';
import {SpacexLaunchProgramService} from './spacex-launch-program.service';
import {MatSnackBar} from '@angular/material/snack-bar';

export class SpeceXDto {
    flight_number?: number;
    mission_name?: string;
    mission_id?: Array<string> = [];
    launch_year?: string;
    launch_success?: boolean;
    rocket?: {
      first_stage?: {
        cores?: [
          land_success?: any
        ]
      }
    }
  }
  

@Component({
    selector: 'app-spacex-launch-programs',
    templateUrl: './spacex-launch-programs.component.html',
    styleUrls: ['./spacex-launch-programs.component.css']
})
export class SpacexLaunchProgramsComponent implements OnInit {
    title = 'SpaceX Launch Programs';
    spaceXProgramList: SpeceXDto[] = [];
    yearList: Array<any> = [];
    launchStatus: Array<any> = [];
    landingStatus: Array<any> = [];
    yearValue: any;
    launchFlag = true;
    landingFlag = true;
    developerName = 'Prins Kumar';

    constructor(private spacexLaunchProgramService: SpacexLaunchProgramService, private snackBar: MatSnackBar) {
    }

    ngOnInit(): void {
        this.getAllYear();
        this.allLaunchPrograms();
        this.launchStatus = [
            {status: 'True', selected: false},
            {status: 'False', selected: false}
        ];
        this.landingStatus = [
            {status: 'True', selected: false},
            {status: 'False', selected: false}
        ];
    }

    getAllYear(): void {
        this.yearList = [
            {year: '2006', selected: false},
            {year: '2007', selected: false},
            {year: '2008', selected: false},
            {year: '2009', selected: false},
            {year: '2010', selected: false},
            {year: '2011', selected: false},
            {year: '2012', selected: false},
            {year: '2013', selected: false},
            {year: '2014', selected: false},
            {year: '2015', selected: false},
            {year: '2016', selected: false},
            {year: '2017', selected: false},
            {year: '2018', selected: false},
            {year: '2019', selected: false},
            {year: '2020', selected: false},
            {year: '2021', selected: false},
        ];
    }

    allLaunchPrograms(): void {
        this.spacexLaunchProgramService.getAllPrograms().subscribe(response => {
            this.spaceXProgramList = response;
            if(this.spaceXProgramList.length == 0) {
                this.snackBar.open('Data not found!', '', {
                    duration: 2000,
                });
            }
        }, (err) => {
            this.snackBar.open(err.message, '', {
                duration: 2000,
            });
        });
    }

    yearFilter(year): void {
        this.spaceXProgramList = [];
        this.yearValue = '';
        if (year.selected) {
            this.yearList.map(res => res.selected = false);
        } else {
            this.yearList.map(res => res.selected = false);
            year.selected = !year.selected;
            this.yearValue = year.year;
            this.getFilter();
        }
    }

    launchFilter(status): void {
        this.spaceXProgramList = [];
        if (status.selected) {
            this.launchStatus.map(res => res.selected = false);
        } else {
            this.launchStatus.map(res => res.selected = false);
            status.selected = !status.selected;
            if (status.status === 'True') {
                this.launchFlag = true;
                this.getFilter();
            } else {
                this.launchFlag = false;
                this.getFilter();
            }
        }
    }

    landingFilter(status): void {
        this.spaceXProgramList = [];
        if (status.selected) {
            this.landingStatus.map(res => res.selected = false);
        } else {
            this.landingStatus.map(res => res.selected = false);
            status.selected = !status.selected;
            if (status.status === 'True') {
                this.landingFlag = true;
                this.getFilter();
            } else {
                this.landingFlag = false;
                this.getFilter();
            }
        }
    }

    getFilter(): void {
        this.spacexLaunchProgramService.getCommonFilter(this.yearValue, this.launchFlag, this.landingFlag).subscribe(response => {
            this.spaceXProgramList = response;
            if(this.spaceXProgramList.length == 0) {
                this.snackBar.open('Data not found!', '', {
                    duration: 2000,
                });
            }
        }, (err) => {
            this.snackBar.open(err.message, '', {
                duration: 2000,
            });
        });
    }

}
