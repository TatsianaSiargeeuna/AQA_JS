export{}

// 1. Создайте дженерик класс Storage<T>, где T должен быть ограничен объектом, имеющим КАК МИНИМУМ {id: number}.
// Задача класса - хранить объекты типа Т в приватном массиве
// Реализуйте в классе следующие методы:


interface User {
    id: number;
    name: string;
    age: number
    country?: string;
};


class Storage <T extends User> {

    private objectsToSave: T[] = [];


//   - constructor должен принимать необзятельный массив объектов соответствующего типа. 
//     Если массив пришел - объекты запушить в хранилище.
    
    constructorMethod(array?: T[]) {
        if (array) {
        this.objectsToSave.push(...array)
        }
    };


//   - add, принимающий либо объект типа Т, либо объект типа Т без id. Метод должен быть реализовать с помощью ПЕРЕГРУЗКИ.
//     Если на вход подан объект без айди - айди надо сгенерировать, затем запушить обьект в хранилище
//     Если на вход подан объект с айди - запушить его в хранилище
//     Для типизации используйте Utility Types

    add(object: T): void;
    add(object: Omit<T, 'id'>): void;
    add(object: T | Omit<T, 'id'>) {

        if (!('id' in object)) {

            const idForObject = function generateIdForObject(): number {
                let newId = 0;
                this.objectsToSave.forEach((object: T) => {
                    if (newId < object.id) {
                        newId = object.id 
                    };           
                });

                return newId + 1;
            };

            const newObjectWithId = {...object, idForObject};
            this.objectsToSave.push(newObjectWithId);

            } else {
                this.objectsToSave.push(object);
            };
    };
   

//   - update, принимающий объект с айди и любым набором остальных ключей из типа Т. 

    update(object: Pick<T,'id'> | Partial<T>): void {
        
        const findObjectIndex = this.objectsToSave.findIndex((element) => element.id === object.id);

        const currentObject = this.objectsToSave[findObjectIndex];
        const updatedObject = { ...currentObject, ...object };
        this.objectsToSave.splice(findObjectIndex, 1, updatedObject);
};


//   - remove, принимающий на вход id и удаляющий объект из массива

    remove(id: number): T[] {

        const findObjectById = this.objectsToSave.find((element) => element.id === id);

        if (findObjectById === undefined){
            throw new Error (`There is no user with id ${id}`);   
         } else {
             const indexOfFindedObjectById = this.objectsToSave.indexOf(findObjectById);
             return this.objectsToSave.splice(indexOfFindedObjectById, 1);
         };
    };


//   - getById(id), возвращающий объект по айди если найден

    getById(id: number): T {

        const findId = this.objectsToSave.find((element) => element.id === id);

        if (findId === undefined){
           throw new Error (`There is no user with id ${id}`);   
        } else {
            return findId;
        };
    };


//   - getAll(), возвращает все объекты в хранилище

    getAll(): T[]{
        return this.objectsToSave;
    };
};


const TestStorage = new Storage;


const userForConstructor = [
    {id: 1, name: 'Petr', age: 29}, 
    {id: 2, name: 'Ivan', age: 32}
];

const userForConstructor_2 = [
    {id: 3, name: 'Anna', age: 26}, 
    {id: 4, name: 'Olga', age: 19}
];


const objectForUpdate = 
    {id: 4, name: 'Olga', age: 19, country: 'Belarus'};


const objectForAddWithId = 
    {id: 5, name: 'Elena', age: 39};

const objectForAddWithoutId = 
    {name: 'Igor', age: 34};


TestStorage.constructorMethod(userForConstructor);
TestStorage.constructorMethod(userForConstructor_2);

TestStorage.add(objectForAddWithId);
TestStorage.add(objectForAddWithoutId);

TestStorage.update(objectForUpdate);
TestStorage.remove(3);
console.log(TestStorage.getById(2));
console.log(TestStorage.getAll());

