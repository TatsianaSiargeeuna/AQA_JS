// 1. Создайте interface ItEmployee
// 2. В интерфейсе ItEmployee сделайте поле name которое может быть только string
// 3. В интерфейсе ItEmployee сделайте поле surname которое может быть только string
// 4. В интерфейсе ItEmployee сделайте поле salary которое может быть только number и доступно только для чтения
// 5. Создайте тип данных Grade для стринговой переменной, которая может принимать значения: junior, middle, senior, lead
// 6. В интерфейсе ItEmployee сделайте поле grade типа Grade
// 7. Создайте enum OCCUPATION, который будет представлять професси в айти вида DEVELOPER = "Developer" и так далее
// 8. В интерфейсе ItEmployee сделайте поле occupation типа OCCUPATION
// 9. Создайте интерфейс IAddress, предствляющий объект с полями country, street, house, flat
// 10. В интерфейсе ItEmployee сделайте необязательное поле address типа IAddress
// 11. В интерфейсе ItEmployee сделайте projectNames, типа массив строк (названий проектов)
// 12. Создайте объект с типом ItEmployee


type Grade =  'junior' | 'middle' | 'senior' | 'lead';

enum OCCUPATION {
    DEVELOPER = 'Developer',
    QA = 'QA',
    AQA = 'AQA',
    BA = 'BA',
    PM = 'PM',
}

interface IAdress {
    country: string;
    street: string
    house: number;
    flat: number;
}

interface ItEmployee {
    name: string;
    surname: string;
    readonly salary: number;
    grade: Grade;
    occupation: OCCUPATION;
    adress?: IAdress;
    projectNames: string[];
    getInfo(): string;
}

const printEmployeeInfo: ItEmployee = {
    name: 'Ivan',
    surname: 'Ivanov',
    salary: 2100,
    grade: 'middle',
    occupation: OCCUPATION.BA,
    projectNames: ['Project_1', 'Project_2', 'Project_3'],
    adress: {
        country: 'Belarus',
        street: 'Minskaya',
        house: 19,
        flat: 29
    },

    getInfo() {
        return `name: ${this.name} ${this.surname}
        occupation: ${this.occupation}, ${this.grade}
        salary: ${this.salary}$
        projects: ${this.projectNames}
        address: ${this.adress}`
    }
};

console.log(printEmployeeInfo.getInfo());

