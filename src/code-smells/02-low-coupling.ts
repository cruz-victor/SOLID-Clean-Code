(()=>{

    type Gender = 'M'|'F';

    interface PersonProps {
        firstName: string;
        lastName : string;
        gender   : Gender;
        birthdate: Date;
    }

    class Person {
        public firstName: string;
        public lastName : string;
        public gender   : Gender;
        public birthdate: Date;

        constructor({ lastName, firstName, gender, birthdate }: PersonProps ){
            this.firstName = firstName;
            this.lastName  = lastName;
            this.gender    = gender;
            this.birthdate = birthdate;
        }
    }


    interface UserProps {
        email     : string;
        role      : string;
    }
    class User {

        public email       : string;
        public role        : string;
        private lastAccess : Date;

        constructor({ email, role }: UserProps ){
            this.lastAccess = new Date();
            this.email      = email;
            this.role       = role;
        }

        checkCredentials() {
            return true;
        }
    }


    interface SettingsProps {
        lastFolderOpen  : string;
        workingDirectory: string;
    }

    class Settings {
        public workingDirectory: string; 
        public lastFolderOpen  : string; 

        constructor({ workingDirectory, lastFolderOpen }: SettingsProps ){
            this.workingDirectory = workingDirectory;
            this.lastFolderOpen = lastFolderOpen;
        }
    }
    
    
    interface UserSettingsProps {
        birthdate       : Date;
        email           : string;
        gender          : Gender;
        lastFolderOpen  : string;
        firstName       : string;
        lastName        : string;
        role            : string;
        workingDirectory: string;
    }


    class UserSettings {
        public person  : Person;
        public user    : User; 
        public settings: Settings;

        constructor({ 
            firstName, lastName, gender, birthdate,
            email, role,
            workingDirectory, lastFolderOpen,
        }: UserSettingsProps) {
            this.person   = new Person({ lastName, firstName, gender, birthdate });
            this.user     = new User({ email, role });
            this.settings = new Settings({ workingDirectory, lastFolderOpen })
        }
    }


    const userSettings = new UserSettings({
        birthdate       : new Date('1985-10-21'),
        email           : 'victor@google.com',
        gender          : 'M',
        lastFolderOpen  : '/home',
        firstName       : 'Victor',
        lastName        : 'CG',
        role            : 'Admin',
        workingDirectory: '/usr/home'
    });

    console.log({ userSettings, credentials: userSettings.user.checkCredentials() });
    
})()