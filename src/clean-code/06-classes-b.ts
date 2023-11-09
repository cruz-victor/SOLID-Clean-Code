(() => {
  // class Person{
  //     public name:string;
  //     public gender:Gender;
  //     public birthdate:Date;

  //     constructor(name:string, gender:Gender, birthdate:Date){
  //         this.name=name;
  //         this.gender=gender;
  //         this.birthdate=birthdate;
  //     }
  // }

  type Gender = "M" | "F";
  
  interface PersonProperties {
    birthday: Date;
    gender  : Gender;
    name    : string;
  }
  
  class Person {
    public birthday: Date;
    public gender  : Gender;
    public name    : string;

    constructor({ name, gender, birthday }: PersonProperties) {
      this.birthday = birthday;
      this.gender   = gender;
      this.name     = name;
    }
  }


  interface UserProperties{
    birthday: Date;
    email   : string;
    gender  : Gender;
    name    : string;
    role    : string;
  }

  class User extends Person {
    public email     : string;
    public lastAccess: Date;
    public role      : string;

    constructor({email,role, name,  gender,  birthday}:UserProperties) {
      super({name, gender, birthday});
      this.email      = email;
      this.lastAccess = new Date();
      this.role       = role;
    }

    checkCredentilas() {
      return true;
    }
  }


  interface UserSettingsProperties {
    birthday        : Date;
    email           : string;
    gender          : Gender;
    lastOpenFolder  : string;
    name            : string;
    role            : string;
    workingDirectory: string;
  }

  //La clase UserSettings Violenta el principio de responsabilidad unica
  //La clase UserSetings tiene varias responsabilidades
  //Maneja estado del directorio
  //Maneja datos de la persona
  //Maneja datos del usuario
  class UserSettings extends User {
    public lastOpenFolder  : string;
    public workingDirectory: string;

    constructor( {workingDirectory,lastOpenFolder, name,  gender,  birthday,  email,  role}:UserSettingsProperties ) {
      super({email, role, name, gender, birthday});
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder   = lastOpenFolder;
    }
  }

  //   const newPerson = new Person("Victor", "M", new Date("1985-01-01"));
  //   console.log({ newPerson });




  const newUserSettings = new UserSettings(
    {
      workingDirectory: "/usr/home",
      lastOpenFolder  : "/home",
      name            : "Juan",
      gender          : "M",
      birthday        : new Date("1985-01-15"),
      email           : "mi@correo.com",
      role            : "administrador"
    }
  );
  console.log({ newUserSettings });




})();
