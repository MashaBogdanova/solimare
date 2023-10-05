interface IContacts {
  address: string;
  telephone: string;
  email: string;
  booksyLink: string;
  facebookLink: string;
  instagramLink: string;
  googleMapName: string;
  googleMapDescription: string;
  googleMapLink: string;
  weekHours: string;
  weekendHours: string;
  latitude: number;
  longitude: number;
}

const contacts: IContacts = {
  address: 'Mandarynki 12, 02-796 Warszawa',
  telephone: '+48 506 815 888',
  email: 'sollsolimare@gmail.com',
  booksyLink:
    'https://booksy.com/pl-pl/125722_grota-solna-solimare_zdrowie_3_warszawa',
  facebookLink:
    'https://www.facebook.com/people/Solimare-Grota-Solna-Sauna-IR/100078264042460/',
  instagramLink: 'https://www.instagram.com/solimare_grota_solna_sauna_ir/',
  googleMapName: 'Solimare',
  googleMapDescription: 'Grota solna & sauna-about infrared',
  googleMapLink:
    'https://www.google.com/maps/place/Solimare+grota+solna+%26+sauna+infrared/@52.1455221,21.0587626,17z/data=!4m14!1m7!3m6!1s0x47192df09798dfd3:0xd720b602a6e6818!2sSolimare+grota+solna+%26+sauna+infrared!8m2!3d52.1455188!4d21.0613375!16s%2Fg%2F11swrj72cw!3m5!1s0x47192df09798dfd3:0xd720b602a6e6818!8m2!3d52.1455188!4d21.0613375!16s%2Fg%2F11swrj72cw?entry=ttu',
  weekHours: '16:00 - 21:00',
  weekendHours: '11:00 - 18:00',
  latitude: 52.14555955343468,
  longitude: 21.061327254320435,
};

export default contacts;
