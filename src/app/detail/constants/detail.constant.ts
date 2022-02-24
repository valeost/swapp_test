const SWFilms = {
  ANewHope: "https://swapi.dev/api/films/1/",
  TheEmpireStrikesBack: "https://swapi.dev/api/films/2/",
  ReturnoftheJedi: "https://swapi.dev/api/films/3/",
  ThePhantomMenace: "https://swapi.dev/api/films/4/",
  AttackoftheClones: "https://swapi.dev/api/films/5/",
  RevengeoftheSith: "https://swapi.dev/api/films/6/",
};
const SWImages = {
  ANewHope:
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/una-nueva-esperanza-1575449085.jpg?crop=1xw:1xh;center,top&resize=980:*",
  TheEmpireStrikesBack:
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/el-imperio-contraataca-1575448990.jpg?crop=1xw:1xh;center,top&resize=980:*",
  ReturnoftheJedi:
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/el-retorno-del-jedi-1575448991.jpg?crop=1xw:1xh;center,top&resize=980:*",
  ThePhantomMenace:
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/la-amenaza-fantasma-1575448990.jpg?crop=1xw:1xh;center,top&resize=980:*",
  AttackoftheClones:
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/el-ataque-de-los-clones-1575448990.jpg?crop=1xw:1xh;center,top&resize=980:*",
  RevengeoftheSith:
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/la-venganza-de-los-sith-1575448991.jpg?crop=1xw:1xh;center,top&resize=980:*",
};
export const SWFilmImageMapping = {
  [SWFilms.ANewHope]: SWImages.ANewHope,
  [SWFilms.AttackoftheClones]: SWImages.AttackoftheClones,
  [SWFilms.ReturnoftheJedi]: SWImages.ReturnoftheJedi,
  [SWFilms.RevengeoftheSith]: SWImages.RevengeoftheSith,
  [SWFilms.TheEmpireStrikesBack]: SWImages.TheEmpireStrikesBack,
  [SWFilms.ThePhantomMenace]: SWImages.ThePhantomMenace,
};
