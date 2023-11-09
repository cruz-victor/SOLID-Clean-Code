(() => {
  
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
    email   : string;    
    role    : string;
  }

  class User {
    public email     : string;    
    public role      : string;
    public lastAccess: Date;

    constructor({email,role}:UserProperties) {      
      this.email      = email;
      this.lastAccess = new Date();
      this.role       = role;
    }

    public checkCredentials() {
      return true;
    }
  }




  interface SettingsProperties {    
    lastOpenFolder  : string;    
    workingDirectory: string;
  }

  class Settings {
    public lastOpenFolder  : string;
    public workingDirectory: string;

    constructor( {workingDirectory,lastOpenFolder}:SettingsProperties ) {      
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder   = lastOpenFolder;
    }
  }




  interface UserSettingsProperties{
    name            : string;
    gender          : Gender;        
    birthday        : Date;
    
    email           : string;
    role            : string;
    
    lastOpenFolder  : string;
    workingDirectory: string;    
  }

  class UserSettings{
    public person  : Person;
    public user    : User;
    public settings: Settings;
    
    constructor({
      name,  gender, birthday, 
      email, role, 
      lastOpenFolder, workingDirectory
    }:UserSettingsProperties){
      this.person=new Person({ name, gender, birthday });
      this.user=new User({ email, role });
      this.settings=new Settings({ workingDirectory, lastOpenFolder });
    }
  }

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
