/* eslint-disable max-lines */
/* eslint-disable quote-props */

const fakeCustomers = [
  {
    'name': 'Customer 1',
    'state': 'MT',
  },
  {
    'name': 'Customer 2',
    'state': 'AM',
  },
  {
    'name': 'Customer 3',
    'state': 'PB',
  },
  {
    'name': 'Customer 4',
    'state': 'SC',
  },
  {
    'name': 'Customer 5',
    'state': 'PR',
  },
  {
    'name': 'Customer 6',
    'state': 'RO',
  },
  {
    'name': 'Customer 7',
    'state': 'AC',
  },
  {
    'name': 'Customer 8',
    'state': 'AP',
  },
  {
    'name': 'Customer 9',
    'state': 'RO',
  },
  {
    'name': 'Customer 10',
    'state': 'GO',
  },
  {
    'name': 'Customer 11',
    'state': 'AM',
  },
  {
    'name': 'Customer 12',
    'state': 'SE',
  },
  {
    'name': 'Customer 13',
    'state': 'PI',
  },
  {
    'name': 'Customer 14',
    'state': 'MA',
  },
  {
    'name': 'Customer 15',
    'state': 'CE',
  },
  {
    'name': 'Customer 16',
    'state': 'AP',
  },
  {
    'name': 'Customer 17',
    'state': 'CE',
  },
  {
    'name': 'Customer 18',
    'state': 'RN',
  },
  {
    'name': 'Customer 19',
    'state': 'SE',
  },
  {
    'name': 'Customer 20',
    'state': 'PB',
  },
  {
    'name': 'Customer 21',
    'state': 'MA',
  },
  {
    'name': 'Customer 22',
    'state': 'DF',
  },
  {
    'name': 'Customer 23',
    'state': 'RN',
  },
  {
    'name': 'Customer 24',
    'state': 'MT',
  },
  {
    'name': 'Customer 25',
    'state': 'ES',
  },
  {
    'name': 'Customer 26',
    'state': 'SC',
  },
  {
    'name': 'Customer 27',
    'state': 'CE',
  },
  {
    'name': 'Customer 28',
    'state': 'RO',
  },
  {
    'name': 'Customer 29',
    'state': 'MS',
  },
  {
    'name': 'Customer 30',
    'state': 'MT',
  },
  {
    'name': 'Customer 31',
    'state': 'RN',
  },
  {
    'name': 'Customer 32',
    'state': 'MG',
  },
  {
    'name': 'Customer 33',
    'state': 'PE',
  },
  {
    'name': 'Customer 34',
    'state': 'AL',
  },
  {
    'name': 'Customer 35',
    'state': 'PR',
  },
  {
    'name': 'Customer 36',
    'state': 'SE',
  },
  {
    'name': 'Customer 37',
    'state': 'CE',
  },
  {
    'name': 'Customer 38',
    'state': 'PE',
  },
  {
    'name': 'Customer 39',
    'state': 'RJ',
  },
  {
    'name': 'Customer 40',
    'state': 'PE',
  },
  {
    'name': 'Customer 41',
    'state': 'MS',
  },
  {
    'name': 'Customer 42',
    'state': 'MT',
  },
  {
    'name': 'Customer 43',
    'state': 'PE',
  },
  {
    'name': 'Customer 44',
    'state': 'BA',
  },
  {
    'name': 'Customer 45',
    'state': 'PR',
  },
  {
    'name': 'Customer 46',
    'state': 'CE',
  },
  {
    'name': 'Customer 47',
    'state': 'PR',
  },
  {
    'name': 'Customer 48',
    'state': 'PE',
  },
  {
    'name': 'Customer 49',
    'state': 'RO',
  },
  {
    'name': 'Customer 50',
    'state': 'CE',
  },
  {
    'name': 'Customer 51',
    'state': 'MT',
  },
  {
    'name': 'Customer 52',
    'state': 'AC',
  },
  {
    'name': 'Customer 53',
    'state': 'GO',
  },
  {
    'name': 'Customer 54',
    'state': 'AC',
  },
  {
    'name': 'Customer 55',
    'state': 'PB',
  },
  {
    'name': 'Customer 56',
    'state': 'SP',
  },
  {
    'name': 'Customer 57',
    'state': 'AL',
  },
  {
    'name': 'Customer 58',
    'state': 'RR',
  },
  {
    'name': 'Customer 59',
    'state': 'AC',
  },
  {
    'name': 'Customer 60',
    'state': 'RO',
  },
  {
    'name': 'Customer 61',
    'state': 'MG',
  },
  {
    'name': 'Customer 62',
    'state': 'PA',
  },
  {
    'name': 'Customer 63',
    'state': 'RJ',
  },
  {
    'name': 'Customer 64',
    'state': 'MT',
  },
  {
    'name': 'Customer 65',
    'state': 'MS',
  },
  {
    'name': 'Customer 66',
    'state': 'PE',
  },
  {
    'name': 'Customer 67',
    'state': 'SE',
  },
  {
    'name': 'Customer 68',
    'state': 'PI',
  },
  {
    'name': 'Customer 69',
    'state': 'GO',
  },
  {
    'name': 'Customer 70',
    'state': 'MG',
  },
  {
    'name': 'Customer 71',
    'state': 'DF',
  },
  {
    'name': 'Customer 72',
    'state': 'MA',
  },
  {
    'name': 'Customer 73',
    'state': 'PI',
  },
  {
    'name': 'Customer 74',
    'state': 'RS',
  },
  {
    'name': 'Customer 75',
    'state': 'PA',
  },
  {
    'name': 'Customer 76',
    'state': 'DF',
  },
  {
    'name': 'Customer 77',
    'state': 'DF',
  },
  {
    'name': 'Customer 78',
    'state': 'AC',
  },
  {
    'name': 'Customer 79',
    'state': 'MT',
  },
  {
    'name': 'Customer 80',
    'state': 'PE',
  },
  {
    'name': 'Customer 81',
    'state': 'RS',
  },
  {
    'name': 'Customer 82',
    'state': 'PI',
  },
  {
    'name': 'Customer 83',
    'state': 'PA',
  },
  {
    'name': 'Customer 84',
    'state': 'DF',
  },
  {
    'name': 'Customer 85',
    'state': 'RJ',
  },
  {
    'name': 'Customer 86',
    'state': 'SC',
  },
  {
    'name': 'Customer 87',
    'state': 'MG',
  },
  {
    'name': 'Customer 88',
    'state': 'CE',
  },
  {
    'name': 'Customer 89',
    'state': 'MS',
  },
  {
    'name': 'Customer 90',
    'state': 'ES',
  },
  {
    'name': 'Customer 91',
    'state': 'CE',
  },
  {
    'name': 'Customer 92',
    'state': 'SP',
  },
  {
    'name': 'Customer 93',
    'state': 'SE',
  },
  {
    'name': 'Customer 94',
    'state': 'PR',
  },
  {
    'name': 'Customer 95',
    'state': 'SC',
  },
  {
    'name': 'Customer 96',
    'state': 'DF',
  },
  {
    'name': 'Customer 97',
    'state': 'RN',
  },
  {
    'name': 'Customer 98',
    'state': 'DF',
  },
  {
    'name': 'Customer 99',
    'state': 'AL',
  },
  {
    'name': 'Customer 100',
    'state': 'AC',
  },
  {
    'name': 'Customer 101',
    'state': 'SC',
  },
  {
    'name': 'Customer 102',
    'state': 'SE',
  },
  {
    'name': 'Customer 103',
    'state': 'PA',
  },
  {
    'name': 'Customer 104',
    'state': 'ES',
  },
  {
    'name': 'Customer 105',
    'state': 'MG',
  },
  {
    'name': 'Customer 106',
    'state': 'AP',
  },
  {
    'name': 'Customer 107',
    'state': 'MS',
  },
  {
    'name': 'Customer 108',
    'state': 'MG',
  },
  {
    'name': 'Customer 109',
    'state': 'CE',
  },
  {
    'name': 'Customer 110',
    'state': 'SC',
  },
  {
    'name': 'Customer 111',
    'state': 'BA',
  },
  {
    'name': 'Customer 112',
    'state': 'PR',
  },
  {
    'name': 'Customer 113',
    'state': 'RS',
  },
  {
    'name': 'Customer 114',
    'state': 'MA',
  },
  {
    'name': 'Customer 115',
    'state': 'SC',
  },
  {
    'name': 'Customer 116',
    'state': 'PI',
  },
  {
    'name': 'Customer 117',
    'state': 'AC',
  },
  {
    'name': 'Customer 118',
    'state': 'AP',
  },
  {
    'name': 'Customer 119',
    'state': 'SC',
  },
  {
    'name': 'Customer 120',
    'state': 'DF',
  },
  {
    'name': 'Customer 121',
    'state': 'GO',
  },
  {
    'name': 'Customer 122',
    'state': 'AM',
  },
  {
    'name': 'Customer 123',
    'state': 'AC',
  },
  {
    'name': 'Customer 124',
    'state': 'ES',
  },
  {
    'name': 'Customer 125',
    'state': 'RN',
  },
  {
    'name': 'Customer 126',
    'state': 'AP',
  },
  {
    'name': 'Customer 127',
    'state': 'DF',
  },
  {
    'name': 'Customer 128',
    'state': 'SP',
  },
  {
    'name': 'Customer 129',
    'state': 'MG',
  },
  {
    'name': 'Customer 130',
    'state': 'GO',
  },
  {
    'name': 'Customer 131',
    'state': 'TO',
  },
  {
    'name': 'Customer 132',
    'state': 'MT',
  },
  {
    'name': 'Customer 133',
    'state': 'RS',
  },
  {
    'name': 'Customer 134',
    'state': 'MT',
  },
  {
    'name': 'Customer 135',
    'state': 'DF',
  },
  {
    'name': 'Customer 136',
    'state': 'MT',
  },
  {
    'name': 'Customer 137',
    'state': 'SC',
  },
  {
    'name': 'Customer 138',
    'state': 'MT',
  },
  {
    'name': 'Customer 139',
    'state': 'MT',
  },
  {
    'name': 'Customer 140',
    'state': 'PE',
  },
  {
    'name': 'Customer 141',
    'state': 'RS',
  },
  {
    'name': 'Customer 142',
    'state': 'PA',
  },
  {
    'name': 'Customer 143',
    'state': 'RS',
  },
  {
    'name': 'Customer 144',
    'state': 'RO',
  },
  {
    'name': 'Customer 145',
    'state': 'PI',
  },
  {
    'name': 'Customer 146',
    'state': 'PB',
  },
  {
    'name': 'Customer 147',
    'state': 'TO',
  },
  {
    'name': 'Customer 148',
    'state': 'AL',
  },
  {
    'name': 'Customer 149',
    'state': 'PA',
  },
  {
    'name': 'Customer 150',
    'state': 'AM',
  },
  {
    'name': 'Customer 151',
    'state': 'RO',
  },
  {
    'name': 'Customer 152',
    'state': 'RJ',
  },
  {
    'name': 'Customer 153',
    'state': 'GO',
  },
  {
    'name': 'Customer 154',
    'state': 'SC',
  },
  {
    'name': 'Customer 155',
    'state': 'RN',
  },
  {
    'name': 'Customer 156',
    'state': 'MA',
  },
  {
    'name': 'Customer 157',
    'state': 'AM',
  },
  {
    'name': 'Customer 158',
    'state': 'AL',
  },
  {
    'name': 'Customer 159',
    'state': 'DF',
  },
  {
    'name': 'Customer 160',
    'state': 'AC',
  },
  {
    'name': 'Customer 161',
    'state': 'CE',
  },
  {
    'name': 'Customer 162',
    'state': 'RS',
  },
  {
    'name': 'Customer 163',
    'state': 'AC',
  },
  {
    'name': 'Customer 164',
    'state': 'MG',
  },
  {
    'name': 'Customer 165',
    'state': 'SC',
  },
  {
    'name': 'Customer 166',
    'state': 'PA',
  },
  {
    'name': 'Customer 167',
    'state': 'PA',
  },
  {
    'name': 'Customer 168',
    'state': 'MS',
  },
  {
    'name': 'Customer 169',
    'state': 'RS',
  },
  {
    'name': 'Customer 170',
    'state': 'RO',
  },
  {
    'name': 'Customer 171',
    'state': 'AL',
  },
  {
    'name': 'Customer 172',
    'state': 'PB',
  },
  {
    'name': 'Customer 173',
    'state': 'AC',
  },
  {
    'name': 'Customer 174',
    'state': 'SC',
  },
  {
    'name': 'Customer 175',
    'state': 'RS',
  },
  {
    'name': 'Customer 176',
    'state': 'MG',
  },
  {
    'name': 'Customer 177',
    'state': 'DF',
  },
  {
    'name': 'Customer 178',
    'state': 'DF',
  },
  {
    'name': 'Customer 179',
    'state': 'RO',
  },
  {
    'name': 'Customer 180',
    'state': 'PR',
  },
  {
    'name': 'Customer 181',
    'state': 'SP',
  },
  {
    'name': 'Customer 182',
    'state': 'GO',
  },
  {
    'name': 'Customer 183',
    'state': 'GO',
  },
  {
    'name': 'Customer 184',
    'state': 'GO',
  },
  {
    'name': 'Customer 185',
    'state': 'BA',
  },
  {
    'name': 'Customer 186',
    'state': 'MS',
  },
  {
    'name': 'Customer 187',
    'state': 'SP',
  },
  {
    'name': 'Customer 188',
    'state': 'SE',
  },
  {
    'name': 'Customer 189',
    'state': 'MS',
  },
  {
    'name': 'Customer 190',
    'state': 'AC',
  },
  {
    'name': 'Customer 191',
    'state': 'DF',
  },
  {
    'name': 'Customer 192',
    'state': 'MS',
  },
  {
    'name': 'Customer 193',
    'state': 'SE',
  },
  {
    'name': 'Customer 194',
    'state': 'AM',
  },
  {
    'name': 'Customer 195',
    'state': 'MT',
  },
  {
    'name': 'Customer 196',
    'state': 'AC',
  },
  {
    'name': 'Customer 197',
    'state': 'MG',
  },
  {
    'name': 'Customer 198',
    'state': 'ES',
  },
  {
    'name': 'Customer 199',
    'state': 'PR',
  },
  {
    'name': 'Customer 200',
    'state': 'ES',
  },
  {
    'name': 'Customer 201',
    'state': 'PR',
  },
  {
    'name': 'Customer 202',
    'state': 'MG',
  },
  {
    'name': 'Customer 203',
    'state': 'MG',
  },
  {
    'name': 'Customer 204',
    'state': 'MA',
  },
  {
    'name': 'Customer 205',
    'state': 'AL',
  },
  {
    'name': 'Customer 206',
    'state': 'MG',
  },
  {
    'name': 'Customer 207',
    'state': 'PA',
  },
  {
    'name': 'Customer 208',
    'state': 'RR',
  },
  {
    'name': 'Customer 209',
    'state': 'AL',
  },
  {
    'name': 'Customer 210',
    'state': 'PA',
  },
  {
    'name': 'Customer 211',
    'state': 'AM',
  },
  {
    'name': 'Customer 212',
    'state': 'TO',
  },
  {
    'name': 'Customer 213',
    'state': 'RR',
  },
  {
    'name': 'Customer 214',
    'state': 'MA',
  },
  {
    'name': 'Customer 215',
    'state': 'MS',
  },
  {
    'name': 'Customer 216',
    'state': 'AL',
  },
  {
    'name': 'Customer 217',
    'state': 'PI',
  },
  {
    'name': 'Customer 218',
    'state': 'RS',
  },
  {
    'name': 'Customer 219',
    'state': 'ES',
  },
  {
    'name': 'Customer 220',
    'state': 'MT',
  },
  {
    'name': 'Customer 221',
    'state': 'BA',
  },
  {
    'name': 'Customer 222',
    'state': 'PA',
  },
  {
    'name': 'Customer 223',
    'state': 'RJ',
  },
  {
    'name': 'Customer 224',
    'state': 'AM',
  },
  {
    'name': 'Customer 225',
    'state': 'AP',
  },
  {
    'name': 'Customer 226',
    'state': 'RO',
  },
  {
    'name': 'Customer 227',
    'state': 'MT',
  },
  {
    'name': 'Customer 228',
    'state': 'CE',
  },
  {
    'name': 'Customer 229',
    'state': 'DF',
  },
  {
    'name': 'Customer 230',
    'state': 'MT',
  },
  {
    'name': 'Customer 231',
    'state': 'PE',
  },
  {
    'name': 'Customer 232',
    'state': 'PB',
  },
  {
    'name': 'Customer 233',
    'state': 'GO',
  },
  {
    'name': 'Customer 234',
    'state': 'PE',
  },
  {
    'name': 'Customer 235',
    'state': 'RR',
  },
  {
    'name': 'Customer 236',
    'state': 'AL',
  },
  {
    'name': 'Customer 237',
    'state': 'SE',
  },
  {
    'name': 'Customer 238',
    'state': 'BA',
  },
  {
    'name': 'Customer 239',
    'state': 'RN',
  },
  {
    'name': 'Customer 240',
    'state': 'PA',
  },
  {
    'name': 'Customer 241',
    'state': 'AC',
  },
  {
    'name': 'Customer 242',
    'state': 'DF',
  },
  {
    'name': 'Customer 243',
    'state': 'ES',
  },
  {
    'name': 'Customer 244',
    'state': 'PE',
  },
  {
    'name': 'Customer 245',
    'state': 'PI',
  },
  {
    'name': 'Customer 246',
    'state': 'RS',
  },
  {
    'name': 'Customer 247',
    'state': 'RO',
  },
  {
    'name': 'Customer 248',
    'state': 'MG',
  },
  {
    'name': 'Customer 249',
    'state': 'MT',
  },
  {
    'name': 'Customer 250',
    'state': 'SC',
  },
  {
    'name': 'Customer 251',
    'state': 'SE',
  },
  {
    'name': 'Customer 252',
    'state': 'ES',
  },
  {
    'name': 'Customer 253',
    'state': 'SC',
  },
  {
    'name': 'Customer 254',
    'state': 'PB',
  },
  {
    'name': 'Customer 255',
    'state': 'RO',
  },
  {
    'name': 'Customer 256',
    'state': 'ES',
  },
  {
    'name': 'Customer 257',
    'state': 'AM',
  },
  {
    'name': 'Customer 258',
    'state': 'MT',
  },
  {
    'name': 'Customer 259',
    'state': 'TO',
  },
  {
    'name': 'Customer 260',
    'state': 'BA',
  },
  {
    'name': 'Customer 261',
    'state': 'TO',
  },
  {
    'name': 'Customer 262',
    'state': 'AC',
  },
  {
    'name': 'Customer 263',
    'state': 'RJ',
  },
  {
    'name': 'Customer 264',
    'state': 'AP',
  },
  {
    'name': 'Customer 265',
    'state': 'RO',
  },
  {
    'name': 'Customer 266',
    'state': 'RS',
  },
  {
    'name': 'Customer 267',
    'state': 'MG',
  },
  {
    'name': 'Customer 268',
    'state': 'TO',
  },
  {
    'name': 'Customer 269',
    'state': 'PR',
  },
  {
    'name': 'Customer 270',
    'state': 'AM',
  },
  {
    'name': 'Customer 271',
    'state': 'RJ',
  },
  {
    'name': 'Customer 272',
    'state': 'PB',
  },
  {
    'name': 'Customer 273',
    'state': 'MG',
  },
  {
    'name': 'Customer 274',
    'state': 'SC',
  },
  {
    'name': 'Customer 275',
    'state': 'MA',
  },
  {
    'name': 'Customer 276',
    'state': 'AM',
  },
  {
    'name': 'Customer 277',
    'state': 'SE',
  },
  {
    'name': 'Customer 278',
    'state': 'MT',
  },
  {
    'name': 'Customer 279',
    'state': 'ES',
  },
  {
    'name': 'Customer 280',
    'state': 'MG',
  },
  {
    'name': 'Customer 281',
    'state': 'PI',
  },
  {
    'name': 'Customer 282',
    'state': 'MA',
  },
  {
    'name': 'Customer 283',
    'state': 'AM',
  },
  {
    'name': 'Customer 284',
    'state': 'MT',
  },
  {
    'name': 'Customer 285',
    'state': 'MG',
  },
  {
    'name': 'Customer 286',
    'state': 'MG',
  },
  {
    'name': 'Customer 287',
    'state': 'AL',
  },
  {
    'name': 'Customer 288',
    'state': 'RO',
  },
  {
    'name': 'Customer 289',
    'state': 'TO',
  },
  {
    'name': 'Customer 290',
    'state': 'MG',
  },
  {
    'name': 'Customer 291',
    'state': 'ES',
  },
  {
    'name': 'Customer 292',
    'state': 'CE',
  },
  {
    'name': 'Customer 293',
    'state': 'MG',
  },
  {
    'name': 'Customer 294',
    'state': 'ES',
  },
  {
    'name': 'Customer 295',
    'state': 'MG',
  },
  {
    'name': 'Customer 296',
    'state': 'MS',
  },
  {
    'name': 'Customer 297',
    'state': 'PB',
  },
  {
    'name': 'Customer 298',
    'state': 'RR',
  },
  {
    'name': 'Customer 299',
    'state': 'PI',
  },
  {
    'name': 'Customer 300',
    'state': 'RR',
  },
  {
    'name': 'Customer 301',
    'state': 'PR',
  },
  {
    'name': 'Customer 302',
    'state': 'AM',
  },
  {
    'name': 'Customer 303',
    'state': 'SE',
  },
  {
    'name': 'Customer 304',
    'state': 'PA',
  },
  {
    'name': 'Customer 305',
    'state': 'PR',
  },
  {
    'name': 'Customer 306',
    'state': 'PR',
  },
  {
    'name': 'Customer 307',
    'state': 'SC',
  },
  {
    'name': 'Customer 308',
    'state': 'CE',
  },
  {
    'name': 'Customer 309',
    'state': 'AM',
  },
  {
    'name': 'Customer 310',
    'state': 'MT',
  },
  {
    'name': 'Customer 311',
    'state': 'RO',
  },
  {
    'name': 'Customer 312',
    'state': 'RN',
  },
  {
    'name': 'Customer 313',
    'state': 'CE',
  },
  {
    'name': 'Customer 314',
    'state': 'ES',
  },
  {
    'name': 'Customer 315',
    'state': 'RS',
  },
  {
    'name': 'Customer 316',
    'state': 'DF',
  },
  {
    'name': 'Customer 317',
    'state': 'MG',
  },
  {
    'name': 'Customer 318',
    'state': 'PB',
  },
  {
    'name': 'Customer 319',
    'state': 'MT',
  },
  {
    'name': 'Customer 320',
    'state': 'SE',
  },
  {
    'name': 'Customer 321',
    'state': 'AM',
  },
  {
    'name': 'Customer 322',
    'state': 'RR',
  },
  {
    'name': 'Customer 323',
    'state': 'AM',
  },
  {
    'name': 'Customer 324',
    'state': 'AP',
  },
  {
    'name': 'Customer 325',
    'state': 'CE',
  },
  {
    'name': 'Customer 326',
    'state': 'PB',
  },
  {
    'name': 'Customer 327',
    'state': 'MS',
  },
  {
    'name': 'Customer 328',
    'state': 'MG',
  },
  {
    'name': 'Customer 329',
    'state': 'PI',
  },
  {
    'name': 'Customer 330',
    'state': 'PB',
  },
  {
    'name': 'Customer 331',
    'state': 'PB',
  },
  {
    'name': 'Customer 332',
    'state': 'MG',
  },
  {
    'name': 'Customer 333',
    'state': 'AP',
  },
  {
    'name': 'Customer 334',
    'state': 'GO',
  },
  {
    'name': 'Customer 335',
    'state': 'MT',
  },
  {
    'name': 'Customer 336',
    'state': 'RO',
  },
  {
    'name': 'Customer 337',
    'state': 'RS',
  },
  {
    'name': 'Customer 338',
    'state': 'MG',
  },
  {
    'name': 'Customer 339',
    'state': 'MS',
  },
  {
    'name': 'Customer 340',
    'state': 'MG',
  },
  {
    'name': 'Customer 341',
    'state': 'RN',
  },
  {
    'name': 'Customer 342',
    'state': 'SP',
  },
  {
    'name': 'Customer 343',
    'state': 'MG',
  },
  {
    'name': 'Customer 344',
    'state': 'MG',
  },
  {
    'name': 'Customer 345',
    'state': 'DF',
  },
  {
    'name': 'Customer 346',
    'state': 'MG',
  },
  {
    'name': 'Customer 347',
    'state': 'PE',
  },
  {
    'name': 'Customer 348',
    'state': 'RR',
  },
  {
    'name': 'Customer 349',
    'state': 'GO',
  },
  {
    'name': 'Customer 350',
    'state': 'MT',
  },
  {
    'name': 'Customer 351',
    'state': 'RJ',
  },
  {
    'name': 'Customer 352',
    'state': 'MG',
  },
  {
    'name': 'Customer 353',
    'state': 'PA',
  },
  {
    'name': 'Customer 354',
    'state': 'RO',
  },
  {
    'name': 'Customer 355',
    'state': 'MT',
  },
  {
    'name': 'Customer 356',
    'state': 'MS',
  },
  {
    'name': 'Customer 357',
    'state': 'PR',
  },
  {
    'name': 'Customer 358',
    'state': 'RN',
  },
  {
    'name': 'Customer 359',
    'state': 'GO',
  },
  {
    'name': 'Customer 360',
    'state': 'SC',
  },
  {
    'name': 'Customer 361',
    'state': 'AL',
  },
  {
    'name': 'Customer 362',
    'state': 'PI',
  },
  {
    'name': 'Customer 363',
    'state': 'ES',
  },
  {
    'name': 'Customer 364',
    'state': 'GO',
  },
  {
    'name': 'Customer 365',
    'state': 'AM',
  },
  {
    'name': 'Customer 366',
    'state': 'SP',
  },
  {
    'name': 'Customer 367',
    'state': 'TO',
  },
  {
    'name': 'Customer 368',
    'state': 'AM',
  },
  {
    'name': 'Customer 369',
    'state': 'SP',
  },
  {
    'name': 'Customer 370',
    'state': 'MG',
  },
  {
    'name': 'Customer 371',
    'state': 'RO',
  },
  {
    'name': 'Customer 372',
    'state': 'TO',
  },
  {
    'name': 'Customer 373',
    'state': 'AM',
  },
  {
    'name': 'Customer 374',
    'state': 'MA',
  },
  {
    'name': 'Customer 375',
    'state': 'RN',
  },
  {
    'name': 'Customer 376',
    'state': 'TO',
  },
  {
    'name': 'Customer 377',
    'state': 'PB',
  },
  {
    'name': 'Customer 378',
    'state': 'AL',
  },
  {
    'name': 'Customer 379',
    'state': 'PA',
  },
  {
    'name': 'Customer 380',
    'state': 'PA',
  },
  {
    'name': 'Customer 381',
    'state': 'PI',
  },
  {
    'name': 'Customer 382',
    'state': 'GO',
  },
  {
    'name': 'Customer 383',
    'state': 'MT',
  },
  {
    'name': 'Customer 384',
    'state': 'RN',
  },
  {
    'name': 'Customer 385',
    'state': 'SE',
  },
  {
    'name': 'Customer 386',
    'state': 'AP',
  },
  {
    'name': 'Customer 387',
    'state': 'AM',
  },
  {
    'name': 'Customer 388',
    'state': 'MS',
  },
  {
    'name': 'Customer 389',
    'state': 'MA',
  },
  {
    'name': 'Customer 390',
    'state': 'CE',
  },
  {
    'name': 'Customer 391',
    'state': 'RN',
  },
  {
    'name': 'Customer 392',
    'state': 'DF',
  },
  {
    'name': 'Customer 393',
    'state': 'MG',
  },
  {
    'name': 'Customer 394',
    'state': 'RR',
  },
  {
    'name': 'Customer 395',
    'state': 'SE',
  },
  {
    'name': 'Customer 396',
    'state': 'BA',
  },
  {
    'name': 'Customer 397',
    'state': 'DF',
  },
  {
    'name': 'Customer 398',
    'state': 'BA',
  },
  {
    'name': 'Customer 399',
    'state': 'AC',
  },
  {
    'name': 'Customer 400',
    'state': 'CE',
  },
  {
    'name': 'Customer 401',
    'state': 'AP',
  },
  {
    'name': 'Customer 402',
    'state': 'BA',
  },
  {
    'name': 'Customer 403',
    'state': 'AC',
  },
  {
    'name': 'Customer 404',
    'state': 'RS',
  },
  {
    'name': 'Customer 405',
    'state': 'AP',
  },
  {
    'name': 'Customer 406',
    'state': 'AL',
  },
  {
    'name': 'Customer 407',
    'state': 'AC',
  },
  {
    'name': 'Customer 408',
    'state': 'SC',
  },
  {
    'name': 'Customer 409',
    'state': 'AC',
  },
  {
    'name': 'Customer 410',
    'state': 'SP',
  },
  {
    'name': 'Customer 411',
    'state': 'DF',
  },
  {
    'name': 'Customer 412',
    'state': 'BA',
  },
  {
    'name': 'Customer 413',
    'state': 'MT',
  },
  {
    'name': 'Customer 414',
    'state': 'MS',
  },
  {
    'name': 'Customer 415',
    'state': 'PB',
  },
  {
    'name': 'Customer 416',
    'state': 'AL',
  },
  {
    'name': 'Customer 417',
    'state': 'TO',
  },
  {
    'name': 'Customer 418',
    'state': 'RN',
  },
  {
    'name': 'Customer 419',
    'state': 'GO',
  },
  {
    'name': 'Customer 420',
    'state': 'BA',
  },
  {
    'name': 'Customer 421',
    'state': 'PR',
  },
  {
    'name': 'Customer 422',
    'state': 'SC',
  },
  {
    'name': 'Customer 423',
    'state': 'RR',
  },
  {
    'name': 'Customer 424',
    'state': 'RS',
  },
  {
    'name': 'Customer 425',
    'state': 'RS',
  },
  {
    'name': 'Customer 426',
    'state': 'MT',
  },
  {
    'name': 'Customer 427',
    'state': 'BA',
  },
  {
    'name': 'Customer 428',
    'state': 'SE',
  },
  {
    'name': 'Customer 429',
    'state': 'GO',
  },
  {
    'name': 'Customer 430',
    'state': 'PI',
  },
  {
    'name': 'Customer 431',
    'state': 'AC',
  },
  {
    'name': 'Customer 432',
    'state': 'AP',
  },
  {
    'name': 'Customer 433',
    'state': 'PI',
  },
  {
    'name': 'Customer 434',
    'state': 'DF',
  },
  {
    'name': 'Customer 435',
    'state': 'MA',
  },
  {
    'name': 'Customer 436',
    'state': 'AL',
  },
  {
    'name': 'Customer 437',
    'state': 'AP',
  },
  {
    'name': 'Customer 438',
    'state': 'PE',
  },
  {
    'name': 'Customer 439',
    'state': 'PI',
  },
  {
    'name': 'Customer 440',
    'state': 'MG',
  },
  {
    'name': 'Customer 441',
    'state': 'SP',
  },
  {
    'name': 'Customer 442',
    'state': 'PE',
  },
  {
    'name': 'Customer 443',
    'state': 'RO',
  },
  {
    'name': 'Customer 444',
    'state': 'SP',
  },
  {
    'name': 'Customer 445',
    'state': 'RJ',
  },
  {
    'name': 'Customer 446',
    'state': 'SC',
  },
  {
    'name': 'Customer 447',
    'state': 'PA',
  },
  {
    'name': 'Customer 448',
    'state': 'ES',
  },
  {
    'name': 'Customer 449',
    'state': 'RO',
  },
  {
    'name': 'Customer 450',
    'state': 'PR',
  },
  {
    'name': 'Customer 451',
    'state': 'PE',
  },
  {
    'name': 'Customer 452',
    'state': 'MG',
  },
  {
    'name': 'Customer 453',
    'state': 'PA',
  },
  {
    'name': 'Customer 454',
    'state': 'MG',
  },
  {
    'name': 'Customer 455',
    'state': 'AC',
  },
  {
    'name': 'Customer 456',
    'state': 'SE',
  },
  {
    'name': 'Customer 457',
    'state': 'GO',
  },
  {
    'name': 'Customer 458',
    'state': 'MG',
  },
  {
    'name': 'Customer 459',
    'state': 'RR',
  },
  {
    'name': 'Customer 460',
    'state': 'PR',
  },
  {
    'name': 'Customer 461',
    'state': 'PR',
  },
  {
    'name': 'Customer 462',
    'state': 'MG',
  },
  {
    'name': 'Customer 463',
    'state': 'CE',
  },
  {
    'name': 'Customer 464',
    'state': 'MS',
  },
  {
    'name': 'Customer 465',
    'state': 'MG',
  },
  {
    'name': 'Customer 466',
    'state': 'SC',
  },
  {
    'name': 'Customer 467',
    'state': 'PR',
  },
  {
    'name': 'Customer 468',
    'state': 'BA',
  },
  {
    'name': 'Customer 469',
    'state': 'MT',
  },
  {
    'name': 'Customer 470',
    'state': 'RJ',
  },
  {
    'name': 'Customer 471',
    'state': 'PE',
  },
  {
    'name': 'Customer 472',
    'state': 'RR',
  },
  {
    'name': 'Customer 473',
    'state': 'PA',
  },
  {
    'name': 'Customer 474',
    'state': 'AP',
  },
  {
    'name': 'Customer 475',
    'state': 'AC',
  },
  {
    'name': 'Customer 476',
    'state': 'PE',
  },
  {
    'name': 'Customer 477',
    'state': 'CE',
  },
  {
    'name': 'Customer 478',
    'state': 'PE',
  },
  {
    'name': 'Customer 479',
    'state': 'GO',
  },
  {
    'name': 'Customer 480',
    'state': 'MS',
  },
  {
    'name': 'Customer 481',
    'state': 'MT',
  },
  {
    'name': 'Customer 482',
    'state': 'PB',
  },
  {
    'name': 'Customer 483',
    'state': 'RS',
  },
  {
    'name': 'Customer 484',
    'state': 'RR',
  },
  {
    'name': 'Customer 485',
    'state': 'PR',
  },
  {
    'name': 'Customer 486',
    'state': 'SP',
  },
  {
    'name': 'Customer 487',
    'state': 'MG',
  },
  {
    'name': 'Customer 488',
    'state': 'GO',
  },
  {
    'name': 'Customer 489',
    'state': 'BA',
  },
  {
    'name': 'Customer 490',
    'state': 'PE',
  },
  {
    'name': 'Customer 491',
    'state': 'SP',
  },
  {
    'name': 'Customer 492',
    'state': 'RO',
  },
  {
    'name': 'Customer 493',
    'state': 'AM',
  },
  {
    'name': 'Customer 494',
    'state': 'MG',
  },
  {
    'name': 'Customer 495',
    'state': 'ES',
  },
  {
    'name': 'Customer 496',
    'state': 'TO',
  },
  {
    'name': 'Customer 497',
    'state': 'ES',
  },
  {
    'name': 'Customer 498',
    'state': 'MS',
  },
  {
    'name': 'Customer 499',
    'state': 'ES',
  },
  {
    'name': 'Customer 500',
    'state': 'RN',
  },
  {
    'name': 'Customer 501',
    'state': 'DF',
  },
  {
    'name': 'Customer 502',
    'state': 'MA',
  },
  {
    'name': 'Customer 503',
    'state': 'RS',
  },
  {
    'name': 'Customer 504',
    'state': 'PE',
  },
  {
    'name': 'Customer 505',
    'state': 'SP',
  },
  {
    'name': 'Customer 506',
    'state': 'DF',
  },
  {
    'name': 'Customer 507',
    'state': 'MT',
  },
  {
    'name': 'Customer 508',
    'state': 'PA',
  },
  {
    'name': 'Customer 509',
    'state': 'PA',
  },
  {
    'name': 'Customer 510',
    'state': 'ES',
  },
  {
    'name': 'Customer 511',
    'state': 'RJ',
  },
  {
    'name': 'Customer 512',
    'state': 'PR',
  },
  {
    'name': 'Customer 513',
    'state': 'RS',
  },
  {
    'name': 'Customer 514',
    'state': 'DF',
  },
  {
    'name': 'Customer 515',
    'state': 'AP',
  },
  {
    'name': 'Customer 516',
    'state': 'PI',
  },
  {
    'name': 'Customer 517',
    'state': 'AC',
  },
  {
    'name': 'Customer 518',
    'state': 'AL',
  },
  {
    'name': 'Customer 519',
    'state': 'PR',
  },
  {
    'name': 'Customer 520',
    'state': 'SP',
  },
  {
    'name': 'Customer 521',
    'state': 'RJ',
  },
  {
    'name': 'Customer 522',
    'state': 'AC',
  },
  {
    'name': 'Customer 523',
    'state': 'RN',
  },
  {
    'name': 'Customer 524',
    'state': 'PA',
  },
  {
    'name': 'Customer 525',
    'state': 'AM',
  },
  {
    'name': 'Customer 526',
    'state': 'AM',
  },
  {
    'name': 'Customer 527',
    'state': 'CE',
  },
  {
    'name': 'Customer 528',
    'state': 'MT',
  },
  {
    'name': 'Customer 529',
    'state': 'AP',
  },
  {
    'name': 'Customer 530',
    'state': 'AM',
  },
  {
    'name': 'Customer 531',
    'state': 'MT',
  },
  {
    'name': 'Customer 532',
    'state': 'AC',
  },
  {
    'name': 'Customer 533',
    'state': 'MS',
  },
  {
    'name': 'Customer 534',
    'state': 'SC',
  },
  {
    'name': 'Customer 535',
    'state': 'MA',
  },
  {
    'name': 'Customer 536',
    'state': 'RO',
  },
  {
    'name': 'Customer 537',
    'state': 'RS',
  },
  {
    'name': 'Customer 538',
    'state': 'SE',
  },
  {
    'name': 'Customer 539',
    'state': 'PI',
  },
  {
    'name': 'Customer 540',
    'state': 'AP',
  },
  {
    'name': 'Customer 541',
    'state': 'CE',
  },
  {
    'name': 'Customer 542',
    'state': 'PI',
  },
  {
    'name': 'Customer 543',
    'state': 'AM',
  },
  {
    'name': 'Customer 544',
    'state': 'MS',
  },
  {
    'name': 'Customer 545',
    'state': 'MT',
  },
  {
    'name': 'Customer 546',
    'state': 'MT',
  },
  {
    'name': 'Customer 547',
    'state': 'SP',
  },
  {
    'name': 'Customer 548',
    'state': 'CE',
  },
  {
    'name': 'Customer 549',
    'state': 'RN',
  },
  {
    'name': 'Customer 550',
    'state': 'MG',
  },
  {
    'name': 'Customer 551',
    'state': 'AC',
  },
  {
    'name': 'Customer 552',
    'state': 'MA',
  },
  {
    'name': 'Customer 553',
    'state': 'BA',
  },
  {
    'name': 'Customer 554',
    'state': 'PB',
  },
  {
    'name': 'Customer 555',
    'state': 'BA',
  },
  {
    'name': 'Customer 556',
    'state': 'AL',
  },
  {
    'name': 'Customer 557',
    'state': 'MS',
  },
  {
    'name': 'Customer 558',
    'state': 'CE',
  },
  {
    'name': 'Customer 559',
    'state': 'AM',
  },
  {
    'name': 'Customer 560',
    'state': 'RO',
  },
  {
    'name': 'Customer 561',
    'state': 'PB',
  },
  {
    'name': 'Customer 562',
    'state': 'MG',
  },
  {
    'name': 'Customer 563',
    'state': 'RJ',
  },
  {
    'name': 'Customer 564',
    'state': 'RN',
  },
  {
    'name': 'Customer 565',
    'state': 'SP',
  },
  {
    'name': 'Customer 566',
    'state': 'MT',
  },
  {
    'name': 'Customer 567',
    'state': 'AL',
  },
  {
    'name': 'Customer 568',
    'state': 'SE',
  },
  {
    'name': 'Customer 569',
    'state': 'MS',
  },
  {
    'name': 'Customer 570',
    'state': 'AM',
  },
  {
    'name': 'Customer 571',
    'state': 'RR',
  },
  {
    'name': 'Customer 572',
    'state': 'SP',
  },
  {
    'name': 'Customer 573',
    'state': 'MT',
  },
  {
    'name': 'Customer 574',
    'state': 'GO',
  },
  {
    'name': 'Customer 575',
    'state': 'RR',
  },
  {
    'name': 'Customer 576',
    'state': 'RR',
  },
  {
    'name': 'Customer 577',
    'state': 'RO',
  },
  {
    'name': 'Customer 578',
    'state': 'PE',
  },
  {
    'name': 'Customer 579',
    'state': 'PB',
  },
  {
    'name': 'Customer 580',
    'state': 'AP',
  },
  {
    'name': 'Customer 581',
    'state': 'RS',
  },
  {
    'name': 'Customer 582',
    'state': 'MG',
  },
  {
    'name': 'Customer 583',
    'state': 'SE',
  },
  {
    'name': 'Customer 584',
    'state': 'BA',
  },
  {
    'name': 'Customer 585',
    'state': 'AM',
  },
  {
    'name': 'Customer 586',
    'state': 'RO',
  },
  {
    'name': 'Customer 587',
    'state': 'MG',
  },
  {
    'name': 'Customer 588',
    'state': 'PB',
  },
  {
    'name': 'Customer 589',
    'state': 'SP',
  },
  {
    'name': 'Customer 590',
    'state': 'RO',
  },
  {
    'name': 'Customer 591',
    'state': 'PB',
  },
  {
    'name': 'Customer 592',
    'state': 'PB',
  },
  {
    'name': 'Customer 593',
    'state': 'PR',
  },
  {
    'name': 'Customer 594',
    'state': 'RN',
  },
  {
    'name': 'Customer 595',
    'state': 'CE',
  },
  {
    'name': 'Customer 596',
    'state': 'SC',
  },
  {
    'name': 'Customer 597',
    'state': 'SP',
  },
  {
    'name': 'Customer 598',
    'state': 'AM',
  },
  {
    'name': 'Customer 599',
    'state': 'AM',
  },
  {
    'name': 'Customer 600',
    'state': 'PE',
  },
  {
    'name': 'Customer 601',
    'state': 'MA',
  },
  {
    'name': 'Customer 602',
    'state': 'CE',
  },
  {
    'name': 'Customer 603',
    'state': 'PR',
  },
  {
    'name': 'Customer 604',
    'state': 'AP',
  },
  {
    'name': 'Customer 605',
    'state': 'RS',
  },
  {
    'name': 'Customer 606',
    'state': 'RS',
  },
  {
    'name': 'Customer 607',
    'state': 'SP',
  },
  {
    'name': 'Customer 608',
    'state': 'RR',
  },
  {
    'name': 'Customer 609',
    'state': 'MG',
  },
  {
    'name': 'Customer 610',
    'state': 'PI',
  },
  {
    'name': 'Customer 611',
    'state': 'PB',
  },
  {
    'name': 'Customer 612',
    'state': 'MG',
  },
  {
    'name': 'Customer 613',
    'state': 'SE',
  },
  {
    'name': 'Customer 614',
    'state': 'CE',
  },
  {
    'name': 'Customer 615',
    'state': 'RO',
  },
  {
    'name': 'Customer 616',
    'state': 'PA',
  },
  {
    'name': 'Customer 617',
    'state': 'RS',
  },
  {
    'name': 'Customer 618',
    'state': 'SC',
  },
  {
    'name': 'Customer 619',
    'state': 'AM',
  },
  {
    'name': 'Customer 620',
    'state': 'CE',
  },
  {
    'name': 'Customer 621',
    'state': 'SE',
  },
  {
    'name': 'Customer 622',
    'state': 'GO',
  },
  {
    'name': 'Customer 623',
    'state': 'SP',
  },
  {
    'name': 'Customer 624',
    'state': 'MG',
  },
  {
    'name': 'Customer 625',
    'state': 'RS',
  },
  {
    'name': 'Customer 626',
    'state': 'RR',
  },
  {
    'name': 'Customer 627',
    'state': 'DF',
  },
  {
    'name': 'Customer 628',
    'state': 'PE',
  },
  {
    'name': 'Customer 629',
    'state': 'PA',
  },
  {
    'name': 'Customer 630',
    'state': 'BA',
  },
  {
    'name': 'Customer 631',
    'state': 'RN',
  },
  {
    'name': 'Customer 632',
    'state': 'PA',
  },
  {
    'name': 'Customer 633',
    'state': 'AM',
  },
  {
    'name': 'Customer 634',
    'state': 'PB',
  },
  {
    'name': 'Customer 635',
    'state': 'MG',
  },
  {
    'name': 'Customer 636',
    'state': 'AP',
  },
  {
    'name': 'Customer 637',
    'state': 'MG',
  },
  {
    'name': 'Customer 638',
    'state': 'PB',
  },
  {
    'name': 'Customer 639',
    'state': 'AP',
  },
  {
    'name': 'Customer 640',
    'state': 'PI',
  },
  {
    'name': 'Customer 641',
    'state': 'RR',
  },
  {
    'name': 'Customer 642',
    'state': 'GO',
  },
  {
    'name': 'Customer 643',
    'state': 'MA',
  },
  {
    'name': 'Customer 644',
    'state': 'MA',
  },
  {
    'name': 'Customer 645',
    'state': 'MS',
  },
  {
    'name': 'Customer 646',
    'state': 'CE',
  },
  {
    'name': 'Customer 647',
    'state': 'ES',
  },
  {
    'name': 'Customer 648',
    'state': 'MT',
  },
  {
    'name': 'Customer 649',
    'state': 'SC',
  },
  {
    'name': 'Customer 650',
    'state': 'PB',
  },
  {
    'name': 'Customer 651',
    'state': 'MT',
  },
  {
    'name': 'Customer 652',
    'state': 'TO',
  },
  {
    'name': 'Customer 653',
    'state': 'SP',
  },
  {
    'name': 'Customer 654',
    'state': 'MG',
  },
  {
    'name': 'Customer 655',
    'state': 'DF',
  },
  {
    'name': 'Customer 656',
    'state': 'RN',
  },
  {
    'name': 'Customer 657',
    'state': 'AP',
  },
  {
    'name': 'Customer 658',
    'state': 'SC',
  },
  {
    'name': 'Customer 659',
    'state': 'RO',
  },
  {
    'name': 'Customer 660',
    'state': 'MS',
  },
  {
    'name': 'Customer 661',
    'state': 'DF',
  },
  {
    'name': 'Customer 662',
    'state': 'SC',
  },
  {
    'name': 'Customer 663',
    'state': 'PA',
  },
  {
    'name': 'Customer 664',
    'state': 'SE',
  },
  {
    'name': 'Customer 665',
    'state': 'DF',
  },
  {
    'name': 'Customer 666',
    'state': 'MT',
  },
  {
    'name': 'Customer 667',
    'state': 'PA',
  },
  {
    'name': 'Customer 668',
    'state': 'RR',
  },
  {
    'name': 'Customer 669',
    'state': 'AP',
  },
  {
    'name': 'Customer 670',
    'state': 'AP',
  },
  {
    'name': 'Customer 671',
    'state': 'AL',
  },
  {
    'name': 'Customer 672',
    'state': 'RO',
  },
  {
    'name': 'Customer 673',
    'state': 'SP',
  },
  {
    'name': 'Customer 674',
    'state': 'CE',
  },
  {
    'name': 'Customer 675',
    'state': 'SE',
  },
  {
    'name': 'Customer 676',
    'state': 'MT',
  },
  {
    'name': 'Customer 677',
    'state': 'SP',
  },
  {
    'name': 'Customer 678',
    'state': 'MS',
  },
  {
    'name': 'Customer 679',
    'state': 'RS',
  },
  {
    'name': 'Customer 680',
    'state': 'AP',
  },
  {
    'name': 'Customer 681',
    'state': 'AL',
  },
  {
    'name': 'Customer 682',
    'state': 'CE',
  },
  {
    'name': 'Customer 683',
    'state': 'PB',
  },
  {
    'name': 'Customer 684',
    'state': 'MS',
  },
  {
    'name': 'Customer 685',
    'state': 'RN',
  },
  {
    'name': 'Customer 686',
    'state': 'AL',
  },
  {
    'name': 'Customer 687',
    'state': 'GO',
  },
  {
    'name': 'Customer 688',
    'state': 'RS',
  },
  {
    'name': 'Customer 689',
    'state': 'PR',
  },
  {
    'name': 'Customer 690',
    'state': 'AM',
  },
  {
    'name': 'Customer 691',
    'state': 'MG',
  },
  {
    'name': 'Customer 692',
    'state': 'AL',
  },
  {
    'name': 'Customer 693',
    'state': 'PB',
  },
  {
    'name': 'Customer 694',
    'state': 'RN',
  },
  {
    'name': 'Customer 695',
    'state': 'AC',
  },
  {
    'name': 'Customer 696',
    'state': 'AM',
  },
  {
    'name': 'Customer 697',
    'state': 'SP',
  },
  {
    'name': 'Customer 698',
    'state': 'PA',
  },
  {
    'name': 'Customer 699',
    'state': 'TO',
  },
  {
    'name': 'Customer 700',
    'state': 'CE',
  },
  {
    'name': 'Customer 701',
    'state': 'MG',
  },
  {
    'name': 'Customer 702',
    'state': 'AL',
  },
  {
    'name': 'Customer 703',
    'state': 'BA',
  },
  {
    'name': 'Customer 704',
    'state': 'PI',
  },
  {
    'name': 'Customer 705',
    'state': 'AP',
  },
  {
    'name': 'Customer 706',
    'state': 'RN',
  },
  {
    'name': 'Customer 707',
    'state': 'MT',
  },
  {
    'name': 'Customer 708',
    'state': 'GO',
  },
  {
    'name': 'Customer 709',
    'state': 'MS',
  },
  {
    'name': 'Customer 710',
    'state': 'PE',
  },
  {
    'name': 'Customer 711',
    'state': 'PA',
  },
  {
    'name': 'Customer 712',
    'state': 'RO',
  },
  {
    'name': 'Customer 713',
    'state': 'PE',
  },
  {
    'name': 'Customer 714',
    'state': 'PA',
  },
  {
    'name': 'Customer 715',
    'state': 'MA',
  },
  {
    'name': 'Customer 716',
    'state': 'AM',
  },
  {
    'name': 'Customer 717',
    'state': 'TO',
  },
  {
    'name': 'Customer 718',
    'state': 'ES',
  },
  {
    'name': 'Customer 719',
    'state': 'RJ',
  },
  {
    'name': 'Customer 720',
    'state': 'PE',
  },
  {
    'name': 'Customer 721',
    'state': 'CE',
  },
  {
    'name': 'Customer 722',
    'state': 'MT',
  },
  {
    'name': 'Customer 723',
    'state': 'SE',
  },
  {
    'name': 'Customer 724',
    'state': 'RR',
  },
  {
    'name': 'Customer 725',
    'state': 'MT',
  },
  {
    'name': 'Customer 726',
    'state': 'PE',
  },
  {
    'name': 'Customer 727',
    'state': 'RR',
  },
  {
    'name': 'Customer 728',
    'state': 'DF',
  },
  {
    'name': 'Customer 729',
    'state': 'SC',
  },
  {
    'name': 'Customer 730',
    'state': 'MA',
  },
  {
    'name': 'Customer 731',
    'state': 'PB',
  },
  {
    'name': 'Customer 732',
    'state': 'AL',
  },
  {
    'name': 'Customer 733',
    'state': 'ES',
  },
  {
    'name': 'Customer 734',
    'state': 'PR',
  },
  {
    'name': 'Customer 735',
    'state': 'CE',
  },
  {
    'name': 'Customer 736',
    'state': 'MT',
  },
  {
    'name': 'Customer 737',
    'state': 'MG',
  },
  {
    'name': 'Customer 738',
    'state': 'SE',
  },
  {
    'name': 'Customer 739',
    'state': 'GO',
  },
  {
    'name': 'Customer 740',
    'state': 'AL',
  },
  {
    'name': 'Customer 741',
    'state': 'RS',
  },
  {
    'name': 'Customer 742',
    'state': 'SE',
  },
  {
    'name': 'Customer 743',
    'state': 'MG',
  },
  {
    'name': 'Customer 744',
    'state': 'AM',
  },
  {
    'name': 'Customer 745',
    'state': 'RO',
  },
  {
    'name': 'Customer 746',
    'state': 'AL',
  },
  {
    'name': 'Customer 747',
    'state': 'PE',
  },
  {
    'name': 'Customer 748',
    'state': 'SE',
  },
  {
    'name': 'Customer 749',
    'state': 'MT',
  },
  {
    'name': 'Customer 750',
    'state': 'AM',
  },
  {
    'name': 'Customer 751',
    'state': 'SC',
  },
  {
    'name': 'Customer 752',
    'state': 'AL',
  },
  {
    'name': 'Customer 753',
    'state': 'CE',
  },
  {
    'name': 'Customer 754',
    'state': 'AL',
  },
  {
    'name': 'Customer 755',
    'state': 'RR',
  },
  {
    'name': 'Customer 756',
    'state': 'SE',
  },
  {
    'name': 'Customer 757',
    'state': 'MT',
  },
  {
    'name': 'Customer 758',
    'state': 'PA',
  },
  {
    'name': 'Customer 759',
    'state': 'AC',
  },
  {
    'name': 'Customer 760',
    'state': 'RS',
  },
  {
    'name': 'Customer 761',
    'state': 'TO',
  },
  {
    'name': 'Customer 762',
    'state': 'PI',
  },
  {
    'name': 'Customer 763',
    'state': 'PR',
  },
  {
    'name': 'Customer 764',
    'state': 'PR',
  },
  {
    'name': 'Customer 765',
    'state': 'PB',
  },
  {
    'name': 'Customer 766',
    'state': 'MG',
  },
  {
    'name': 'Customer 767',
    'state': 'GO',
  },
  {
    'name': 'Customer 768',
    'state': 'MG',
  },
  {
    'name': 'Customer 769',
    'state': 'PR',
  },
  {
    'name': 'Customer 770',
    'state': 'MG',
  },
  {
    'name': 'Customer 771',
    'state': 'MS',
  },
  {
    'name': 'Customer 772',
    'state': 'MG',
  },
  {
    'name': 'Customer 773',
    'state': 'PE',
  },
  {
    'name': 'Customer 774',
    'state': 'PA',
  },
  {
    'name': 'Customer 775',
    'state': 'RJ',
  },
  {
    'name': 'Customer 776',
    'state': 'ES',
  },
  {
    'name': 'Customer 777',
    'state': 'SE',
  },
  {
    'name': 'Customer 778',
    'state': 'RO',
  },
  {
    'name': 'Customer 779',
    'state': 'MS',
  },
  {
    'name': 'Customer 780',
    'state': 'ES',
  },
  {
    'name': 'Customer 781',
    'state': 'AP',
  },
  {
    'name': 'Customer 782',
    'state': 'RO',
  },
  {
    'name': 'Customer 783',
    'state': 'AP',
  },
  {
    'name': 'Customer 784',
    'state': 'AL',
  },
  {
    'name': 'Customer 785',
    'state': 'PR',
  },
  {
    'name': 'Customer 786',
    'state': 'RJ',
  },
  {
    'name': 'Customer 787',
    'state': 'DF',
  },
  {
    'name': 'Customer 788',
    'state': 'AM',
  },
  {
    'name': 'Customer 789',
    'state': 'SE',
  },
  {
    'name': 'Customer 790',
    'state': 'GO',
  },
  {
    'name': 'Customer 791',
    'state': 'RN',
  },
  {
    'name': 'Customer 792',
    'state': 'RR',
  },
  {
    'name': 'Customer 793',
    'state': 'TO',
  },
  {
    'name': 'Customer 794',
    'state': 'SC',
  },
  {
    'name': 'Customer 795',
    'state': 'RN',
  },
  {
    'name': 'Customer 796',
    'state': 'MA',
  },
  {
    'name': 'Customer 797',
    'state': 'RJ',
  },
  {
    'name': 'Customer 798',
    'state': 'AM',
  },
  {
    'name': 'Customer 799',
    'state': 'RS',
  },
  {
    'name': 'Customer 800',
    'state': 'RO',
  },
  {
    'name': 'Customer 801',
    'state': 'AM',
  },
  {
    'name': 'Customer 802',
    'state': 'AP',
  },
  {
    'name': 'Customer 803',
    'state': 'RO',
  },
  {
    'name': 'Customer 804',
    'state': 'SP',
  },
  {
    'name': 'Customer 805',
    'state': 'SE',
  },
  {
    'name': 'Customer 806',
    'state': 'GO',
  },
  {
    'name': 'Customer 807',
    'state': 'RR',
  },
  {
    'name': 'Customer 808',
    'state': 'RO',
  },
  {
    'name': 'Customer 809',
    'state': 'RO',
  },
  {
    'name': 'Customer 810',
    'state': 'RJ',
  },
  {
    'name': 'Customer 811',
    'state': 'SC',
  },
  {
    'name': 'Customer 812',
    'state': 'PA',
  },
  {
    'name': 'Customer 813',
    'state': 'AP',
  },
  {
    'name': 'Customer 814',
    'state': 'MA',
  },
  {
    'name': 'Customer 815',
    'state': 'TO',
  },
  {
    'name': 'Customer 816',
    'state': 'AL',
  },
  {
    'name': 'Customer 817',
    'state': 'BA',
  },
  {
    'name': 'Customer 818',
    'state': 'PB',
  },
  {
    'name': 'Customer 819',
    'state': 'ES',
  },
  {
    'name': 'Customer 820',
    'state': 'AC',
  },
  {
    'name': 'Customer 821',
    'state': 'AC',
  },
  {
    'name': 'Customer 822',
    'state': 'BA',
  },
  {
    'name': 'Customer 823',
    'state': 'CE',
  },
  {
    'name': 'Customer 824',
    'state': 'PE',
  },
  {
    'name': 'Customer 825',
    'state': 'PI',
  },
  {
    'name': 'Customer 826',
    'state': 'BA',
  },
  {
    'name': 'Customer 827',
    'state': 'MT',
  },
  {
    'name': 'Customer 828',
    'state': 'SE',
  },
  {
    'name': 'Customer 829',
    'state': 'PB',
  },
  {
    'name': 'Customer 830',
    'state': 'SC',
  },
  {
    'name': 'Customer 831',
    'state': 'MT',
  },
  {
    'name': 'Customer 832',
    'state': 'GO',
  },
  {
    'name': 'Customer 833',
    'state': 'RO',
  },
  {
    'name': 'Customer 834',
    'state': 'MA',
  },
  {
    'name': 'Customer 835',
    'state': 'ES',
  },
  {
    'name': 'Customer 836',
    'state': 'MS',
  },
  {
    'name': 'Customer 837',
    'state': 'SP',
  },
  {
    'name': 'Customer 838',
    'state': 'CE',
  },
  {
    'name': 'Customer 839',
    'state': 'PE',
  },
  {
    'name': 'Customer 840',
    'state': 'CE',
  },
  {
    'name': 'Customer 841',
    'state': 'SC',
  },
  {
    'name': 'Customer 842',
    'state': 'MT',
  },
  {
    'name': 'Customer 843',
    'state': 'PR',
  },
  {
    'name': 'Customer 844',
    'state': 'CE',
  },
  {
    'name': 'Customer 845',
    'state': 'RO',
  },
  {
    'name': 'Customer 846',
    'state': 'MG',
  },
  {
    'name': 'Customer 847',
    'state': 'ES',
  },
  {
    'name': 'Customer 848',
    'state': 'MS',
  },
  {
    'name': 'Customer 849',
    'state': 'RO',
  },
  {
    'name': 'Customer 850',
    'state': 'BA',
  },
  {
    'name': 'Customer 851',
    'state': 'SC',
  },
  {
    'name': 'Customer 852',
    'state': 'CE',
  },
  {
    'name': 'Customer 853',
    'state': 'PE',
  },
  {
    'name': 'Customer 854',
    'state': 'CE',
  },
  {
    'name': 'Customer 855',
    'state': 'AL',
  },
  {
    'name': 'Customer 856',
    'state': 'RN',
  },
  {
    'name': 'Customer 857',
    'state': 'BA',
  },
  {
    'name': 'Customer 858',
    'state': 'ES',
  },
  {
    'name': 'Customer 859',
    'state': 'DF',
  },
  {
    'name': 'Customer 860',
    'state': 'PI',
  },
  {
    'name': 'Customer 861',
    'state': 'ES',
  },
  {
    'name': 'Customer 862',
    'state': 'AL',
  },
  {
    'name': 'Customer 863',
    'state': 'AM',
  },
  {
    'name': 'Customer 864',
    'state': 'PI',
  },
  {
    'name': 'Customer 865',
    'state': 'AM',
  },
  {
    'name': 'Customer 866',
    'state': 'RR',
  },
  {
    'name': 'Customer 867',
    'state': 'PE',
  },
  {
    'name': 'Customer 868',
    'state': 'MG',
  },
  {
    'name': 'Customer 869',
    'state': 'RN',
  },
  {
    'name': 'Customer 870',
    'state': 'AL',
  },
  {
    'name': 'Customer 871',
    'state': 'CE',
  },
  {
    'name': 'Customer 872',
    'state': 'MG',
  },
  {
    'name': 'Customer 873',
    'state': 'PB',
  },
  {
    'name': 'Customer 874',
    'state': 'CE',
  },
  {
    'name': 'Customer 875',
    'state': 'PA',
  },
  {
    'name': 'Customer 876',
    'state': 'TO',
  },
  {
    'name': 'Customer 877',
    'state': 'RN',
  },
  {
    'name': 'Customer 878',
    'state': 'SE',
  },
  {
    'name': 'Customer 879',
    'state': 'MA',
  },
  {
    'name': 'Customer 880',
    'state': 'PI',
  },
  {
    'name': 'Customer 881',
    'state': 'AM',
  },
  {
    'name': 'Customer 882',
    'state': 'MA',
  },
  {
    'name': 'Customer 883',
    'state': 'MS',
  },
  {
    'name': 'Customer 884',
    'state': 'GO',
  },
  {
    'name': 'Customer 885',
    'state': 'BA',
  },
  {
    'name': 'Customer 886',
    'state': 'PR',
  },
  {
    'name': 'Customer 887',
    'state': 'RR',
  },
  {
    'name': 'Customer 888',
    'state': 'CE',
  },
  {
    'name': 'Customer 889',
    'state': 'GO',
  },
  {
    'name': 'Customer 890',
    'state': 'PR',
  },
  {
    'name': 'Customer 891',
    'state': 'AC',
  },
  {
    'name': 'Customer 892',
    'state': 'CE',
  },
  {
    'name': 'Customer 893',
    'state': 'RN',
  },
  {
    'name': 'Customer 894',
    'state': 'MA',
  },
  {
    'name': 'Customer 895',
    'state': 'SP',
  },
  {
    'name': 'Customer 896',
    'state': 'SC',
  },
  {
    'name': 'Customer 897',
    'state': 'RN',
  },
  {
    'name': 'Customer 898',
    'state': 'RN',
  },
  {
    'name': 'Customer 899',
    'state': 'RN',
  },
  {
    'name': 'Customer 900',
    'state': 'GO',
  },
  {
    'name': 'Customer 901',
    'state': 'SP',
  },
  {
    'name': 'Customer 902',
    'state': 'PE',
  },
  {
    'name': 'Customer 903',
    'state': 'ES',
  },
  {
    'name': 'Customer 904',
    'state': 'ES',
  },
  {
    'name': 'Customer 905',
    'state': 'MG',
  },
  {
    'name': 'Customer 906',
    'state': 'PA',
  },
  {
    'name': 'Customer 907',
    'state': 'MT',
  },
  {
    'name': 'Customer 908',
    'state': 'RN',
  },
  {
    'name': 'Customer 909',
    'state': 'CE',
  },
  {
    'name': 'Customer 910',
    'state': 'RS',
  },
  {
    'name': 'Customer 911',
    'state': 'MA',
  },
  {
    'name': 'Customer 912',
    'state': 'AC',
  },
  {
    'name': 'Customer 913',
    'state': 'RS',
  },
  {
    'name': 'Customer 914',
    'state': 'TO',
  },
  {
    'name': 'Customer 915',
    'state': 'PR',
  },
  {
    'name': 'Customer 916',
    'state': 'PA',
  },
  {
    'name': 'Customer 917',
    'state': 'RR',
  },
  {
    'name': 'Customer 918',
    'state': 'SE',
  },
  {
    'name': 'Customer 919',
    'state': 'MG',
  },
  {
    'name': 'Customer 920',
    'state': 'MT',
  },
  {
    'name': 'Customer 921',
    'state': 'GO',
  },
  {
    'name': 'Customer 922',
    'state': 'RJ',
  },
  {
    'name': 'Customer 923',
    'state': 'TO',
  },
  {
    'name': 'Customer 924',
    'state': 'SP',
  },
  {
    'name': 'Customer 925',
    'state': 'MS',
  },
  {
    'name': 'Customer 926',
    'state': 'PB',
  },
  {
    'name': 'Customer 927',
    'state': 'AC',
  },
  {
    'name': 'Customer 928',
    'state': 'GO',
  },
  {
    'name': 'Customer 929',
    'state': 'RN',
  },
  {
    'name': 'Customer 930',
    'state': 'RJ',
  },
  {
    'name': 'Customer 931',
    'state': 'MT',
  },
  {
    'name': 'Customer 932',
    'state': 'MT',
  },
  {
    'name': 'Customer 933',
    'state': 'RN',
  },
  {
    'name': 'Customer 934',
    'state': 'RJ',
  },
  {
    'name': 'Customer 935',
    'state': 'PA',
  },
  {
    'name': 'Customer 936',
    'state': 'AL',
  },
  {
    'name': 'Customer 937',
    'state': 'SP',
  },
  {
    'name': 'Customer 938',
    'state': 'MT',
  },
  {
    'name': 'Customer 939',
    'state': 'SC',
  },
  {
    'name': 'Customer 940',
    'state': 'RO',
  },
  {
    'name': 'Customer 941',
    'state': 'SE',
  },
  {
    'name': 'Customer 942',
    'state': 'RR',
  },
  {
    'name': 'Customer 943',
    'state': 'PA',
  },
  {
    'name': 'Customer 944',
    'state': 'PR',
  },
  {
    'name': 'Customer 945',
    'state': 'MG',
  },
  {
    'name': 'Customer 946',
    'state': 'MG',
  },
  {
    'name': 'Customer 947',
    'state': 'AC',
  },
  {
    'name': 'Customer 948',
    'state': 'SP',
  },
  {
    'name': 'Customer 949',
    'state': 'SC',
  },
  {
    'name': 'Customer 950',
    'state': 'BA',
  },
  {
    'name': 'Customer 951',
    'state': 'AC',
  },
  {
    'name': 'Customer 952',
    'state': 'RJ',
  },
  {
    'name': 'Customer 953',
    'state': 'GO',
  },
  {
    'name': 'Customer 954',
    'state': 'AM',
  },
  {
    'name': 'Customer 955',
    'state': 'MT',
  },
  {
    'name': 'Customer 956',
    'state': 'MG',
  },
  {
    'name': 'Customer 957',
    'state': 'MA',
  },
  {
    'name': 'Customer 958',
    'state': 'MG',
  },
  {
    'name': 'Customer 959',
    'state': 'PB',
  },
  {
    'name': 'Customer 960',
    'state': 'MT',
  },
  {
    'name': 'Customer 961',
    'state': 'AM',
  },
  {
    'name': 'Customer 962',
    'state': 'SP',
  },
  {
    'name': 'Customer 963',
    'state': 'RS',
  },
  {
    'name': 'Customer 964',
    'state': 'AM',
  },
  {
    'name': 'Customer 965',
    'state': 'PI',
  },
  {
    'name': 'Customer 966',
    'state': 'PB',
  },
  {
    'name': 'Customer 967',
    'state': 'MG',
  },
  {
    'name': 'Customer 968',
    'state': 'AM',
  },
  {
    'name': 'Customer 969',
    'state': 'DF',
  },
  {
    'name': 'Customer 970',
    'state': 'ES',
  },
  {
    'name': 'Customer 971',
    'state': 'PR',
  },
  {
    'name': 'Customer 972',
    'state': 'ES',
  },
  {
    'name': 'Customer 973',
    'state': 'PE',
  },
  {
    'name': 'Customer 974',
    'state': 'SE',
  },
  {
    'name': 'Customer 975',
    'state': 'SC',
  },
  {
    'name': 'Customer 976',
    'state': 'RS',
  },
  {
    'name': 'Customer 977',
    'state': 'PE',
  },
  {
    'name': 'Customer 978',
    'state': 'DF',
  },
  {
    'name': 'Customer 979',
    'state': 'PR',
  },
  {
    'name': 'Customer 980',
    'state': 'MT',
  },
  {
    'name': 'Customer 981',
    'state': 'PR',
  },
  {
    'name': 'Customer 982',
    'state': 'MS',
  },
  {
    'name': 'Customer 983',
    'state': 'AL',
  },
  {
    'name': 'Customer 984',
    'state': 'GO',
  },
  {
    'name': 'Customer 985',
    'state': 'GO',
  },
  {
    'name': 'Customer 986',
    'state': 'PB',
  },
  {
    'name': 'Customer 987',
    'state': 'RS',
  },
  {
    'name': 'Customer 988',
    'state': 'PB',
  },
  {
    'name': 'Customer 989',
    'state': 'ES',
  },
  {
    'name': 'Customer 990',
    'state': 'MG',
  },
  {
    'name': 'Customer 991',
    'state': 'MS',
  },
  {
    'name': 'Customer 992',
    'state': 'MG',
  },
  {
    'name': 'Customer 993',
    'state': 'MT',
  },
  {
    'name': 'Customer 994',
    'state': 'AC',
  },
  {
    'name': 'Customer 995',
    'state': 'ES',
  },
  {
    'name': 'Customer 996',
    'state': 'PB',
  },
  {
    'name': 'Customer 997',
    'state': 'GO',
  },
  {
    'name': 'Customer 998',
    'state': 'MA',
  },
  {
    'name': 'Customer 999',
    'state': 'PR',
  },
  {
    'name': 'Customer 1000',
    'state': 'RS',
  },
  {
    'name': 'Customer 1001',
    'state': 'MG',
  },
  {
    'name': 'Customer 1002',
    'state': 'RS',
  },
  {
    'name': 'Customer 1003',
    'state': 'SE',
  },
  {
    'name': 'Customer 1004',
    'state': 'RJ',
  },
  {
    'name': 'Customer 1005',
    'state': 'RJ',
  },
  {
    'name': 'Customer 1006',
    'state': 'RO',
  },
  {
    'name': 'Customer 1007',
    'state': 'AL',
  },
  {
    'name': 'Customer 1008',
    'state': 'AC',
  },
  {
    'name': 'Customer 1009',
    'state': 'RO',
  },
  {
    'name': 'Customer 1010',
    'state': 'AM',
  },
  {
    'name': 'Customer 1011',
    'state': 'AL',
  },
  {
    'name': 'Customer 1012',
    'state': 'AL',
  },
  {
    'name': 'Customer 1013',
    'state': 'CE',
  },
  {
    'name': 'Customer 1014',
    'state': 'AP',
  },
  {
    'name': 'Customer 1015',
    'state': 'MS',
  },
  {
    'name': 'Customer 1016',
    'state': 'RO',
  },
  {
    'name': 'Customer 1017',
    'state': 'PI',
  },
  {
    'name': 'Customer 1018',
    'state': 'AL',
  },
  {
    'name': 'Customer 1019',
    'state': 'AM',
  },
  {
    'name': 'Customer 1020',
    'state': 'PA',
  },
  {
    'name': 'Customer 1021',
    'state': 'PE',
  },
  {
    'name': 'Customer 1022',
    'state': 'AP',
  },
  {
    'name': 'Customer 1023',
    'state': 'BA',
  },
  {
    'name': 'Customer 1024',
    'state': 'GO',
  },
  {
    'name': 'Customer 1025',
    'state': 'BA',
  },
  {
    'name': 'Customer 1026',
    'state': 'AC',
  },
  {
    'name': 'Customer 1027',
    'state': 'GO',
  },
  {
    'name': 'Customer 1028',
    'state': 'RR',
  },
  {
    'name': 'Customer 1029',
    'state': 'RN',
  },
  {
    'name': 'Customer 1030',
    'state': 'SP',
  },
  {
    'name': 'Customer 1031',
    'state': 'TO',
  },
  {
    'name': 'Customer 1032',
    'state': 'AM',
  },
  {
    'name': 'Customer 1033',
    'state': 'SC',
  },
  {
    'name': 'Customer 1034',
    'state': 'SC',
  },
  {
    'name': 'Customer 1035',
    'state': 'MT',
  },
  {
    'name': 'Customer 1036',
    'state': 'RO',
  },
  {
    'name': 'Customer 1037',
    'state': 'MT',
  },
  {
    'name': 'Customer 1038',
    'state': 'MT',
  },
  {
    'name': 'Customer 1039',
    'state': 'RR',
  },
  {
    'name': 'Customer 1040',
    'state': 'RR',
  },
  {
    'name': 'Customer 1041',
    'state': 'MA',
  },
  {
    'name': 'Customer 1042',
    'state': 'AP',
  },
  {
    'name': 'Customer 1043',
    'state': 'PI',
  },
  {
    'name': 'Customer 1044',
    'state': 'PB',
  },
  {
    'name': 'Customer 1045',
    'state': 'AC',
  },
  {
    'name': 'Customer 1046',
    'state': 'ES',
  },
  {
    'name': 'Customer 1047',
    'state': 'RN',
  },
  {
    'name': 'Customer 1048',
    'state': 'BA',
  },
  {
    'name': 'Customer 1049',
    'state': 'ES',
  },
  {
    'name': 'Customer 1050',
    'state': 'RS',
  },
  {
    'name': 'Customer 1051',
    'state': 'PA',
  },
  {
    'name': 'Customer 1052',
    'state': 'PB',
  },
  {
    'name': 'Customer 1053',
    'state': 'AP',
  },
  {
    'name': 'Customer 1054',
    'state': 'PI',
  },
  {
    'name': 'Customer 1055',
    'state': 'MG',
  },
  {
    'name': 'Customer 1056',
    'state': 'RS',
  },
  {
    'name': 'Customer 1057',
    'state': 'MT',
  },
  {
    'name': 'Customer 1058',
    'state': 'TO',
  },
  {
    'name': 'Customer 1059',
    'state': 'MT',
  },
  {
    'name': 'Customer 1060',
    'state': 'TO',
  },
  {
    'name': 'Customer 1061',
    'state': 'RN',
  },
  {
    'name': 'Customer 1062',
    'state': 'DF',
  },
  {
    'name': 'Customer 1063',
    'state': 'BA',
  },
  {
    'name': 'Customer 1064',
    'state': 'RS',
  },
  {
    'name': 'Customer 1065',
    'state': 'AP',
  },
  {
    'name': 'Customer 1066',
    'state': 'MS',
  },
  {
    'name': 'Customer 1067',
    'state': 'MT',
  },
  {
    'name': 'Customer 1068',
    'state': 'AC',
  },
  {
    'name': 'Customer 1069',
    'state': 'MS',
  },
  {
    'name': 'Customer 1070',
    'state': 'RN',
  },
  {
    'name': 'Customer 1071',
    'state': 'PR',
  },
  {
    'name': 'Customer 1072',
    'state': 'SC',
  },
  {
    'name': 'Customer 1073',
    'state': 'RJ',
  },
  {
    'name': 'Customer 1074',
    'state': 'AM',
  },
  {
    'name': 'Customer 1075',
    'state': 'MG',
  },
  {
    'name': 'Customer 1076',
    'state': 'RR',
  },
  {
    'name': 'Customer 1077',
    'state': 'SP',
  },
  {
    'name': 'Customer 1078',
    'state': 'PI',
  },
  {
    'name': 'Customer 1079',
    'state': 'BA',
  },
  {
    'name': 'Customer 1080',
    'state': 'AM',
  },
  {
    'name': 'Customer 1081',
    'state': 'SP',
  },
  {
    'name': 'Customer 1082',
    'state': 'AM',
  },
  {
    'name': 'Customer 1083',
    'state': 'MG',
  },
  {
    'name': 'Customer 1084',
    'state': 'AP',
  },
  {
    'name': 'Customer 1085',
    'state': 'DF',
  },
  {
    'name': 'Customer 1086',
    'state': 'SE',
  },
  {
    'name': 'Customer 1087',
    'state': 'PA',
  },
  {
    'name': 'Customer 1088',
    'state': 'MA',
  },
  {
    'name': 'Customer 1089',
    'state': 'MA',
  },
  {
    'name': 'Customer 1090',
    'state': 'MG',
  },
  {
    'name': 'Customer 1091',
    'state': 'MT',
  },
  {
    'name': 'Customer 1092',
    'state': 'CE',
  },
  {
    'name': 'Customer 1093',
    'state': 'RR',
  },
  {
    'name': 'Customer 1094',
    'state': 'RO',
  },
  {
    'name': 'Customer 1095',
    'state': 'SP',
  },
  {
    'name': 'Customer 1096',
    'state': 'SC',
  },
  {
    'name': 'Customer 1097',
    'state': 'PI',
  },
  {
    'name': 'Customer 1098',
    'state': 'SC',
  },
  {
    'name': 'Customer 1099',
    'state': 'AC',
  },
  {
    'name': 'Customer 1100',
    'state': 'RS',
  },
  {
    'name': 'Customer 1101',
    'state': 'PB',
  },
  {
    'name': 'Customer 1102',
    'state': 'MG',
  },
  {
    'name': 'Customer 1103',
    'state': 'AM',
  },
  {
    'name': 'Customer 1104',
    'state': 'RJ',
  },
  {
    'name': 'Customer 1105',
    'state': 'MT',
  },
  {
    'name': 'Customer 1106',
    'state': 'SE',
  },
  {
    'name': 'Customer 1107',
    'state': 'BA',
  },
  {
    'name': 'Customer 1108',
    'state': 'DF',
  },
  {
    'name': 'Customer 1109',
    'state': 'MT',
  },
  {
    'name': 'Customer 1110',
    'state': 'SC',
  },
  {
    'name': 'Customer 1111',
    'state': 'SE',
  },
  {
    'name': 'Customer 1112',
    'state': 'AM',
  },
  {
    'name': 'Customer 1113',
    'state': 'PE',
  },
  {
    'name': 'Customer 1114',
    'state': 'PB',
  },
  {
    'name': 'Customer 1115',
    'state': 'GO',
  },
  {
    'name': 'Customer 1116',
    'state': 'SC',
  },
  {
    'name': 'Customer 1117',
    'state': 'PR',
  },
  {
    'name': 'Customer 1118',
    'state': 'PI',
  },
  {
    'name': 'Customer 1119',
    'state': 'MG',
  },
  {
    'name': 'Customer 1120',
    'state': 'AC',
  },
  {
    'name': 'Customer 1121',
    'state': 'DF',
  },
  {
    'name': 'Customer 1122',
    'state': 'MA',
  },
  {
    'name': 'Customer 1123',
    'state': 'MG',
  },
  {
    'name': 'Customer 1124',
    'state': 'MS',
  },
  {
    'name': 'Customer 1125',
    'state': 'GO',
  },
  {
    'name': 'Customer 1126',
    'state': 'AP',
  },
  {
    'name': 'Customer 1127',
    'state': 'GO',
  },
  {
    'name': 'Customer 1128',
    'state': 'AM',
  },
  {
    'name': 'Customer 1129',
    'state': 'PA',
  },
  {
    'name': 'Customer 1130',
    'state': 'MT',
  },
  {
    'name': 'Customer 1131',
    'state': 'TO',
  },
  {
    'name': 'Customer 1132',
    'state': 'RO',
  },
  {
    'name': 'Customer 1133',
    'state': 'AM',
  },
  {
    'name': 'Customer 1134',
    'state': 'CE',
  },
  {
    'name': 'Customer 1135',
    'state': 'RN',
  },
  {
    'name': 'Customer 1136',
    'state': 'AC',
  },
  {
    'name': 'Customer 1137',
    'state': 'RR',
  },
  {
    'name': 'Customer 1138',
    'state': 'AM',
  },
  {
    'name': 'Customer 1139',
    'state': 'AM',
  },
  {
    'name': 'Customer 1140',
    'state': 'MA',
  },
  {
    'name': 'Customer 1141',
    'state': 'ES',
  },
  {
    'name': 'Customer 1142',
    'state': 'BA',
  },
  {
    'name': 'Customer 1143',
    'state': 'PB',
  },
  {
    'name': 'Customer 1144',
    'state': 'SE',
  },
  {
    'name': 'Customer 1145',
    'state': 'SC',
  },
  {
    'name': 'Customer 1146',
    'state': 'RO',
  },
  {
    'name': 'Customer 1147',
    'state': 'DF',
  },
  {
    'name': 'Customer 1148',
    'state': 'PR',
  },
  {
    'name': 'Customer 1149',
    'state': 'MG',
  },
  {
    'name': 'Customer 1150',
    'state': 'TO',
  },
  {
    'name': 'Customer 1151',
    'state': 'AC',
  },
  {
    'name': 'Customer 1152',
    'state': 'RJ',
  },
  {
    'name': 'Customer 1153',
    'state': 'ES',
  },
  {
    'name': 'Customer 1154',
    'state': 'AM',
  },
  {
    'name': 'Customer 1155',
    'state': 'SP',
  },
  {
    'name': 'Customer 1156',
    'state': 'TO',
  },
  {
    'name': 'Customer 1157',
    'state': 'PR',
  },
  {
    'name': 'Customer 1158',
    'state': 'RS',
  },
  {
    'name': 'Customer 1159',
    'state': 'RJ',
  },
  {
    'name': 'Customer 1160',
    'state': 'MT',
  },
  {
    'name': 'Customer 1161',
    'state': 'RO',
  },
  {
    'name': 'Customer 1162',
    'state': 'MT',
  },
  {
    'name': 'Customer 1163',
    'state': 'PR',
  },
  {
    'name': 'Customer 1164',
    'state': 'PI',
  },
  {
    'name': 'Customer 1165',
    'state': 'SE',
  },
  {
    'name': 'Customer 1166',
    'state': 'PE',
  },
  {
    'name': 'Customer 1167',
    'state': 'RO',
  },
  {
    'name': 'Customer 1168',
    'state': 'GO',
  },
  {
    'name': 'Customer 1169',
    'state': 'MS',
  },
  {
    'name': 'Customer 1170',
    'state': 'PB',
  },
  {
    'name': 'Customer 1171',
    'state': 'MT',
  },
  {
    'name': 'Customer 1172',
    'state': 'RO',
  },
  {
    'name': 'Customer 1173',
    'state': 'TO',
  },
  {
    'name': 'Customer 1174',
    'state': 'PE',
  },
  {
    'name': 'Customer 1175',
    'state': 'RJ',
  },
  {
    'name': 'Customer 1176',
    'state': 'AC',
  },
  {
    'name': 'Customer 1177',
    'state': 'AL',
  },
  {
    'name': 'Customer 1178',
    'state': 'CE',
  },
  {
    'name': 'Customer 1179',
    'state': 'SP',
  },
  {
    'name': 'Customer 1180',
    'state': 'PR',
  },
  {
    'name': 'Customer 1181',
    'state': 'RR',
  },
  {
    'name': 'Customer 1182',
    'state': 'PE',
  },
  {
    'name': 'Customer 1183',
    'state': 'PE',
  },
  {
    'name': 'Customer 1184',
    'state': 'SP',
  },
  {
    'name': 'Customer 1185',
    'state': 'DF',
  },
  {
    'name': 'Customer 1186',
    'state': 'SP',
  },
  {
    'name': 'Customer 1187',
    'state': 'RR',
  },
  {
    'name': 'Customer 1188',
    'state': 'CE',
  },
  {
    'name': 'Customer 1189',
    'state': 'DF',
  },
  {
    'name': 'Customer 1190',
    'state': 'SP',
  },
  {
    'name': 'Customer 1191',
    'state': 'RR',
  },
  {
    'name': 'Customer 1192',
    'state': 'MG',
  },
  {
    'name': 'Customer 1193',
    'state': 'RO',
  },
  {
    'name': 'Customer 1194',
    'state': 'MA',
  },
  {
    'name': 'Customer 1195',
    'state': 'BA',
  },
  {
    'name': 'Customer 1196',
    'state': 'AC',
  },
  {
    'name': 'Customer 1197',
    'state': 'MG',
  },
  {
    'name': 'Customer 1198',
    'state': 'PB',
  },
  {
    'name': 'Customer 1199',
    'state': 'SC',
  },
  {
    'name': 'Customer 1200',
    'state': 'MG',
  },
  {
    'name': 'Customer 1201',
    'state': 'MA',
  },
  {
    'name': 'Customer 1202',
    'state': 'RR',
  },
  {
    'name': 'Customer 1203',
    'state': 'PB',
  },
  {
    'name': 'Customer 1204',
    'state': 'MT',
  },
  {
    'name': 'Customer 1205',
    'state': 'AL',
  },
  {
    'name': 'Customer 1206',
    'state': 'DF',
  },
  {
    'name': 'Customer 1207',
    'state': 'BA',
  },
  {
    'name': 'Customer 1208',
    'state': 'AM',
  },
  {
    'name': 'Customer 1209',
    'state': 'PR',
  },
  {
    'name': 'Customer 1210',
    'state': 'RJ',
  },
  {
    'name': 'Customer 1211',
    'state': 'PE',
  },
  {
    'name': 'Customer 1212',
    'state': 'AL',
  },
  {
    'name': 'Customer 1213',
    'state': 'MG',
  },
  {
    'name': 'Customer 1214',
    'state': 'PA',
  },
  {
    'name': 'Customer 1215',
    'state': 'PR',
  },
  {
    'name': 'Customer 1216',
    'state': 'ES',
  },
  {
    'name': 'Customer 1217',
    'state': 'PI',
  },
  {
    'name': 'Customer 1218',
    'state': 'SE',
  },
  {
    'name': 'Customer 1219',
    'state': 'AC',
  },
  {
    'name': 'Customer 1220',
    'state': 'DF',
  },
  {
    'name': 'Customer 1221',
    'state': 'AC',
  },
  {
    'name': 'Customer 1222',
    'state': 'CE',
  },
  {
    'name': 'Customer 1223',
    'state': 'AM',
  },
  {
    'name': 'Customer 1224',
    'state': 'PI',
  },
  {
    'name': 'Customer 1225',
    'state': 'SE',
  },
  {
    'name': 'Customer 1226',
    'state': 'MS',
  },
  {
    'name': 'Customer 1227',
    'state': 'MT',
  },
  {
    'name': 'Customer 1228',
    'state': 'GO',
  },
  {
    'name': 'Customer 1229',
    'state': 'MG',
  },
  {
    'name': 'Customer 1230',
    'state': 'AC',
  },
  {
    'name': 'Customer 1231',
    'state': 'TO',
  },
  {
    'name': 'Customer 1232',
    'state': 'AM',
  },
  {
    'name': 'Customer 1233',
    'state': 'RN',
  },
  {
    'name': 'Customer 1234',
    'state': 'AP',
  },
  {
    'name': 'Customer 1235',
    'state': 'MS',
  },
  {
    'name': 'Customer 1236',
    'state': 'ES',
  },
  {
    'name': 'Customer 1237',
    'state': 'MG',
  },
  {
    'name': 'Customer 1238',
    'state': 'RS',
  },
  {
    'name': 'Customer 1239',
    'state': 'RR',
  },
  {
    'name': 'Customer 1240',
    'state': 'GO',
  },
  {
    'name': 'Customer 1241',
    'state': 'MG',
  },
  {
    'name': 'Customer 1242',
    'state': 'SE',
  },
  {
    'name': 'Customer 1243',
    'state': 'RR',
  },
  {
    'name': 'Customer 1244',
    'state': 'MS',
  },
  {
    'name': 'Customer 1245',
    'state': 'AC',
  },
  {
    'name': 'Customer 1246',
    'state': 'GO',
  },
  {
    'name': 'Customer 1247',
    'state': 'MG',
  },
  {
    'name': 'Customer 1248',
    'state': 'PE',
  },
  {
    'name': 'Customer 1249',
    'state': 'PB',
  },
  {
    'name': 'Customer 1250',
    'state': 'RR',
  },
  {
    'name': 'Customer 1251',
    'state': 'GO',
  },
  {
    'name': 'Customer 1252',
    'state': 'AP',
  },
  {
    'name': 'Customer 1253',
    'state': 'ES',
  },
  {
    'name': 'Customer 1254',
    'state': 'MT',
  },
  {
    'name': 'Customer 1255',
    'state': 'PB',
  },
  {
    'name': 'Customer 1256',
    'state': 'RN',
  },
  {
    'name': 'Customer 1257',
    'state': 'RO',
  },
  {
    'name': 'Customer 1258',
    'state': 'BA',
  },
  {
    'name': 'Customer 1259',
    'state': 'AL',
  },
  {
    'name': 'Customer 1260',
    'state': 'AM',
  },
  {
    'name': 'Customer 1261',
    'state': 'RO',
  },
  {
    'name': 'Customer 1262',
    'state': 'AL',
  },
  {
    'name': 'Customer 1263',
    'state': 'MT',
  },
  {
    'name': 'Customer 1264',
    'state': 'SE',
  },
  {
    'name': 'Customer 1265',
    'state': 'RS',
  },
  {
    'name': 'Customer 1266',
    'state': 'MG',
  },
  {
    'name': 'Customer 1267',
    'state': 'AP',
  },
  {
    'name': 'Customer 1268',
    'state': 'RJ',
  },
  {
    'name': 'Customer 1269',
    'state': 'AM',
  },
  {
    'name': 'Customer 1270',
    'state': 'MA',
  },
  {
    'name': 'Customer 1271',
    'state': 'PB',
  },
  {
    'name': 'Customer 1272',
    'state': 'MG',
  },
  {
    'name': 'Customer 1273',
    'state': 'BA',
  },
  {
    'name': 'Customer 1274',
    'state': 'CE',
  },
  {
    'name': 'Customer 1275',
    'state': 'AM',
  },
  {
    'name': 'Customer 1276',
    'state': 'SE',
  },
  {
    'name': 'Customer 1277',
    'state': 'MT',
  },
  {
    'name': 'Customer 1278',
    'state': 'PB',
  },
  {
    'name': 'Customer 1279',
    'state': 'MG',
  },
  {
    'name': 'Customer 1280',
    'state': 'DF',
  },
  {
    'name': 'Customer 1281',
    'state': 'MS',
  },
  {
    'name': 'Customer 1282',
    'state': 'AP',
  },
  {
    'name': 'Customer 1283',
    'state': 'RS',
  },
  {
    'name': 'Customer 1284',
    'state': 'PE',
  },
  {
    'name': 'Customer 1285',
    'state': 'PA',
  },
  {
    'name': 'Customer 1286',
    'state': 'DF',
  },
  {
    'name': 'Customer 1287',
    'state': 'ES',
  },
  {
    'name': 'Customer 1288',
    'state': 'MT',
  },
  {
    'name': 'Customer 1289',
    'state': 'AM',
  },
  {
    'name': 'Customer 1290',
    'state': 'RN',
  },
  {
    'name': 'Customer 1291',
    'state': 'GO',
  },
  {
    'name': 'Customer 1292',
    'state': 'AM',
  },
  {
    'name': 'Customer 1293',
    'state': 'MA',
  },
  {
    'name': 'Customer 1294',
    'state': 'RS',
  },
  {
    'name': 'Customer 1295',
    'state': 'MG',
  },
  {
    'name': 'Customer 1296',
    'state': 'AC',
  },
  {
    'name': 'Customer 1297',
    'state': 'RO',
  },
  {
    'name': 'Customer 1298',
    'state': 'AC',
  },
  {
    'name': 'Customer 1299',
    'state': 'CE',
  },
  {
    'name': 'Customer 1300',
    'state': 'MT',
  },
  {
    'name': 'Customer 1301',
    'state': 'RS',
  },
  {
    'name': 'Customer 1302',
    'state': 'SE',
  },
  {
    'name': 'Customer 1303',
    'state': 'MG',
  },
  {
    'name': 'Customer 1304',
    'state': 'SE',
  },
  {
    'name': 'Customer 1305',
    'state': 'CE',
  },
  {
    'name': 'Customer 1306',
    'state': 'MG',
  },
  {
    'name': 'Customer 1307',
    'state': 'SC',
  },
  {
    'name': 'Customer 1308',
    'state': 'MG',
  },
  {
    'name': 'Customer 1309',
    'state': 'AC',
  },
  {
    'name': 'Customer 1310',
    'state': 'PB',
  },
  {
    'name': 'Customer 1311',
    'state': 'SC',
  },
  {
    'name': 'Customer 1312',
    'state': 'RN',
  },
  {
    'name': 'Customer 1313',
    'state': 'MT',
  },
  {
    'name': 'Customer 1314',
    'state': 'SP',
  },
  {
    'name': 'Customer 1315',
    'state': 'ES',
  },
  {
    'name': 'Customer 1316',
    'state': 'RN',
  },
  {
    'name': 'Customer 1317',
    'state': 'GO',
  },
  {
    'name': 'Customer 1318',
    'state': 'BA',
  },
  {
    'name': 'Customer 1319',
    'state': 'GO',
  },
  {
    'name': 'Customer 1320',
    'state': 'DF',
  },
  {
    'name': 'Customer 1321',
    'state': 'RN',
  },
  {
    'name': 'Customer 1322',
    'state': 'RS',
  },
  {
    'name': 'Customer 1323',
    'state': 'TO',
  },
  {
    'name': 'Customer 1324',
    'state': 'DF',
  },
  {
    'name': 'Customer 1325',
    'state': 'GO',
  },
  {
    'name': 'Customer 1326',
    'state': 'ES',
  },
  {
    'name': 'Customer 1327',
    'state': 'RN',
  },
  {
    'name': 'Customer 1328',
    'state': 'RS',
  },
  {
    'name': 'Customer 1329',
    'state': 'MS',
  },
  {
    'name': 'Customer 1330',
    'state': 'RS',
  },
  {
    'name': 'Customer 1331',
    'state': 'BA',
  },
  {
    'name': 'Customer 1332',
    'state': 'DF',
  },
  {
    'name': 'Customer 1333',
    'state': 'RR',
  },
  {
    'name': 'Customer 1334',
    'state': 'MS',
  },
  {
    'name': 'Customer 1335',
    'state': 'PB',
  },
  {
    'name': 'Customer 1336',
    'state': 'MG',
  },
  {
    'name': 'Customer 1337',
    'state': 'RS',
  },
  {
    'name': 'Customer 1338',
    'state': 'SC',
  },
  {
    'name': 'Customer 1339',
    'state': 'MT',
  },
  {
    'name': 'Customer 1340',
    'state': 'AM',
  },
  {
    'name': 'Customer 1341',
    'state': 'AP',
  },
  {
    'name': 'Customer 1342',
    'state': 'AL',
  },
  {
    'name': 'Customer 1343',
    'state': 'RN',
  },
  {
    'name': 'Customer 1344',
    'state': 'TO',
  },
  {
    'name': 'Customer 1345',
    'state': 'AP',
  },
  {
    'name': 'Customer 1346',
    'state': 'ES',
  },
  {
    'name': 'Customer 1347',
    'state': 'PA',
  },
  {
    'name': 'Customer 1348',
    'state': 'RN',
  },
  {
    'name': 'Customer 1349',
    'state': 'MG',
  },
  {
    'name': 'Customer 1350',
    'state': 'ES',
  },
  {
    'name': 'Customer 1351',
    'state': 'PE',
  },
  {
    'name': 'Customer 1352',
    'state': 'CE',
  },
  {
    'name': 'Customer 1353',
    'state': 'PB',
  },
  {
    'name': 'Customer 1354',
    'state': 'PE',
  },
  {
    'name': 'Customer 1355',
    'state': 'CE',
  },
  {
    'name': 'Customer 1356',
    'state': 'AC',
  },
  {
    'name': 'Customer 1357',
    'state': 'PE',
  },
  {
    'name': 'Customer 1358',
    'state': 'AP',
  },
  {
    'name': 'Customer 1359',
    'state': 'GO',
  },
  {
    'name': 'Customer 1360',
    'state': 'MT',
  },
  {
    'name': 'Customer 1361',
    'state': 'AL',
  },
  {
    'name': 'Customer 1362',
    'state': 'RN',
  },
  {
    'name': 'Customer 1363',
    'state': 'MG',
  },
  {
    'name': 'Customer 1364',
    'state': 'GO',
  },
  {
    'name': 'Customer 1365',
    'state': 'ES',
  },
  {
    'name': 'Customer 1366',
    'state': 'PB',
  },
  {
    'name': 'Customer 1367',
    'state': 'BA',
  },
  {
    'name': 'Customer 1368',
    'state': 'DF',
  },
  {
    'name': 'Customer 1369',
    'state': 'MT',
  },
  {
    'name': 'Customer 1370',
    'state': 'PR',
  },
  {
    'name': 'Customer 1371',
    'state': 'AM',
  },
  {
    'name': 'Customer 1372',
    'state': 'RO',
  },
  {
    'name': 'Customer 1373',
    'state': 'MT',
  },
  {
    'name': 'Customer 1374',
    'state': 'SE',
  },
  {
    'name': 'Customer 1375',
    'state': 'PI',
  },
  {
    'name': 'Customer 1376',
    'state': 'PR',
  },
  {
    'name': 'Customer 1377',
    'state': 'ES',
  },
  {
    'name': 'Customer 1378',
    'state': 'PI',
  },
  {
    'name': 'Customer 1379',
    'state': 'PB',
  },
  {
    'name': 'Customer 1380',
    'state': 'SC',
  },
  {
    'name': 'Customer 1381',
    'state': 'MT',
  },
  {
    'name': 'Customer 1382',
    'state': 'DF',
  },
  {
    'name': 'Customer 1383',
    'state': 'AP',
  },
  {
    'name': 'Customer 1384',
    'state': 'PA',
  },
  {
    'name': 'Customer 1385',
    'state': 'PR',
  },
  {
    'name': 'Customer 1386',
    'state': 'GO',
  },
  {
    'name': 'Customer 1387',
    'state': 'SE',
  },
  {
    'name': 'Customer 1388',
    'state': 'AC',
  },
  {
    'name': 'Customer 1389',
    'state': 'SP',
  },
  {
    'name': 'Customer 1390',
    'state': 'AL',
  },
  {
    'name': 'Customer 1391',
    'state': 'GO',
  },
  {
    'name': 'Customer 1392',
    'state': 'PR',
  },
  {
    'name': 'Customer 1393',
    'state': 'PR',
  },
  {
    'name': 'Customer 1394',
    'state': 'MG',
  },
  {
    'name': 'Customer 1395',
    'state': 'PB',
  },
  {
    'name': 'Customer 1396',
    'state': 'PE',
  },
  {
    'name': 'Customer 1397',
    'state': 'MG',
  },
  {
    'name': 'Customer 1398',
    'state': 'MS',
  },
  {
    'name': 'Customer 1399',
    'state': 'MS',
  },
  {
    'name': 'Customer 1400',
    'state': 'MG',
  },
  {
    'name': 'Customer 1401',
    'state': 'GO',
  },
  {
    'name': 'Customer 1402',
    'state': 'AC',
  },
  {
    'name': 'Customer 1403',
    'state': 'SP',
  },
  {
    'name': 'Customer 1404',
    'state': 'SP',
  },
  {
    'name': 'Customer 1405',
    'state': 'GO',
  },
  {
    'name': 'Customer 1406',
    'state': 'RS',
  },
  {
    'name': 'Customer 1407',
    'state': 'PI',
  },
  {
    'name': 'Customer 1408',
    'state': 'SP',
  },
  {
    'name': 'Customer 1409',
    'state': 'MG',
  },
  {
    'name': 'Customer 1410',
    'state': 'ES',
  },
  {
    'name': 'Customer 1411',
    'state': 'MT',
  },
  {
    'name': 'Customer 1412',
    'state': 'AP',
  },
  {
    'name': 'Customer 1413',
    'state': 'BA',
  },
  {
    'name': 'Customer 1414',
    'state': 'AL',
  },
  {
    'name': 'Customer 1415',
    'state': 'DF',
  },
  {
    'name': 'Customer 1416',
    'state': 'ES',
  },
  {
    'name': 'Customer 1417',
    'state': 'ES',
  },
  {
    'name': 'Customer 1418',
    'state': 'AP',
  },
  {
    'name': 'Customer 1419',
    'state': 'AM',
  },
  {
    'name': 'Customer 1420',
    'state': 'AC',
  },
  {
    'name': 'Customer 1421',
    'state': 'RO',
  },
  {
    'name': 'Customer 1422',
    'state': 'MS',
  },
  {
    'name': 'Customer 1423',
    'state': 'CE',
  },
  {
    'name': 'Customer 1424',
    'state': 'MS',
  },
  {
    'name': 'Customer 1425',
    'state': 'CE',
  },
  {
    'name': 'Customer 1426',
    'state': 'MT',
  },
  {
    'name': 'Customer 1427',
    'state': 'GO',
  },
  {
    'name': 'Customer 1428',
    'state': 'MS',
  },
  {
    'name': 'Customer 1429',
    'state': 'ES',
  },
  {
    'name': 'Customer 1430',
    'state': 'CE',
  },
  {
    'name': 'Customer 1431',
    'state': 'BA',
  },
  {
    'name': 'Customer 1432',
    'state': 'SP',
  },
  {
    'name': 'Customer 1433',
    'state': 'AM',
  },
  {
    'name': 'Customer 1434',
    'state': 'GO',
  },
  {
    'name': 'Customer 1435',
    'state': 'MT',
  },
  {
    'name': 'Customer 1436',
    'state': 'ES',
  },
  {
    'name': 'Customer 1437',
    'state': 'MG',
  },
  {
    'name': 'Customer 1438',
    'state': 'MA',
  },
  {
    'name': 'Customer 1439',
    'state': 'ES',
  },
  {
    'name': 'Customer 1440',
    'state': 'PI',
  },
  {
    'name': 'Customer 1441',
    'state': 'MT',
  },
  {
    'name': 'Customer 1442',
    'state': 'AP',
  },
  {
    'name': 'Customer 1443',
    'state': 'PA',
  },
  {
    'name': 'Customer 1444',
    'state': 'TO',
  },
  {
    'name': 'Customer 1445',
    'state': 'RO',
  },
  {
    'name': 'Customer 1446',
    'state': 'SE',
  },
  {
    'name': 'Customer 1447',
    'state': 'RR',
  },
  {
    'name': 'Customer 1448',
    'state': 'AC',
  },
  {
    'name': 'Customer 1449',
    'state': 'PE',
  },
  {
    'name': 'Customer 1450',
    'state': 'TO',
  },
  {
    'name': 'Customer 1451',
    'state': 'PB',
  },
  {
    'name': 'Customer 1452',
    'state': 'GO',
  },
  {
    'name': 'Customer 1453',
    'state': 'GO',
  },
  {
    'name': 'Customer 1454',
    'state': 'PE',
  },
  {
    'name': 'Customer 1455',
    'state': 'AC',
  },
  {
    'name': 'Customer 1456',
    'state': 'RN',
  },
  {
    'name': 'Customer 1457',
    'state': 'TO',
  },
  {
    'name': 'Customer 1458',
    'state': 'RO',
  },
  {
    'name': 'Customer 1459',
    'state': 'DF',
  },
  {
    'name': 'Customer 1460',
    'state': 'SP',
  },
  {
    'name': 'Customer 1461',
    'state': 'PA',
  },
  {
    'name': 'Customer 1462',
    'state': 'BA',
  },
  {
    'name': 'Customer 1463',
    'state': 'AP',
  },
  {
    'name': 'Customer 1464',
    'state': 'SE',
  },
  {
    'name': 'Customer 1465',
    'state': 'AC',
  },
  {
    'name': 'Customer 1466',
    'state': 'RJ',
  },
  {
    'name': 'Customer 1467',
    'state': 'AC',
  },
  {
    'name': 'Customer 1468',
    'state': 'AC',
  },
  {
    'name': 'Customer 1469',
    'state': 'RJ',
  },
  {
    'name': 'Customer 1470',
    'state': 'TO',
  },
  {
    'name': 'Customer 1471',
    'state': 'PE',
  },
  {
    'name': 'Customer 1472',
    'state': 'AP',
  },
  {
    'name': 'Customer 1473',
    'state': 'ES',
  },
  {
    'name': 'Customer 1474',
    'state': 'MG',
  },
  {
    'name': 'Customer 1475',
    'state': 'MG',
  },
  {
    'name': 'Customer 1476',
    'state': 'ES',
  },
  {
    'name': 'Customer 1477',
    'state': 'RJ',
  },
  {
    'name': 'Customer 1478',
    'state': 'DF',
  },
  {
    'name': 'Customer 1479',
    'state': 'SP',
  },
  {
    'name': 'Customer 1480',
    'state': 'AL',
  },
  {
    'name': 'Customer 1481',
    'state': 'ES',
  },
  {
    'name': 'Customer 1482',
    'state': 'GO',
  },
  {
    'name': 'Customer 1483',
    'state': 'RN',
  },
  {
    'name': 'Customer 1484',
    'state': 'RN',
  },
  {
    'name': 'Customer 1485',
    'state': 'TO',
  },
  {
    'name': 'Customer 1486',
    'state': 'ES',
  },
  {
    'name': 'Customer 1487',
    'state': 'PR',
  },
  {
    'name': 'Customer 1488',
    'state': 'PE',
  },
  {
    'name': 'Customer 1489',
    'state': 'BA',
  },
  {
    'name': 'Customer 1490',
    'state': 'AC',
  },
  {
    'name': 'Customer 1491',
    'state': 'AP',
  },
  {
    'name': 'Customer 1492',
    'state': 'PI',
  },
  {
    'name': 'Customer 1493',
    'state': 'PE',
  },
  {
    'name': 'Customer 1494',
    'state': 'MT',
  },
  {
    'name': 'Customer 1495',
    'state': 'SP',
  },
  {
    'name': 'Customer 1496',
    'state': 'ES',
  },
  {
    'name': 'Customer 1497',
    'state': 'CE',
  },
  {
    'name': 'Customer 1498',
    'state': 'DF',
  },
  {
    'name': 'Customer 1499',
    'state': 'CE',
  },
  {
    'name': 'Customer 1500',
    'state': 'AM',
  },
  {
    'name': 'Customer 1501',
    'state': 'SE',
  },
  {
    'name': 'Customer 1502',
    'state': 'SC',
  },
  {
    'name': 'Customer 1503',
    'state': 'DF',
  },
  {
    'name': 'Customer 1504',
    'state': 'PI',
  },
  {
    'name': 'Customer 1505',
    'state': 'PE',
  },
  {
    'name': 'Customer 1506',
    'state': 'DF',
  },
  {
    'name': 'Customer 1507',
    'state': 'MA',
  },
  {
    'name': 'Customer 1508',
    'state': 'PI',
  },
  {
    'name': 'Customer 1509',
    'state': 'MT',
  },
  {
    'name': 'Customer 1510',
    'state': 'PE',
  },
  {
    'name': 'Customer 1511',
    'state': 'AC',
  },
  {
    'name': 'Customer 1512',
    'state': 'GO',
  },
  {
    'name': 'Customer 1513',
    'state': 'CE',
  },
  {
    'name': 'Customer 1514',
    'state': 'RN',
  },
  {
    'name': 'Customer 1515',
    'state': 'SE',
  },
  {
    'name': 'Customer 1516',
    'state': 'PB',
  },
  {
    'name': 'Customer 1517',
    'state': 'AL',
  },
  {
    'name': 'Customer 1518',
    'state': 'GO',
  },
  {
    'name': 'Customer 1519',
    'state': 'PI',
  },
  {
    'name': 'Customer 1520',
    'state': 'MT',
  },
  {
    'name': 'Customer 1521',
    'state': 'AC',
  },
  {
    'name': 'Customer 1522',
    'state': 'PA',
  },
  {
    'name': 'Customer 1523',
    'state': 'SP',
  },
  {
    'name': 'Customer 1524',
    'state': 'PI',
  },
  {
    'name': 'Customer 1525',
    'state': 'MA',
  },
  {
    'name': 'Customer 1526',
    'state': 'SE',
  },
  {
    'name': 'Customer 1527',
    'state': 'MG',
  },
  {
    'name': 'Customer 1528',
    'state': 'AP',
  },
  {
    'name': 'Customer 1529',
    'state': 'BA',
  },
  {
    'name': 'Customer 1530',
    'state': 'AM',
  },
  {
    'name': 'Customer 1531',
    'state': 'PA',
  },
  {
    'name': 'Customer 1532',
    'state': 'DF',
  },
  {
    'name': 'Customer 1533',
    'state': 'RS',
  },
  {
    'name': 'Customer 1534',
    'state': 'PI',
  },
  {
    'name': 'Customer 1535',
    'state': 'RJ',
  },
  {
    'name': 'Customer 1536',
    'state': 'AM',
  },
  {
    'name': 'Customer 1537',
    'state': 'MT',
  },
  {
    'name': 'Customer 1538',
    'state': 'RJ',
  },
  {
    'name': 'Customer 1539',
    'state': 'RO',
  },
  {
    'name': 'Customer 1540',
    'state': 'TO',
  },
  {
    'name': 'Customer 1541',
    'state': 'MG',
  },
  {
    'name': 'Customer 1542',
    'state': 'PA',
  },
  {
    'name': 'Customer 1543',
    'state': 'PE',
  },
  {
    'name': 'Customer 1544',
    'state': 'AC',
  },
  {
    'name': 'Customer 1545',
    'state': 'AM',
  },
  {
    'name': 'Customer 1546',
    'state': 'MS',
  },
  {
    'name': 'Customer 1547',
    'state': 'PB',
  },
  {
    'name': 'Customer 1548',
    'state': 'TO',
  },
  {
    'name': 'Customer 1549',
    'state': 'MA',
  },
  {
    'name': 'Customer 1550',
    'state': 'SP',
  },
  {
    'name': 'Customer 1551',
    'state': 'MA',
  },
  {
    'name': 'Customer 1552',
    'state': 'AL',
  },
  {
    'name': 'Customer 1553',
    'state': 'MS',
  },
  {
    'name': 'Customer 1554',
    'state': 'ES',
  },
  {
    'name': 'Customer 1555',
    'state': 'TO',
  },
  {
    'name': 'Customer 1556',
    'state': 'SP',
  },
  {
    'name': 'Customer 1557',
    'state': 'PR',
  },
  {
    'name': 'Customer 1558',
    'state': 'AL',
  },
  {
    'name': 'Customer 1559',
    'state': 'MG',
  },
  {
    'name': 'Customer 1560',
    'state': 'SE',
  },
  {
    'name': 'Customer 1561',
    'state': 'TO',
  },
  {
    'name': 'Customer 1562',
    'state': 'MS',
  },
  {
    'name': 'Customer 1563',
    'state': 'AM',
  },
  {
    'name': 'Customer 1564',
    'state': 'GO',
  },
  {
    'name': 'Customer 1565',
    'state': 'DF',
  },
  {
    'name': 'Customer 1566',
    'state': 'MT',
  },
  {
    'name': 'Customer 1567',
    'state': 'RN',
  },
  {
    'name': 'Customer 1568',
    'state': 'PE',
  },
  {
    'name': 'Customer 1569',
    'state': 'MS',
  },
  {
    'name': 'Customer 1570',
    'state': 'CE',
  },
  {
    'name': 'Customer 1571',
    'state': 'AM',
  },
  {
    'name': 'Customer 1572',
    'state': 'MT',
  },
  {
    'name': 'Customer 1573',
    'state': 'MA',
  },
  {
    'name': 'Customer 1574',
    'state': 'GO',
  },
  {
    'name': 'Customer 1575',
    'state': 'MT',
  },
  {
    'name': 'Customer 1576',
    'state': 'CE',
  },
  {
    'name': 'Customer 1577',
    'state': 'RN',
  },
  {
    'name': 'Customer 1578',
    'state': 'RS',
  },
  {
    'name': 'Customer 1579',
    'state': 'PI',
  },
  {
    'name': 'Customer 1580',
    'state': 'RS',
  },
  {
    'name': 'Customer 1581',
    'state': 'RN',
  },
  {
    'name': 'Customer 1582',
    'state': 'SP',
  },
  {
    'name': 'Customer 1583',
    'state': 'MG',
  },
  {
    'name': 'Customer 1584',
    'state': 'RJ',
  },
  {
    'name': 'Customer 1585',
    'state': 'CE',
  },
  {
    'name': 'Customer 1586',
    'state': 'ES',
  },
  {
    'name': 'Customer 1587',
    'state': 'TO',
  },
  {
    'name': 'Customer 1588',
    'state': 'ES',
  },
  {
    'name': 'Customer 1589',
    'state': 'SE',
  },
  {
    'name': 'Customer 1590',
    'state': 'MT',
  },
  {
    'name': 'Customer 1591',
    'state': 'AC',
  },
  {
    'name': 'Customer 1592',
    'state': 'SP',
  },
  {
    'name': 'Customer 1593',
    'state': 'MG',
  },
  {
    'name': 'Customer 1594',
    'state': 'ES',
  },
  {
    'name': 'Customer 1595',
    'state': 'MT',
  },
  {
    'name': 'Customer 1596',
    'state': 'PR',
  },
  {
    'name': 'Customer 1597',
    'state': 'TO',
  },
  {
    'name': 'Customer 1598',
    'state': 'RS',
  },
  {
    'name': 'Customer 1599',
    'state': 'RS',
  },
  {
    'name': 'Customer 1600',
    'state': 'PE',
  },
  {
    'name': 'Customer 1601',
    'state': 'AL',
  },
  {
    'name': 'Customer 1602',
    'state': 'MT',
  },
  {
    'name': 'Customer 1603',
    'state': 'DF',
  },
  {
    'name': 'Customer 1604',
    'state': 'RJ',
  },
  {
    'name': 'Customer 1605',
    'state': 'SP',
  },
  {
    'name': 'Customer 1606',
    'state': 'PA',
  },
  {
    'name': 'Customer 1607',
    'state': 'RN',
  },
  {
    'name': 'Customer 1608',
    'state': 'TO',
  },
  {
    'name': 'Customer 1609',
    'state': 'RO',
  },
  {
    'name': 'Customer 1610',
    'state': 'AL',
  },
  {
    'name': 'Customer 1611',
    'state': 'DF',
  },
  {
    'name': 'Customer 1612',
    'state': 'MG',
  },
  {
    'name': 'Customer 1613',
    'state': 'RN',
  },
  {
    'name': 'Customer 1614',
    'state': 'MG',
  },
  {
    'name': 'Customer 1615',
    'state': 'ES',
  },
  {
    'name': 'Customer 1616',
    'state': 'MG',
  },
  {
    'name': 'Customer 1617',
    'state': 'CE',
  },
  {
    'name': 'Customer 1618',
    'state': 'AP',
  },
  {
    'name': 'Customer 1619',
    'state': 'PR',
  },
  {
    'name': 'Customer 1620',
    'state': 'RJ',
  },
  {
    'name': 'Customer 1621',
    'state': 'AP',
  },
  {
    'name': 'Customer 1622',
    'state': 'PA',
  },
  {
    'name': 'Customer 1623',
    'state': 'AC',
  },
  {
    'name': 'Customer 1624',
    'state': 'TO',
  },
  {
    'name': 'Customer 1625',
    'state': 'PA',
  },
  {
    'name': 'Customer 1626',
    'state': 'CE',
  },
  {
    'name': 'Customer 1627',
    'state': 'RR',
  },
  {
    'name': 'Customer 1628',
    'state': 'MG',
  },
  {
    'name': 'Customer 1629',
    'state': 'PE',
  },
  {
    'name': 'Customer 1630',
    'state': 'RJ',
  },
  {
    'name': 'Customer 1631',
    'state': 'RS',
  },
  {
    'name': 'Customer 1632',
    'state': 'RN',
  },
  {
    'name': 'Customer 1633',
    'state': 'PB',
  },
  {
    'name': 'Customer 1634',
    'state': 'GO',
  },
  {
    'name': 'Customer 1635',
    'state': 'MS',
  },
  {
    'name': 'Customer 1636',
    'state': 'RJ',
  },
  {
    'name': 'Customer 1637',
    'state': 'GO',
  },
  {
    'name': 'Customer 1638',
    'state': 'MG',
  },
  {
    'name': 'Customer 1639',
    'state': 'RS',
  },
  {
    'name': 'Customer 1640',
    'state': 'PB',
  },
  {
    'name': 'Customer 1641',
    'state': 'MT',
  },
  {
    'name': 'Customer 1642',
    'state': 'SP',
  },
  {
    'name': 'Customer 1643',
    'state': 'DF',
  },
  {
    'name': 'Customer 1644',
    'state': 'SP',
  },
  {
    'name': 'Customer 1645',
    'state': 'PA',
  },
  {
    'name': 'Customer 1646',
    'state': 'GO',
  },
  {
    'name': 'Customer 1647',
    'state': 'RJ',
  },
  {
    'name': 'Customer 1648',
    'state': 'AC',
  },
  {
    'name': 'Customer 1649',
    'state': 'MG',
  },
  {
    'name': 'Customer 1650',
    'state': 'BA',
  },
  {
    'name': 'Customer 1651',
    'state': 'RO',
  },
  {
    'name': 'Customer 1652',
    'state': 'MS',
  },
  {
    'name': 'Customer 1653',
    'state': 'MS',
  },
  {
    'name': 'Customer 1654',
    'state': 'SE',
  },
  {
    'name': 'Customer 1655',
    'state': 'SE',
  },
  {
    'name': 'Customer 1656',
    'state': 'PB',
  },
  {
    'name': 'Customer 1657',
    'state': 'PI',
  },
  {
    'name': 'Customer 1658',
    'state': 'PI',
  },
  {
    'name': 'Customer 1659',
    'state': 'ES',
  },
  {
    'name': 'Customer 1660',
    'state': 'CE',
  },
  {
    'name': 'Customer 1661',
    'state': 'PB',
  },
  {
    'name': 'Customer 1662',
    'state': 'RS',
  },
  {
    'name': 'Customer 1663',
    'state': 'AP',
  },
  {
    'name': 'Customer 1664',
    'state': 'GO',
  },
  {
    'name': 'Customer 1665',
    'state': 'PB',
  },
  {
    'name': 'Customer 1666',
    'state': 'RS',
  },
  {
    'name': 'Customer 1667',
    'state': 'MG',
  },
  {
    'name': 'Customer 1668',
    'state': 'GO',
  },
  {
    'name': 'Customer 1669',
    'state': 'RN',
  },
  {
    'name': 'Customer 1670',
    'state': 'PI',
  },
  {
    'name': 'Customer 1671',
    'state': 'AC',
  },
  {
    'name': 'Customer 1672',
    'state': 'AM',
  },
  {
    'name': 'Customer 1673',
    'state': 'GO',
  },
  {
    'name': 'Customer 1674',
    'state': 'BA',
  },
  {
    'name': 'Customer 1675',
    'state': 'AP',
  },
  {
    'name': 'Customer 1676',
    'state': 'RJ',
  },
  {
    'name': 'Customer 1677',
    'state': 'MA',
  },
  {
    'name': 'Customer 1678',
    'state': 'SC',
  },
  {
    'name': 'Customer 1679',
    'state': 'BA',
  },
  {
    'name': 'Customer 1680',
    'state': 'SC',
  },
  {
    'name': 'Customer 1681',
    'state': 'AP',
  },
  {
    'name': 'Customer 1682',
    'state': 'MT',
  },
  {
    'name': 'Customer 1683',
    'state': 'RR',
  },
  {
    'name': 'Customer 1684',
    'state': 'BA',
  },
  {
    'name': 'Customer 1685',
    'state': 'SP',
  },
  {
    'name': 'Customer 1686',
    'state': 'PB',
  },
  {
    'name': 'Customer 1687',
    'state': 'RO',
  },
  {
    'name': 'Customer 1688',
    'state': 'MT',
  },
  {
    'name': 'Customer 1689',
    'state': 'MT',
  },
  {
    'name': 'Customer 1690',
    'state': 'MS',
  },
  {
    'name': 'Customer 1691',
    'state': 'AP',
  },
  {
    'name': 'Customer 1692',
    'state': 'PR',
  },
  {
    'name': 'Customer 1693',
    'state': 'CE',
  },
  {
    'name': 'Customer 1694',
    'state': 'CE',
  },
  {
    'name': 'Customer 1695',
    'state': 'ES',
  },
  {
    'name': 'Customer 1696',
    'state': 'CE',
  },
  {
    'name': 'Customer 1697',
    'state': 'DF',
  },
  {
    'name': 'Customer 1698',
    'state': 'AC',
  },
  {
    'name': 'Customer 1699',
    'state': 'AP',
  },
  {
    'name': 'Customer 1700',
    'state': 'PA',
  },
  {
    'name': 'Customer 1701',
    'state': 'BA',
  },
  {
    'name': 'Customer 1702',
    'state': 'SC',
  },
  {
    'name': 'Customer 1703',
    'state': 'ES',
  },
  {
    'name': 'Customer 1704',
    'state': 'AL',
  },
  {
    'name': 'Customer 1705',
    'state': 'AP',
  },
  {
    'name': 'Customer 1706',
    'state': 'PI',
  },
  {
    'name': 'Customer 1707',
    'state': 'MG',
  },
  {
    'name': 'Customer 1708',
    'state': 'ES',
  },
  {
    'name': 'Customer 1709',
    'state': 'AL',
  },
  {
    'name': 'Customer 1710',
    'state': 'PA',
  },
  {
    'name': 'Customer 1711',
    'state': 'MT',
  },
  {
    'name': 'Customer 1712',
    'state': 'PA',
  },
  {
    'name': 'Customer 1713',
    'state': 'MA',
  },
  {
    'name': 'Customer 1714',
    'state': 'MG',
  },
  {
    'name': 'Customer 1715',
    'state': 'SC',
  },
  {
    'name': 'Customer 1716',
    'state': 'MA',
  },
  {
    'name': 'Customer 1717',
    'state': 'RN',
  },
  {
    'name': 'Customer 1718',
    'state': 'TO',
  },
  {
    'name': 'Customer 1719',
    'state': 'DF',
  },
  {
    'name': 'Customer 1720',
    'state': 'MT',
  },
  {
    'name': 'Customer 1721',
    'state': 'ES',
  },
  {
    'name': 'Customer 1722',
    'state': 'PI',
  },
  {
    'name': 'Customer 1723',
    'state': 'RO',
  },
  {
    'name': 'Customer 1724',
    'state': 'SE',
  },
  {
    'name': 'Customer 1725',
    'state': 'CE',
  },
  {
    'name': 'Customer 1726',
    'state': 'PI',
  },
  {
    'name': 'Customer 1727',
    'state': 'AM',
  },
  {
    'name': 'Customer 1728',
    'state': 'AL',
  },
  {
    'name': 'Customer 1729',
    'state': 'MS',
  },
  {
    'name': 'Customer 1730',
    'state': 'AL',
  },
  {
    'name': 'Customer 1731',
    'state': 'MS',
  },
  {
    'name': 'Customer 1732',
    'state': 'DF',
  },
  {
    'name': 'Customer 1733',
    'state': 'MA',
  },
  {
    'name': 'Customer 1734',
    'state': 'RR',
  },
  {
    'name': 'Customer 1735',
    'state': 'AL',
  },
  {
    'name': 'Customer 1736',
    'state': 'GO',
  },
  {
    'name': 'Customer 1737',
    'state': 'GO',
  },
  {
    'name': 'Customer 1738',
    'state': 'RO',
  },
  {
    'name': 'Customer 1739',
    'state': 'PE',
  },
  {
    'name': 'Customer 1740',
    'state': 'RN',
  },
  {
    'name': 'Customer 1741',
    'state': 'RS',
  },
  {
    'name': 'Customer 1742',
    'state': 'RR',
  },
  {
    'name': 'Customer 1743',
    'state': 'RR',
  },
  {
    'name': 'Customer 1744',
    'state': 'RJ',
  },
  {
    'name': 'Customer 1745',
    'state': 'AP',
  },
  {
    'name': 'Customer 1746',
    'state': 'GO',
  },
  {
    'name': 'Customer 1747',
    'state': 'AC',
  },
  {
    'name': 'Customer 1748',
    'state': 'CE',
  },
  {
    'name': 'Customer 1749',
    'state': 'GO',
  },
  {
    'name': 'Customer 1750',
    'state': 'AP',
  },
  {
    'name': 'Customer 1751',
    'state': 'CE',
  },
  {
    'name': 'Customer 1752',
    'state': 'PE',
  },
  {
    'name': 'Customer 1753',
    'state': 'AM',
  },
  {
    'name': 'Customer 1754',
    'state': 'PA',
  },
  {
    'name': 'Customer 1755',
    'state': 'MG',
  },
  {
    'name': 'Customer 1756',
    'state': 'PB',
  },
  {
    'name': 'Customer 1757',
    'state': 'MS',
  },
  {
    'name': 'Customer 1758',
    'state': 'RN',
  },
  {
    'name': 'Customer 1759',
    'state': 'RN',
  },
  {
    'name': 'Customer 1760',
    'state': 'MG',
  },
  {
    'name': 'Customer 1761',
    'state': 'MT',
  },
  {
    'name': 'Customer 1762',
    'state': 'RR',
  },
  {
    'name': 'Customer 1763',
    'state': 'RN',
  },
  {
    'name': 'Customer 1764',
    'state': 'SP',
  },
  {
    'name': 'Customer 1765',
    'state': 'AL',
  },
  {
    'name': 'Customer 1766',
    'state': 'MS',
  },
  {
    'name': 'Customer 1767',
    'state': 'PA',
  },
  {
    'name': 'Customer 1768',
    'state': 'PB',
  },
  {
    'name': 'Customer 1769',
    'state': 'MA',
  },
  {
    'name': 'Customer 1770',
    'state': 'RS',
  },
  {
    'name': 'Customer 1771',
    'state': 'RJ',
  },
  {
    'name': 'Customer 1772',
    'state': 'MG',
  },
  {
    'name': 'Customer 1773',
    'state': 'AM',
  },
  {
    'name': 'Customer 1774',
    'state': 'TO',
  },
  {
    'name': 'Customer 1775',
    'state': 'MT',
  },
  {
    'name': 'Customer 1776',
    'state': 'PI',
  },
  {
    'name': 'Customer 1777',
    'state': 'PR',
  },
  {
    'name': 'Customer 1778',
    'state': 'AM',
  },
  {
    'name': 'Customer 1779',
    'state': 'MS',
  },
  {
    'name': 'Customer 1780',
    'state': 'AL',
  },
  {
    'name': 'Customer 1781',
    'state': 'CE',
  },
  {
    'name': 'Customer 1782',
    'state': 'CE',
  },
  {
    'name': 'Customer 1783',
    'state': 'DF',
  },
  {
    'name': 'Customer 1784',
    'state': 'GO',
  },
  {
    'name': 'Customer 1785',
    'state': 'AL',
  },
  {
    'name': 'Customer 1786',
    'state': 'PR',
  },
  {
    'name': 'Customer 1787',
    'state': 'SC',
  },
  {
    'name': 'Customer 1788',
    'state': 'BA',
  },
  {
    'name': 'Customer 1789',
    'state': 'RO',
  },
  {
    'name': 'Customer 1790',
    'state': 'PB',
  },
  {
    'name': 'Customer 1791',
    'state': 'PB',
  },
  {
    'name': 'Customer 1792',
    'state': 'MT',
  },
  {
    'name': 'Customer 1793',
    'state': 'RR',
  },
  {
    'name': 'Customer 1794',
    'state': 'PA',
  },
  {
    'name': 'Customer 1795',
    'state': 'PA',
  },
  {
    'name': 'Customer 1796',
    'state': 'MT',
  },
  {
    'name': 'Customer 1797',
    'state': 'MG',
  },
  {
    'name': 'Customer 1798',
    'state': 'RN',
  },
  {
    'name': 'Customer 1799',
    'state': 'MS',
  },
  {
    'name': 'Customer 1800',
    'state': 'AL',
  },
  {
    'name': 'Customer 1801',
    'state': 'MA',
  },
  {
    'name': 'Customer 1802',
    'state': 'RJ',
  },
  {
    'name': 'Customer 1803',
    'state': 'AP',
  },
  {
    'name': 'Customer 1804',
    'state': 'DF',
  },
  {
    'name': 'Customer 1805',
    'state': 'MT',
  },
  {
    'name': 'Customer 1806',
    'state': 'PI',
  },
  {
    'name': 'Customer 1807',
    'state': 'GO',
  },
  {
    'name': 'Customer 1808',
    'state': 'BA',
  },
  {
    'name': 'Customer 1809',
    'state': 'PI',
  },
  {
    'name': 'Customer 1810',
    'state': 'MS',
  },
  {
    'name': 'Customer 1811',
    'state': 'MG',
  },
  {
    'name': 'Customer 1812',
    'state': 'MS',
  },
  {
    'name': 'Customer 1813',
    'state': 'RR',
  },
  {
    'name': 'Customer 1814',
    'state': 'AP',
  },
  {
    'name': 'Customer 1815',
    'state': 'RO',
  },
  {
    'name': 'Customer 1816',
    'state': 'PE',
  },
  {
    'name': 'Customer 1817',
    'state': 'PA',
  },
  {
    'name': 'Customer 1818',
    'state': 'PA',
  },
  {
    'name': 'Customer 1819',
    'state': 'AL',
  },
  {
    'name': 'Customer 1820',
    'state': 'MS',
  },
  {
    'name': 'Customer 1821',
    'state': 'CE',
  },
  {
    'name': 'Customer 1822',
    'state': 'PB',
  },
  {
    'name': 'Customer 1823',
    'state': 'AL',
  },
  {
    'name': 'Customer 1824',
    'state': 'MT',
  },
  {
    'name': 'Customer 1825',
    'state': 'PE',
  },
  {
    'name': 'Customer 1826',
    'state': 'RS',
  },
  {
    'name': 'Customer 1827',
    'state': 'RN',
  },
  {
    'name': 'Customer 1828',
    'state': 'GO',
  },
  {
    'name': 'Customer 1829',
    'state': 'RJ',
  },
  {
    'name': 'Customer 1830',
    'state': 'PA',
  },
  {
    'name': 'Customer 1831',
    'state': 'MG',
  },
  {
    'name': 'Customer 1832',
    'state': 'PI',
  },
  {
    'name': 'Customer 1833',
    'state': 'RO',
  },
  {
    'name': 'Customer 1834',
    'state': 'TO',
  },
  {
    'name': 'Customer 1835',
    'state': 'ES',
  },
  {
    'name': 'Customer 1836',
    'state': 'SC',
  },
  {
    'name': 'Customer 1837',
    'state': 'AM',
  },
  {
    'name': 'Customer 1838',
    'state': 'PB',
  },
  {
    'name': 'Customer 1839',
    'state': 'BA',
  },
  {
    'name': 'Customer 1840',
    'state': 'MG',
  },
  {
    'name': 'Customer 1841',
    'state': 'AL',
  },
  {
    'name': 'Customer 1842',
    'state': 'AP',
  },
  {
    'name': 'Customer 1843',
    'state': 'PR',
  },
  {
    'name': 'Customer 1844',
    'state': 'DF',
  },
  {
    'name': 'Customer 1845',
    'state': 'BA',
  },
  {
    'name': 'Customer 1846',
    'state': 'PI',
  },
  {
    'name': 'Customer 1847',
    'state': 'MT',
  },
  {
    'name': 'Customer 1848',
    'state': 'PE',
  },
  {
    'name': 'Customer 1849',
    'state': 'RJ',
  },
  {
    'name': 'Customer 1850',
    'state': 'PB',
  },
  {
    'name': 'Customer 1851',
    'state': 'RR',
  },
  {
    'name': 'Customer 1852',
    'state': 'SE',
  },
  {
    'name': 'Customer 1853',
    'state': 'MT',
  },
  {
    'name': 'Customer 1854',
    'state': 'ES',
  },
  {
    'name': 'Customer 1855',
    'state': 'SP',
  },
  {
    'name': 'Customer 1856',
    'state': 'SP',
  },
  {
    'name': 'Customer 1857',
    'state': 'MG',
  },
  {
    'name': 'Customer 1858',
    'state': 'PE',
  },
  {
    'name': 'Customer 1859',
    'state': 'GO',
  },
  {
    'name': 'Customer 1860',
    'state': 'ES',
  },
  {
    'name': 'Customer 1861',
    'state': 'CE',
  },
  {
    'name': 'Customer 1862',
    'state': 'CE',
  },
  {
    'name': 'Customer 1863',
    'state': 'PR',
  },
  {
    'name': 'Customer 1864',
    'state': 'SE',
  },
  {
    'name': 'Customer 1865',
    'state': 'SE',
  },
  {
    'name': 'Customer 1866',
    'state': 'CE',
  },
  {
    'name': 'Customer 1867',
    'state': 'MG',
  },
  {
    'name': 'Customer 1868',
    'state': 'RR',
  },
  {
    'name': 'Customer 1869',
    'state': 'RS',
  },
  {
    'name': 'Customer 1870',
    'state': 'ES',
  },
  {
    'name': 'Customer 1871',
    'state': 'AL',
  },
  {
    'name': 'Customer 1872',
    'state': 'PE',
  },
  {
    'name': 'Customer 1873',
    'state': 'RS',
  },
  {
    'name': 'Customer 1874',
    'state': 'DF',
  },
  {
    'name': 'Customer 1875',
    'state': 'AM',
  },
  {
    'name': 'Customer 1876',
    'state': 'AL',
  },
  {
    'name': 'Customer 1877',
    'state': 'SC',
  },
  {
    'name': 'Customer 1878',
    'state': 'GO',
  },
  {
    'name': 'Customer 1879',
    'state': 'GO',
  },
  {
    'name': 'Customer 1880',
    'state': 'MG',
  },
  {
    'name': 'Customer 1881',
    'state': 'AP',
  },
  {
    'name': 'Customer 1882',
    'state': 'AL',
  },
  {
    'name': 'Customer 1883',
    'state': 'AP',
  },
  {
    'name': 'Customer 1884',
    'state': 'RJ',
  },
  {
    'name': 'Customer 1885',
    'state': 'PA',
  },
  {
    'name': 'Customer 1886',
    'state': 'MT',
  },
  {
    'name': 'Customer 1887',
    'state': 'RJ',
  },
  {
    'name': 'Customer 1888',
    'state': 'RS',
  },
  {
    'name': 'Customer 1889',
    'state': 'AL',
  },
  {
    'name': 'Customer 1890',
    'state': 'RJ',
  },
  {
    'name': 'Customer 1891',
    'state': 'SC',
  },
  {
    'name': 'Customer 1892',
    'state': 'AL',
  },
  {
    'name': 'Customer 1893',
    'state': 'AP',
  },
  {
    'name': 'Customer 1894',
    'state': 'RS',
  },
  {
    'name': 'Customer 1895',
    'state': 'TO',
  },
  {
    'name': 'Customer 1896',
    'state': 'ES',
  },
  {
    'name': 'Customer 1897',
    'state': 'RN',
  },
  {
    'name': 'Customer 1898',
    'state': 'RO',
  },
  {
    'name': 'Customer 1899',
    'state': 'CE',
  },
  {
    'name': 'Customer 1900',
    'state': 'MG',
  },
  {
    'name': 'Customer 1901',
    'state': 'GO',
  },
  {
    'name': 'Customer 1902',
    'state': 'AP',
  },
  {
    'name': 'Customer 1903',
    'state': 'MT',
  },
  {
    'name': 'Customer 1904',
    'state': 'RS',
  },
  {
    'name': 'Customer 1905',
    'state': 'AC',
  },
  {
    'name': 'Customer 1906',
    'state': 'PB',
  },
  {
    'name': 'Customer 1907',
    'state': 'CE',
  },
  {
    'name': 'Customer 1908',
    'state': 'MT',
  },
  {
    'name': 'Customer 1909',
    'state': 'BA',
  },
  {
    'name': 'Customer 1910',
    'state': 'AM',
  },
  {
    'name': 'Customer 1911',
    'state': 'SE',
  },
  {
    'name': 'Customer 1912',
    'state': 'GO',
  },
  {
    'name': 'Customer 1913',
    'state': 'ES',
  },
  {
    'name': 'Customer 1914',
    'state': 'ES',
  },
  {
    'name': 'Customer 1915',
    'state': 'PA',
  },
  {
    'name': 'Customer 1916',
    'state': 'PE',
  },
  {
    'name': 'Customer 1917',
    'state': 'PI',
  },
  {
    'name': 'Customer 1918',
    'state': 'AP',
  },
  {
    'name': 'Customer 1919',
    'state': 'PI',
  },
  {
    'name': 'Customer 1920',
    'state': 'PI',
  },
  {
    'name': 'Customer 1921',
    'state': 'RN',
  },
  {
    'name': 'Customer 1922',
    'state': 'MA',
  },
  {
    'name': 'Customer 1923',
    'state': 'PE',
  },
  {
    'name': 'Customer 1924',
    'state': 'SP',
  },
  {
    'name': 'Customer 1925',
    'state': 'AM',
  },
  {
    'name': 'Customer 1926',
    'state': 'SE',
  },
  {
    'name': 'Customer 1927',
    'state': 'PB',
  },
  {
    'name': 'Customer 1928',
    'state': 'SE',
  },
  {
    'name': 'Customer 1929',
    'state': 'RO',
  },
  {
    'name': 'Customer 1930',
    'state': 'SE',
  },
  {
    'name': 'Customer 1931',
    'state': 'RN',
  },
  {
    'name': 'Customer 1932',
    'state': 'GO',
  },
  {
    'name': 'Customer 1933',
    'state': 'AC',
  },
  {
    'name': 'Customer 1934',
    'state': 'MT',
  },
  {
    'name': 'Customer 1935',
    'state': 'SP',
  },
  {
    'name': 'Customer 1936',
    'state': 'RO',
  },
  {
    'name': 'Customer 1937',
    'state': 'MG',
  },
  {
    'name': 'Customer 1938',
    'state': 'PB',
  },
  {
    'name': 'Customer 1939',
    'state': 'SP',
  },
  {
    'name': 'Customer 1940',
    'state': 'MA',
  },
  {
    'name': 'Customer 1941',
    'state': 'PA',
  },
  {
    'name': 'Customer 1942',
    'state': 'BA',
  },
  {
    'name': 'Customer 1943',
    'state': 'SE',
  },
  {
    'name': 'Customer 1944',
    'state': 'PR',
  },
  {
    'name': 'Customer 1945',
    'state': 'AP',
  },
  {
    'name': 'Customer 1946',
    'state': 'AL',
  },
  {
    'name': 'Customer 1947',
    'state': 'RO',
  },
  {
    'name': 'Customer 1948',
    'state': 'AL',
  },
  {
    'name': 'Customer 1949',
    'state': 'PB',
  },
  {
    'name': 'Customer 1950',
    'state': 'PA',
  },
  {
    'name': 'Customer 1951',
    'state': 'AM',
  },
  {
    'name': 'Customer 1952',
    'state': 'MG',
  },
  {
    'name': 'Customer 1953',
    'state': 'AL',
  },
  {
    'name': 'Customer 1954',
    'state': 'PE',
  },
  {
    'name': 'Customer 1955',
    'state': 'PB',
  },
  {
    'name': 'Customer 1956',
    'state': 'RJ',
  },
  {
    'name': 'Customer 1957',
    'state': 'PB',
  },
  {
    'name': 'Customer 1958',
    'state': 'ES',
  },
  {
    'name': 'Customer 1959',
    'state': 'PR',
  },
  {
    'name': 'Customer 1960',
    'state': 'BA',
  },
  {
    'name': 'Customer 1961',
    'state': 'GO',
  },
  {
    'name': 'Customer 1962',
    'state': 'AC',
  },
  {
    'name': 'Customer 1963',
    'state': 'MG',
  },
  {
    'name': 'Customer 1964',
    'state': 'PI',
  },
  {
    'name': 'Customer 1965',
    'state': 'ES',
  },
  {
    'name': 'Customer 1966',
    'state': 'RO',
  },
  {
    'name': 'Customer 1967',
    'state': 'GO',
  },
  {
    'name': 'Customer 1968',
    'state': 'PB',
  },
  {
    'name': 'Customer 1969',
    'state': 'PR',
  },
  {
    'name': 'Customer 1970',
    'state': 'MG',
  },
  {
    'name': 'Customer 1971',
    'state': 'PR',
  },
  {
    'name': 'Customer 1972',
    'state': 'SC',
  },
  {
    'name': 'Customer 1973',
    'state': 'PR',
  },
  {
    'name': 'Customer 1974',
    'state': 'RN',
  },
  {
    'name': 'Customer 1975',
    'state': 'AP',
  },
  {
    'name': 'Customer 1976',
    'state': 'SC',
  },
  {
    'name': 'Customer 1977',
    'state': 'DF',
  },
  {
    'name': 'Customer 1978',
    'state': 'SP',
  },
  {
    'name': 'Customer 1979',
    'state': 'PA',
  },
  {
    'name': 'Customer 1980',
    'state': 'RJ',
  },
  {
    'name': 'Customer 1981',
    'state': 'RN',
  },
  {
    'name': 'Customer 1982',
    'state': 'AP',
  },
  {
    'name': 'Customer 1983',
    'state': 'PR',
  },
  {
    'name': 'Customer 1984',
    'state': 'AM',
  },
  {
    'name': 'Customer 1985',
    'state': 'PA',
  },
  {
    'name': 'Customer 1986',
    'state': 'PR',
  },
  {
    'name': 'Customer 1987',
    'state': 'MG',
  },
  {
    'name': 'Customer 1988',
    'state': 'PA',
  },
  {
    'name': 'Customer 1989',
    'state': 'BA',
  },
  {
    'name': 'Customer 1990',
    'state': 'PB',
  },
  {
    'name': 'Customer 1991',
    'state': 'RN',
  },
  {
    'name': 'Customer 1992',
    'state': 'PI',
  },
  {
    'name': 'Customer 1993',
    'state': 'AL',
  },
  {
    'name': 'Customer 1994',
    'state': 'AM',
  },
  {
    'name': 'Customer 1995',
    'state': 'RJ',
  },
  {
    'name': 'Customer 1996',
    'state': 'AM',
  },
  {
    'name': 'Customer 1997',
    'state': 'RN',
  },
  {
    'name': 'Customer 1998',
    'state': 'BA',
  },
  {
    'name': 'Customer 1999',
    'state': 'AP',
  },
  {
    'name': 'Customer 2000',
    'state': 'MG',
  },
];

module.exports = fakeCustomers;
