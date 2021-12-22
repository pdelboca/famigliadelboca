FamilyTree.templates.myTemplate = Object.assign({}, FamilyTree.templates.tommy);
FamilyTree.templates.myTemplate.size = [150, 140];
FamilyTree.templates.myTemplate.defs = '';
FamilyTree.templates.myTemplate.ripple = {
    radius: 100,
    color: "#e6e6e6",
    rect: null
};

FamilyTree.templates.myTemplate.field_0 = '<text style="font-size: 16px;" x="75" y="120" text-anchor="middle">{val}</text>';
FamilyTree.templates.myTemplate.field_1 = '<text style="font-size: 10px;" x="75" y="135" text-anchor="middle">{val}</text>';

FamilyTree.templates.myTemplate_male = Object.assign({}, FamilyTree.templates.myTemplate);
FamilyTree.templates.myTemplate_male.node = '<circle cx="75" cy="50" r="50" fill="#B5EAEA" stroke-width="1" stroke="#aeaeae"></circle>';
FamilyTree.templates.myTemplate_female = Object.assign({}, FamilyTree.templates.myTemplate);
FamilyTree.templates.myTemplate_female.node = '<circle cx="75" cy="50" r="50" fill="#FFBCBC" stroke-width="1" stroke="#aeaeae"></circle>';


var family = new FamilyTree(document.getElementById("tree"), {
    template: "myTemplate",
    enableSearch: false,
    nodeMouseClick: FamilyTree.action.expandCollapse,
    collapse: {
                level: 4,
                allChildren: true
            },
    nodeBinding: {
        field_0: "name",
        field_1: "birth"
    }});

family.load([
    //
    //{ id: xxx, pids: [xxx], name: "Franchesco Antonio Del Boca", gender: 'male', birth: '1741 (Boca)'},
    //{ id: xxx, pids: [xxx], name: "María Angela Valazza", gender: 'female'},
    //
    { id: 98, name: "Carlo Gaudenzio Del Boca", gender: 'male'},
    //{ id: xx, pids: [xx], name: "Minazzoli Lucia", gender: 'female'},
    // Primera Generacion
    { id: 1, pids: [97], fid: 98, name: "Giovanni Del Boca", gender: 'male', birth: '1815? (Boca)'},
    { id: 97, pids: [1], name: "Maria Margarita Bisetti", gender: 'female'},
    // Segunda Generacion
    { id: 2, pids: [3], fid: 1, mid: 97, name: "Gaudenzio Del Boca", gender: 'male', birth: '25/02/1853 (Boca)', death: '--/--/1929'},
    { id: 3, pids: [2], name: "Marianna Vallazza", gender: 'female', birth: "12/03/1855 (Boca)", death: "--/--/----" },
    { id: 99, fid: 1, mid: 97, name: "Giovanni Battista Del Boca", gender: 'male', birth: '24/??/1857 (Boca)'},
    // Tercera Generacion
    { id: 4, pids: [5], fid: 2, mid: 3, name: "Maria Margherita", gender: 'female', birth: "15/01/1877 (Boca)", death: "--/--/---- (Córdoba, Arg)"},
    { id: 5, pids: [4], name: "Giuseppe Vallaza", gender: 'male'},
    { id: 6, pids: [7], fid: 2, mid: 3, name: "Vittorio Giovanni", gender: 'male', birth: "02/11/1879 (Boca)", death: "24/07/1968 (Oncativo, Arg)" },
    { id: 7, pids: [6], name: "Giuseppina Sartore", gender: 'female' },
    { id: 8, pids: [9], fid: 2, mid: 3, name: "Emilio Felice", gender: 'male', birth: "13/05/1882 (Boca)", death: "1960 (Boca)" },
    { id: 9, pids: [8], name: "María Martinotti", gender: 'female'},
    { id: 10, pids: [11], fid: 2, mid: 3, name: "Pietro", gender: 'male', birth: "24/06/1883 (Boca)", death: "1948 (Boca)" },
    { id: 11, pids: [10], name: "Carmelina Perolini", gender: 'female'},
    { id: 12, pids: [13], fid: 2, mid: 3, name: "Pierino Luigi", gender: 'male', birth: "15/10/1884 (Boca)", death: "1966 (Oncativo, Arg)" },
    { id: 13, pids: [12], name: "Florinda Sartore", gender: 'female'},
    { id: 14, pids: [15, 16], fid: 2, mid: 3, name: "Iginio Gaudenzio", gender: 'male', birth: "09/07/1887 (Boca)", death: "(Oncativo, Arg)" },
    { id: 15, pids: [14], name: "Zia Pinin", gender: 'female'},
    { id: 16, pids: [14], name: "Zia Judita", gender: 'female'},
    { id: 17, pids: [18], fid: 2, mid: 3, name: "Domenica Teresa (Manghin)", gender: 'female', birth: "19/12/1892 (Boca)", death: "31/03/---- (Oncativo, Arg)" },
    { id: 18, pids: [17], name: "Sebastino Bogliotti", gender: 'male'},
    { id: 19, pids: [20], fid: 2, mid: 3, name: "Teresa Cristina (Teresin)", gender: 'female', birth: "16/04/1894 (Boca)", death: "29/07/1982 (Oncativo, Arg)" },
    { id: 20, pids: [19], name: "Carlo Chiara", gender: 'male'},
    { id: 21, pids: [22], fid: 2, mid: 3, name: "Cristina", gender: 'female', birth: "02/07/1895 (Boca)", death: "--/06/1987 (Oncativo, Arg)" },
    { id: 22, pids: [21], name: "Michele Baretta", gender: 'male'},
    { id: 23, pids: [24], fid: 2, mid: 3, name: "Giovanni Pietro", gender: 'male', birth: "17/01/1899 (Boca)", death: "1946 (Boca)" },
    { id: 24, pids: [23], name: "Adelmina Vallaza", gender: 'female'},
    // Cuarta Generacion
    // Maria Margherita
    { id: 25, fid: 5, mid: 4, name: "Anita Vallazza", gender: 'female'},
    { id: 26, fid: 5, mid: 4, name: "Italo Vallazza", gender: 'male'},
    { id: 27, fid: 5, mid: 4, name: "Maria Vallazza", gender: 'female'},
    { id: 28, fid: 5, mid: 4, name: "Vittorio Vallazza", gender: 'male'},
    // Vittorio Giovanni
    { id: 29, fid: 6, mid: 7, name: "Guglielmina", gender: 'female'},
    { id: 30, fid: 6, mid: 7, name: "Gaudenzio", gender: 'male'},
    // Emilio Felice
    { id: 31, fid: 8, mid: 9, name: "Angela", gender: 'female'},
    { id: 32, fid: 8, mid: 9, name: "Emilia", gender: 'female'},
    // Pietro
    { id: 33, fid: 10, mid: 11, name: "Ines", gender: 'female'},
    { id: 34, fid: 10, mid: 11, name: "Elsa", gender: 'female'},
    // Pierino
    { id: 35, fid: 12, mid: 13, name: "Emilio", gender: 'male'},
    { id: 36, fid: 12, mid: 13, name: "Alfonso", gender: 'male'},
    // Iginio Gaudencio
    { id: 37, fid: 14, mid: 16, name: "Dante", gender: 'male'},
    { id: 38, fid: 14, mid: 15, name: "Italo", gender: 'male'},
    // Domenica Teresa
    { id: 39, fid: 18, mid: 17, name: "Elsa", gender: 'female'},
    { id: 40, fid: 18, mid: 17, name: "Irma", gender: 'female'},
    // Teresa Cristina
    { id: 41, fid: 20, mid: 19, name: "Francisco", gender: 'male'},
    { id: 42, fid: 20, mid: 19, name: "Virgilio", gender: 'male'},
    { id: 43, fid: 20, mid: 19, name: "Ida", gender: 'female'},
    { id: 44, fid: 20, mid: 19, name: "Emilio", gender: 'male'},
    // Cristina
    { id: 45, fid: 22, mid: 21, name: "Yolanda", gender: 'female'},
    { id: 46, fid: 22, mid: 21, name: "Hebe", gender: 'female'},
    { id: 47, fid: 22, mid: 21, name: "Oscar", gender: 'male'},
    // Giovani Pietro
    { id: 48, fid: 23, mid: 24, name: "Anna", gender: 'female'},
    { id: 49, fid: 23, mid: 24, name: "Elisa", gender: 'female'},
    // Quinta Generacion
    // Anita
    { id: 50, mid: 25, name: "Elvira", gender: 'female'},
    // Guglielmina
    { id: 51, mid: 29, name: "Ilda", gender: 'female'},
    { id: 52, mid: 29, name: "Eda", gender: 'female'},
    { id: 53, mid: 29, name: "Celso", gender: 'male'},
    // Gaudenzio
    { id: 54, fid: 30, name: "Miguel", gender: 'male'},
    { id: 55, fid: 30, name: "Atilio", gender: 'male'},
    { id: 56, fid: 30, name: "Rodolfo", gender: 'male'},
    { id: 57, fid: 30, name: "Mario", gender: 'male'},
    // Ines
    { id: 58, mid: 33, name: "Maria Rosa", gender: 'female'},
    // Elsa
    { id: 59, mid: 34, name: "Ileana", gender: 'female'},
    { id: 60, mid: 34, name: "Piera", gender: 'female'},
    // Emilio
    { id: 61, fid: 35, name: "Riccardito", gender: 'male'},
    // Alfonso
    { id: 62, fid: 36, name: "Carlos", gender: 'male'},
    { id: 63, fid: 36, name: "Ninina", gender: 'female'},
    // Dante
    { id: 64, fid: 37, name: "A. María", gender: 'female'},
    { id: 65, fid: 37, name: "Dante", gender: 'male'},
    // Italo
    { id: 66, fid: 38, name: "Carmen", gender: 'female'},
    { id: 67, fid: 38, name: "Victor", gender: 'male'},
    // Irma
    { id: 68, mid: 40, name: "Carlos", gender: 'male'},
    { id: 69, mid: 40, name: "Maria Elena", gender: 'female'},
    // Francisco
    { id: 70, fid: 41, name: "Liliana", gender: 'female'},
    { id: 71, fid: 41, name: "Cristina", gender: 'female'},
    // Virgilio
    { id: 72, fid: 42, name: "Griselda", gender: 'female'},
    // Ida
    { id: 73, mid: 43, name: "Juan Carlos", gender: 'male'},
    { id: 74, mid: 43, name: "Olga", gender: 'female'},
    // Yolanda
    { id: 75, mid: 45, name: "Horacio", gender: 'male'},
    { id: 76, mid: 45, name: "Susana", gender: 'female'},
    { id: 77, mid: 45, name: "Nora", gender: 'female'},
    // Oscar
    { id: 78, fid: 47, name: "Miguel", gender: 'male'},
    { id: 79, fid: 47, name: "Maria", gender: 'female'},
    { id: 80, fid: 47, name: "Alejandra", gender: 'female'},
    // Anna
    { id: 81, mid: 48, name: "Gianmario", gender: 'male'},
    { id: 82, mid: 48, name: "Enzo", gender: 'male'},
    // Elisa
    { id: 83, mid: 49, name: "Gianni", gender: 'male'},
    { id: 84, mid: 49, name: "Paolo", gender: 'male'},
    // Sexta Generacion
    // Miguel
    { id: 85, fid: 54, name: "Basilio", gender: 'male'},
    { id: 86, fid: 54, name: "Tete", gender: 'male'},
    // Atilio
    { id: 87, fid: 55, name: "Atilio", gender: 'male'},
    { id: 88, fid: 55, name: "Marcelo", gender: 'male'},
    { id: 89, fid: 55, name: "Pablo", gender: 'male'},
    { id: 90, fid: 55, name: "Javier", gender: 'male'},
    { id: 91, fid: 55, name: "Cristina", gender: 'female'},
    // Rodolfo
    { id: 92, fid: 56, name: "Maria Laura", gender: 'male'},
    { id: 93, fid: 56, name: "Pablo", gender: 'male'},
    { id: 94, fid: 56, name: "Ezequiel", gender: 'male'},
    // Mario
    { id: 95, fid: 57, name: "Esteban", gender: 'male'},
    { id: 96, fid: 57, name: "Patricio", gender: 'male'},
    ])

