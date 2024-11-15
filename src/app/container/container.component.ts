import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SignInComponent } from '../sign-in/sign-in.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [CommonModule, SignInComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {
  bgImagesPath: string[] = [
    'assets/images/agung-pratamah-1430085-unsplash.jpeg',
    'assets/images/andrew-alexander-88432-unsplash.jpeg',
    'assets/images/annie-spratt-100766-unsplash.jpeg',
    'assets/images/arnaud-steckle-1401766-unsplash.jpeg',
    'assets/images/arnaud-steckle-1401805-unsplash.jpeg',
    'assets/images/bjorn-snelders-1415617-unsplash.jpeg',
    'assets/images/bogdan-pasca-1467256-unsplash.jpeg',
    'assets/images/charlotte-coneybeer-100944-unsplash.jpeg',
    'assets/images/christian-widell-93945-unsplash.jpeg',
    'assets/images/chuttersnap-1522357-unsplash.jpeg',
    'assets/images/dale-de-vera-1349670-unsplash.jpeg',
    'assets/images/dan-freeman-402614-unsplash.jpeg',
    'assets/images/eddy-boom-94029-unsplash.jpeg',
    'assets/images/hoodh-ahmed-1325762-unsplash.jpeg',
    'assets/images/hoodh-ahmed-1349469-unsplash.jpeg',
    'assets/images/humphrey-muleba-1468522-unsplash.jpeg',
    'assets/images/ivan-bandura-1547828-unsplash.jpeg',
    'assets/images/ivan-bandura-1584479-unsplash.jpeg',
    'assets/images/jakub-gorajek-1542744-unsplash.jpeg',
    'assets/images/jay-jay-66427-unsplash.jpeg',
    'assets/images/jess-aston-1326755-unsplash.jpeg',
    'assets/images/john-salzarulo-138024-unsplash.jpeg',
    'assets/images/maria-duda-1583436-unsplash.jpeg',
    'assets/images/marius-badstuber-1578567-unsplash.jpeg',
    'assets/images/mike-erskine-98419-unsplash.jpeg',
    'assets/images/oliver-ash-1279413-unsplash.jpeg',
    'assets/images/patti-black-38177-unsplash.jpeg',
    'assets/images/pixpoetry-1228485-unsplash.jpeg',
    'assets/images/radek-1323403-unsplash.jpeg',
    'assets/images/ramdan-authentic-1344967-unsplash.jpeg',
    'assets/images/renemari-padillo-1463252-unsplash.jpeg',
    'assets/images/ren-ran-232078-unsplash.jpeg',
    'assets/images/ren-ran-232079-unsplash.jpeg',
    'assets/images/rolands-varsbergs-1436746-unsplash.jpeg',
    'assets/images/tim-marshall-1392826-unsplash.jpeg',
    'assets/images/vladimir-malyutin-94700-unsplash.jpeg',
  ];
}
