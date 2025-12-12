export class ConfigTheme {

  static mudarTema(codOperadora) {
    if (codOperadora == '3160') {
      document.body.setAttribute('color-theme', 'parana')      
    } else {
      document.body.setAttribute('color-theme', 'saudi')      
    }
  }
}